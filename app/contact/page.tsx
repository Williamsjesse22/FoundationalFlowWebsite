import type { Metadata } from "next";
import { contactSection } from "@/content/home";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = { title: contactSection.title, description: contactSection.title };

/** The home page carries the same section at #contact; this is the standalone address for it. */
export default function ContactPage() {
  return <ContactSection heading="h1" />;
}
