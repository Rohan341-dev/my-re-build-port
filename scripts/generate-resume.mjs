import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(__dirname, "../public");
const outputPath = resolve(outputDir, "resume.pdf");

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN = 50;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const colors = {
  ink: [0.039, 0.082, 0.067],
  muted: [0.294, 0.345, 0.322],
  faint: [0.42, 0.478, 0.447],
  brand: [0.055, 0.478, 0.318],
  rule: [0.863, 0.89, 0.855],
};

function escapePdf(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function colorOp([r, g, b]) {
  return `${r} ${g} ${b} rg`;
}

function strokeColorOp([r, g, b]) {
  return `${r} ${g} ${b} RG`;
}

const pages = [[]];
let pageIndex = 0;
let y = 792;

function newPage() {
  pages.push([]);
  pageIndex += 1;
  y = 792;
}

function ensure(space) {
  if (y - space < 58) newPage();
}

function text(value, options = {}) {
  const {
    size = 9.5,
    bold = false,
    color = colors.ink,
    x = MARGIN,
    gap,
  } = options;

  ensure(size + 8);
  const font = bold ? "/F2" : "/F1";
  const content = `BT\n${font} ${size} Tf\n${colorOp(color)}\n${x} ${y} Td\n(${escapePdf(
    value,
  )}) Tj\nET`;
  pages[pageIndex].push(content);
  y -= gap ?? size + 4.5;
}

function rule(gapAfter = 14) {
  ensure(20);
  pages[pageIndex].push(
    `q\n${strokeColorOp(colors.rule)}\n0.8 w\n${MARGIN} ${y} m ${PAGE_WIDTH - MARGIN} ${y} l S\nQ`,
  );
  y -= gapAfter;
}

function gap(amount) {
  y -= amount;
}

function heading(label) {
  ensure(58);
  gap(16);
  text(label.toUpperCase(), {
    size: 8.5,
    bold: true,
    color: colors.brand,
    gap: 12,
  });
  rule(16);
}

function wrap(value, maxChars = 100) {
  const words = value.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function paragraph(value, options = {}) {
  const lines = wrap(value, options.maxChars ?? 100);
  for (const line of lines) {
    text(line, { size: 9.5, color: colors.muted, ...options });
  }
}

// Header
text("ROHAN YADAV", { size: 26, bold: true, color: colors.ink, gap: 24 });
text("Software Engineer  |  Full-Stack Developer  |  Founder", {
  size: 10.5,
  color: colors.brand,
  gap: 18,
});
text(
  "Nepal  |  rohanyadav234.np@gmail.com  |  github.com/Rohan341-dev  |  linkedin.com/in/rohan-codekage-746656356",
  { size: 8.6, color: colors.faint, gap: 14 },
);
text("codenestnep.com", { size: 8.6, color: colors.faint, gap: 16 });
rule(16);

heading("Profile");
paragraph(
  "Software engineer and founder building full-stack products, business systems, and AI experiments. Founder of SajiloCode and CEO & Founder of Code Nest Nepal. Experience across Python/Django backends, React and Next.js frontends, PostgreSQL, computer vision, and SaaS architecture.",
  { maxChars: 106 },
);
gap(4);

heading("Experience");
text("CEO & FOUNDER", { size: 10.5, bold: true, gap: 13 });
text("Code Nest Nepal Pvt. Ltd.  |  Present", {
  size: 9,
  color: colors.faint,
  gap: 15,
});
for (const line of [
  "Drives the company's technology strategy, product direction, and team development.",
  "Bridges technical execution and business vision across SaaS, CRM, e-commerce, school and restaurant systems, and automation.",
  "Leads product development for a business management platform concept.",
]) {
  text(`- ${line}`, { size: 9.3, color: colors.muted, gap: 13 });
}
gap(6);
text("FOUNDER", { size: 10.5, bold: true, gap: 13 });
text("SajiloCode Pvt. Ltd.  |  2024 - Present", {
  size: 9,
  color: colors.faint,
  gap: 15,
});
for (const line of [
  "Founded a product lab building affordable software for schools, restaurants, and small businesses in Nepal.",
  "Built the initial school management product and expanded into restaurant management, CRM, billing, and automation.",
  "Leads product development, engineering, and team building.",
]) {
  text(`- ${line}`, { size: 9.3, color: colors.muted, gap: 13 });
}
gap(4);

heading("Selected Projects");
const projects = [
  {
    title: "SMART SCHOOL ROUTE MANAGEMENT",
    meta: "Lead Developer  |  2024 - Present",
    body: "School transportation platform combining GPS tracking, route management, driver monitoring, real-time dashboards, and OpenCV/MediaPipe camera checks.",
  },
  {
    title: "RESTRO",
    meta: "Product Developer  |  Ongoing",
    body: "Restaurant management system within the SajiloCode product line, covering menus, orders, billing, and daily operations.",
  },
  {
    title: "SHOPE-EASE",
    meta: "Founder & Developer  |  2024",
    body: "Launched e-commerce platform covering electronics, fashion, and fitness, with catalogue, search, cart, checkout, accounts, and order management.",
  },
  {
    title: "FACE RECOGNITION ATTENDANCE",
    meta: "Developer  |  Prototype",
    body: "Computer vision attendance experiment built with Python, OpenCV, MediaPipe, and Flask.",
  },
];

for (const project of projects) {
  text(project.title, { size: 9.8, bold: true, gap: 13 });
  text(project.meta, { size: 8.8, color: colors.faint, gap: 13.5 });
  paragraph(project.body, { maxChars: 104, size: 9.2 });
  gap(5);
}

heading("Technical Skills");
for (const [label, value] of [
  ["Languages", "Python, JavaScript, TypeScript, HTML, CSS"],
  ["Backend", "Django, Flask, FastAPI, REST APIs"],
  ["Frontend", "React, Next.js, Tailwind CSS"],
  ["Data", "PostgreSQL, SQLite"],
  ["AI", "LLMs, AI agents, computer vision, OpenCV, MediaPipe, automation"],
  ["Tools", "Git, GitHub, VS Code, Linux"],
]) {
  ensure(14);
  pages[pageIndex].push(
    `BT\n/F2 8.8 Tf\n${colorOp(colors.ink)}\n${MARGIN} ${y} Td\n(${escapePdf(
      label,
    )}) Tj\nET`,
  );
  pages[pageIndex].push(
    `BT\n/F1 9 Tf\n${colorOp(colors.muted)}\n${MARGIN + 66} ${y} Td\n(${escapePdf(
      value,
    )}) Tj\nET`,
  );
  y -= 14;
}

gap(2);
heading("Recognition");
for (const item of [
  "M3 Bootcamp - Mathematical Institute in Nepal (2025)",
  "Leroy AI Course - specialised AI training",
  "Nepal 3rd Cloudlet AI Conference - Certificate of Achievement",
  "Mathematics competitions and olympiad-level problem solving (2024)",
]) {
  text(`- ${item}`, { size: 9.2, color: colors.muted, gap: 13 });
}

// Footer on every page
pages.forEach((ops, index) => {
  ops.push(
    `BT\n/F1 7.5 Tf\n${colorOp(colors.faint)}\n${MARGIN} 38 Td\n(${escapePdf(
      "Rohan Yadav  |  Software Engineer  |  Portfolio resume",
    )}) Tj\nET`,
  );
  ops.push(
    `BT\n/F1 7.5 Tf\n${colorOp(colors.faint)}\n${PAGE_WIDTH - MARGIN - 45} 38 Td\n(${escapePdf(
      `Page ${index + 1} of ${pages.length}`,
    )}) Tj\nET`,
  );
});

const objects = [];
function push(body) {
  objects.push(body);
  return objects.length;
}

push("<< /Type /Catalog /Pages 2 0 R >>");
push("");
push(
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
);
push(
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
);

const pageIds = [];
for (const ops of pages) {
  const stream = ops.join("\n");
  const contentId = push(
    `<< /Length ${Buffer.byteLength(stream, "latin1")} >>\nstream\n${stream}\nendstream`,
  );
  const pageId = push(
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`,
  );
  pageIds.push(pageId);
}

objects[1] = `<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds
  .map((id) => `${id} 0 R`)
  .join(" ")}] >>`;

let pdf = "%PDF-1.4\n%\u00e2\u00e3\u00cf\u00d3\n";
const offsets = [];

objects.forEach((body, index) => {
  offsets.push(pdf.length);
  pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefStart = pdf.length;
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (const offset of offsets) {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, Buffer.from(pdf, "latin1"));
console.log(`Wrote ${outputPath} (${Buffer.byteLength(pdf, "latin1")} bytes)`);
