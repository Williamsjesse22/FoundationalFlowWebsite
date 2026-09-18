import { contact, type FormField } from "@/content/contact";

export type FormValues = Record<string, string>;
export type FormErrors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateField(field: FormField, raw: unknown): string | null {
  const value = typeof raw === "string" ? raw.trim() : "";
  if (field.required && !value) return field.requiredMessage;
  if (value.length > field.maxLength) return `Keep this under ${field.maxLength} characters.`;
  if (value && field.type === "email" && !EMAIL_RE.test(value)) return field.invalidMessage ?? field.requiredMessage;
  return null;
}

/** Shared by the browser form and the API route so the rules never drift apart. */
export function validateForm(input: Record<string, unknown>): { values: FormValues; errors: FormErrors } {
  const values: FormValues = {};
  const errors: FormErrors = {};
  for (const field of contact.fields) {
    const raw = input[field.name];
    values[field.name] = typeof raw === "string" ? raw.trim() : "";
    const error = validateField(field, raw);
    if (error) errors[field.name] = error;
  }
  return { values, errors };
}
