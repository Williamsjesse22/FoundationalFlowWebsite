import { NextResponse } from "next/server";
import { contact } from "@/content/contact";
import { validateForm } from "@/lib/validate";

/**
 * Contact form delivery via the Resend REST API (https://resend.com/docs/api-reference/emails/send-email).
 *
 * Env: RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL.
 * - Missing config in development: logs the submission and returns success, so the form can be tested locally.
 * - Missing config in production: returns 503 and the form shows the direct email fallback,
 *   so a lead is never silently swallowed.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (typeof body[contact.honeypotName] === "string" && body[contact.honeypotName]) {
    return NextResponse.json({ ok: true });
  }

  const { values, errors } = validateForm(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Delivery not configured. Submission:", values);
      return NextResponse.json({ ok: true });
    }
    console.error("[contact] Delivery not configured in production.");
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  const text = contact.fields
    .map((f) => `${f.label}:\n${values[f.name] || "(not provided)"}`)
    .join("\n\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: values.email,
      subject: `New inquiry from ${values.name}${values.company ? ` (${values.company})` : ""}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
