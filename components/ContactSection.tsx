import { contactSection } from "@/content/home";
import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";

/**
 * Navy closing section. The form is the only way to reach Tyler from the site.
 * `heading` is h2 inside the home page and h1 when the section is the whole page.
 */
export function ContactSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  const Heading = heading;
  return (
    <section className="sec contact" id="contact" aria-labelledby="contact-title">
      <div>
        <span className="dim">{contactSection.eyebrow}</span>
        <Heading id="contact-title">{contactSection.title}</Heading>
        <div className="alt">
          <p>
            <b>{contactSection.lead}</b>
          </p>
          <p>
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
