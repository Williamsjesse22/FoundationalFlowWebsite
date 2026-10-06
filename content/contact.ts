/**
 * Contact form schema, matching the fields in Tyler's mockup.
 * The form renderer and the validator (client and server) both read from this,
 * so adding or changing a field is a data edit.
 */
export type FieldType = "text" | "email" | "tel" | "textarea";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  maxLength: number;
  /** Shown when a required field is empty. Says how to fix it. */
  requiredMessage: string;
  /** Shown when an email field is not a valid address. */
  invalidMessage?: string;
  autoComplete?: string;
  /** Renders across both columns of the form grid. */
  full?: boolean;
}

export const contact = {
  submitLabel: "Book a call",
  sendingLabel: "Sending",
  success: {
    title: "Message sent",
    body: "We will reply within one business day to set up a time to talk.",
  },
  errorGeneric: "Your message did not send.",
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
      name: "company",
      label: "Company",
      type: "text",
      required: true,
      maxLength: 150,
      autoComplete: "organization",
      requiredMessage: "Enter your company name.",
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
      name: "phone",
      label: "Phone",
      type: "tel",
      required: false,
      maxLength: 40,
      autoComplete: "tel",
      requiredMessage: "Enter a phone number.",
    },
    {
      name: "message",
      label: "What are you working toward?",
      type: "textarea",
      required: true,
      maxLength: 2000,
      requiredMessage: "Tell us briefly what you're working toward.",
      full: true,
    },
  ] satisfies FormField[],
  /** Hidden field. Real people never fill it; bots usually do. */
  honeypotName: "website",
} as const;
