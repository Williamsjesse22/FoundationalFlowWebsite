import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="sec">
      <div className="head">
        <span className="dim">Error 404</span>
        <h1>This page does not exist.</h1>
        <p>It may have moved, or the link may be wrong.</p>
      </div>
      <div className="ctas">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
