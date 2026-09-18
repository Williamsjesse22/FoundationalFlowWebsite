"use client";

import { useRef, useState, type FormEvent } from "react";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { validateForm, type FormErrors } from "@/lib/validate";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const successRef = useRef<HTMLHeadingElement>(null);

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

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <h2 ref={successRef} tabIndex={-1}>
          {contact.success.title}
        </h2>
        <p>{contact.success.body}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
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
          <div className="field" key={field.name}>
            <label htmlFor={id}>{field.label}</label>
            {field.type === "textarea" ? <textarea rows={5} {...common} /> : <input type={field.type} {...common} />}
            {error && (
              <p className="field-error" id={`${id}-error`}>
                {error}
              </p>
            )}
          </div>
        );
      })}

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="hp">Leave this empty</label>
        <input id="hp" name={contact.honeypotName} tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="form-error" role="alert">
          {contact.errorGeneric}{" "}
          {site.contactEmail ? (
            <>
              Email us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> instead.
            </>
          ) : (
            contact.errorRetry
          )}
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? contact.sendingLabel : contact.submitLabel}
      </button>
    </form>
  );
}
