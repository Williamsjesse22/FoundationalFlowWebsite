"use client";

import { useRef, useState, type FormEvent } from "react";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { validateForm, type FormErrors } from "@/lib/validate";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const successRef = useRef<HTMLParagraphElement>(null);

  function focusFirstError(errs: FormErrors) {
    const first = contact.fields.find((f) => errs[f.name]);
    if (first) document.getElementById(`field-${first.name}`)?.focus();
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const { errors: clientErrors } = validateForm(data);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) return focusFirstError(clientErrors);

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("sent");
        requestAnimationFrame(() => successRef.current?.focus());
        return;
      }
      if (json.errors) {
        setErrors(json.errors);
        focusFirstError(json.errors);
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {contact.fields.map((field) => {
        const id = `field-${field.name}`;
        const error = errors[field.name];
        const common = {
          id,
          name: field.name,
          required: field.required,
          maxLength: field.maxLength,
          autoComplete: field.autoComplete,
          "aria-invalid": error ? true : undefined,
          "aria-describedby": error ? `${id}-error` : undefined,
        };
        return (
          <label htmlFor={id} key={field.name} className={field.full ? "full" : undefined}>
            {field.label}
            {field.type === "textarea" ? <textarea {...common} /> : <input type={field.type} {...common} />}
            {error && (
              <span className="field-error" id={`${id}-error`}>
                {error}
              </span>
            )}
          </label>
        );
      })}

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="hp">Leave this empty</label>
        <input id="hp" name={contact.honeypotName} tabIndex={-1} autoComplete="off" />
      </div>

      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? contact.sendingLabel : contact.submitLabel}
      </button>

      {status === "sent" && (
        <p className="sent" role="status" ref={successRef} tabIndex={-1}>
          <b>{contact.success.title}.</b> {contact.success.body}
        </p>
      )}
      {status === "error" && (
        <p className="sent error" role="alert">
          {contact.errorGeneric} Email us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> instead.
        </p>
      )}
    </form>
  );
}
