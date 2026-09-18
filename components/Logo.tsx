import Link from "next/link";
import { site } from "@/content/site";

/** The mark, verbatim from Brand Guide §3. Color comes from the parent via currentColor. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 56 48" fill="none" aria-hidden="true">
      <path d="M4 6 L22 24 L4 42" stroke="currentColor" strokeWidth="8" strokeOpacity=".2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 6 L36 24 L18 42" stroke="currentColor" strokeWidth="8" strokeOpacity=".55" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 6 L50 24 L32 42" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Full lockup: mark, wordmark, descriptor. Min 130px wide per §3. */
export function Logo() {
  return (
    <Link href="/" className="logo">
      <LogoMark className="logo-mark" />
      <span className="logo-text">
        <span className="logo-name">{site.name}</span>
        <span className="logo-descriptor">{site.descriptor}</span>
      </span>
    </Link>
  );
}
