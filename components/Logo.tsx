import Link from "next/link";
import { site } from "@/content/site";

/**
 * Three chevrons, one direction, exactly as drawn in Tyler's mockup.
 * `tone` picks the stroke treatment: "brand" is the navy lockup, "accent" ends in teal,
 * "accent-light" ends in the brighter teal the mockup uses on navy, and "mono" takes the
 * parent's color (used for the favicon).
 */
export function LogoMark({
  className,
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "accent" | "accent-light" | "mono";
}) {
  const strokes =
    tone === "mono"
      ? ["currentColor", "currentColor", "currentColor"]
      : tone === "accent"
        ? ["var(--ff-chevron-1)", "var(--ff-chevron-2)", "var(--ff-teal)"]
        : tone === "accent-light"
          ? ["var(--ff-chevron-1)", "var(--ff-chevron-2)", "var(--ff-teal-light)"]
          : ["var(--ff-chevron-1)", "var(--ff-chevron-2)", "var(--ff-navy)"];
  const opacities = tone === "mono" ? [0.2, 0.55, 1] : [1, 1, 1];
  return (
    <svg className={className} viewBox="0 0 800 688" aria-hidden="true">
      <g fill="none" strokeWidth="100" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="60,60 295,344 60,628" stroke={strokes[0]} strokeOpacity={opacities[0]} />
        <polyline points="260,60 495,344 260,628" stroke={strokes[1]} strokeOpacity={opacities[1]} />
        <polyline points="460,60 695,344 460,628" stroke={strokes[2]} strokeOpacity={opacities[2]} />
      </g>
    </svg>
  );
}

/** Mark plus wordmark. No descriptor line (mockup note 1). */
export function Logo() {
  return (
    <Link href="/" className="brand">
      <LogoMark className="brand-mark" />
      {site.name}
    </Link>
  );
}
