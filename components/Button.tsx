import Link from "next/link";
import { site } from "@/content/site";

export type ButtonVariant = "pri" | "sec";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export function ButtonLink({ href, children, variant = "pri", className = "" }: ButtonLinkProps) {
  const cls = ["btn", variant, className].filter(Boolean).join(" ");
  return /^https?:\/\//.test(href) ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/**
 * The site's single action. Every instance points at site.bookHref, which is the
 * contact form; the form emails Tyler (mockup note 5).
 *
 * This is a plain anchor, not next/link, on purpose. The router treats a click on an
 * already-current hash as a no-op, so a visitor who hit "Book a call", scrolled back up
 * and clicked again got nothing, and the first click landed short of the form while the
 * page was still settling. A same-document fragment link is scrolled by the browser
 * every time and honours the section's scroll-margin, so the form is always where it
 * should be. From a page without the form it is an ordinary navigation home.
 */
export function BookCallButton({ className }: { className?: string }) {
  const cls = ["btn", "pri", className].filter(Boolean).join(" ");
  return (
    <a href={site.bookHref} className={cls}>
      Book a call
    </a>
  );
}
