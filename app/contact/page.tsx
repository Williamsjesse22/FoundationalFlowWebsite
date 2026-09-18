import type { Metadata } from "next";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Sections";

export const metadata: Metadata = { title: "Book a call", description: contact.lead };

export default function ContactPage() {
  return (
    <Section tone="offwhite" className="contact">
      <div className="contact-grid">
        <div>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h1>{contact.title}</h1>
          <p className="body-large">{contact.lead}</p>
          {site.bookingUrl && (
            <p>
              Prefer to pick a time yourself?{" "}
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
                Open the calendar
              </a>
            </p>
          )}
          {site.contactEmail && (
            <p>
              Or email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            </p>
          )}
        </div>
        <div className="card form-card">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
