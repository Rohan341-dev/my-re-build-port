"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  RotateCcw,
  Send,
} from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "error" | "success";

const fieldClass =
  "w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm text-ink placeholder:text-faint/80 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15 aria-[invalid=true]:border-red-500/60";
const labelClass =
  "mb-1.5 flex items-center justify-between gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [startedAt, setStartedAt] = useState<number | undefined>(undefined);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
    mode: "onBlur",
  });

  const message = useWatch({ control, name: "message" }) ?? "";

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          startedAt,
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setServerMessage(
          data?.message ??
            "The message could not be sent right now. Please email me directly.",
        );
        return;
      }

      setStatus("success");
      reset();
      setStartedAt(undefined);
    } catch {
      setStatus("error");
      setServerMessage(
        "A network error occurred. Please check your connection or email me directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-brand/25 bg-brand/[0.06] p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="grid size-12 place-items-center rounded-full border border-brand/30 bg-brand/10 text-brand">
          <CheckCircle2 className="size-5" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-ink">
          Message received.
        </h3>
        <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-muted">
          Thank you for reaching out. I&apos;ll reply to the email address you
          provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2 text-[12px] font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
        >
          <RotateCcw className="size-3.5" aria-hidden="true" />
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onFocusCapture={() => {
        if (!startedAt) setStartedAt(Date.now());
      }}
      noValidate
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            <span>
              Name <span className="text-brand">*</span>
            </span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-[11px] text-red-600 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            <span>
              Email <span className="text-brand">*</span>
            </span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-[11px] text-red-600 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          <span>
            Subject <span className="text-brand">*</span>
          </span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="What would you like to talk about?"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldClass}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-[11px] text-red-600 dark:text-red-400">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          <span>
            Message <span className="text-brand">*</span>
          </span>
          <span className="font-normal normal-case tracking-normal text-faint">
            {message.length}/4000
          </span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell me about the idea, product, or problem you have in mind."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass, "min-h-[140px] resize-y")}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-[11px] text-red-600 dark:text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <div
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-red-500/25 bg-red-500/[0.06] px-4 py-3"
        >
          <AlertCircle
            className="mt-0.5 size-4 shrink-0 text-red-600 dark:text-red-400"
            aria-hidden="true"
          />
          <div className="text-[12px] leading-relaxed text-red-700 dark:text-red-300">
            <p>{serverMessage}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 inline-block font-medium underline underline-offset-2"
            >
              {profile.email}
            </a>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] leading-relaxed text-faint">
          Your details are only used to reply to this message.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-[#04140d] transition-all duration-300 hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Send message
              <Send
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
