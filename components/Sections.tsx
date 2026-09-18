import { BookCallButton } from "./Button";

/**
 * Section backgrounds follow Brand Guide §6 rhythm: alternate white and off-white,
 * a navy break roughly every third section, never two dark sections back to back.
 */
export type Tone = "white" | "offwhite" | "navy" | "deepblue";

export function Section({
  tone,
  children,
  className = "",
  labelledBy,
}: {
  tone: Tone;
  children: React.ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section className={`section tone-${tone} ${className}`.trim()} aria-labelledby={labelledBy}>
      <div className="container">{children}</div>
    </section>
  );
}

/** Deep Blue closing band: one headline, one button (§10). */
export function ClosingCta({ title }: { title: string }) {
  return (
    <Section tone="deepblue" className="closing" labelledBy="closing-title">
      <h2 id="closing-title">{title}</h2>
      <BookCallButton />
    </Section>
  );
}
