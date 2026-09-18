/**
 * Contact form schema. Brand Guide §10: name, work email, company, short message. Nothing else.
 * The form renderer and the validator (client and server) both read from this,
 * so adding or changing a field is a data edit.
 */
export type FieldType = "text" | "email" | "textarea";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  maxLength: number;
  /** Shown when a required field is empty. Says how to fix it (Brand Guide §11). */
  requiredMessage: string;
  /** Shown when an email field is not a valid address. */
  invalidMessage?: string;
  autoComplete?: string;
}

export const contact = {
  eyebrow: "Contact",
  title: "Book a call",
  lead: "Tell us about your business and where the work gets stuck. We reply within one business day.",
  submitLabel: "Send message",
  sendingLabel: "Sending message",
  success: {
    title: "Message sent",
    body: "We will reply within one business day to set up a time to talk.",
  },
  errorGeneric: "Your message did not send.",
  errorRetry: "Try again in a few minutes.",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      maxLength: 100,
      autoComplete: "name",
      requiredMessage: "Enter your name.",
    },
    {
      name: "email",
      label: "Work email",
      type: "email",
      required: true,
      maxLength: 200,
      autoComplete: "email",
      requiredMessage: "Enter a work email address.",
      invalidMessage: "Enter a work email address, like name@company.com.",
    },
    {
      name: "company",
      label: "Company",
      type: "text",
      required: true,
      maxLength: 150,
      autoComplete: "organization",
      requiredMessage: "Enter your company name.",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
      maxLength: 2000,
      requiredMessage: "Tell us briefly what you need help with.",
    },
  ] satisfies FormField[],
  /** Hidden field. Real people never fill it; bots usually do. */
  honeypotName: "website",
} as const;
