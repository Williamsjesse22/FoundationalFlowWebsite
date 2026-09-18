import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="section tone-navy page-intro glow not-found">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1>This page does not exist.</h1>
        <p className="body-large">It may have moved, or the link may be wrong.</p>
        <div className="actions">
          <ButtonLink href="/" variant="outline" onDark>
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
