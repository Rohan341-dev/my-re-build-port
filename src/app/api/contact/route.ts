import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const buckets = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const previous = buckets.get(ip) ?? [];
  const recent = previous.filter((timestamp) => now - timestamp < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    buckets.set(ip, recent);
    return true;
  }

  recent.push(now);
  buckets.set(ip, recent);

  if (buckets.size > 5000) {
    for (const [key, value] of buckets) {
      if (value.every((timestamp) => now - timestamp >= WINDOW_MS)) {
        buckets.delete(key);
      }
    }
  }

  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip =
      forwarded?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Too many messages have been sent from this connection. Please try again later.",
        },
        { status: 429 },
      );
    }

    const body = await request.json().catch(() => null);
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please check the form fields and try again.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = parsed.data;

    if (data.website && data.website.length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (data.startedAt && Date.now() - data.startedAt < 1200) {
      return NextResponse.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

    if (!apiKey) {
      console.error(
        "[contact] RESEND_API_KEY is not configured. Set it to enable email delivery.",
      );
      return NextResponse.json(
        {
          ok: false,
          message: "Email delivery is not configured yet. Please use the direct email address below.",
        },
        { status: 503 },
      );
    }

    const subject = data.subject.replace(/[\r\n]+/g, " ").slice(0, 120);
    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Portfolio contact — ${subject}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`,
        html: `
          <div style="font-family: Helvetica, Arial, sans-serif; color: #0a1511; line-height: 1.6;">
            <h2 style="margin: 0 0 16px; font-size: 18px;">New portfolio message</h2>
            <p style="margin: 0 0 4px;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin: 0 0 4px;"><strong>Email:</strong> ${safeEmail}</p>
            <p style="margin: 0 0 16px;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <div style="border-top: 1px solid #dce3da; padding-top: 16px;">${safeMessage}</div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("[contact] Resend request failed", response.status, detail);
      return NextResponse.json(
        {
          ok: false,
          message: "The message could not be delivered right now. Please use the direct email address below.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Unexpected error", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong while sending your message. Please use the direct email address below.",
      },
      { status: 500 },
    );
  }
}
