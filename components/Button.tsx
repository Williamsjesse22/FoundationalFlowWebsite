import Link from "next/link";
import { site } from "@/content/site";

/** Brand Guide §7. Teal is for booking a call only, one per screen. */
export type ButtonVariant = "teal" | "primary" | "outline" | "ghost";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  /** Renders the outline/ghost variants for navy backgrounds. */
  onDark?: boolean;
  className?: string;
  /** Marks a teal button in page content, so the header hides its own (one teal per screen). */
  tealSentinel?: boolean;
}

export function ButtonLink({ href, children, variant = "primary", onDark, className = "", tealSentinel }: ButtonLinkProps) {
  const cls = ["btn", `btn-${variant}`, onDark && "btn-on-dark", className].filter(Boolean).join(" ");
  const data = tealSentinel ? { "data-teal-sentinel": "" } : {};
  return /^https?:\/\//.test(href) ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...data}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls} {...data}>
      {children}
    </Link>
  );
}

/**
 * Every "Book a call" goes through here, so setting site.bookingUrl updates all of them.
 * In-page instances are sentinels by default; the header's own button opts out.
 */
export function BookCallButton({ inHeader = false, className }: { inHeader?: boolean; className?: string }) {
  return (
    <ButtonLink href={site.bookingUrl ?? "/contact"} variant="teal" tealSentinel={!inHeader} className={className}>
      Book a call
    </ButtonLink>
  );
}
