import type { Metadata } from "next";
import { process } from "@/content/process";
import { home } from "@/content/home";
import { ClosingCta, Section } from "@/components/Sections";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "How we work",
  description: "Assess, redesign, implement. What happens in each phase, what you see, and what you get at the end.",
};

export default function HowWeWorkPage() {
  const { labels } = process;
  return (
    <>
      <PageIntro eyebrow={process.intro.eyebrow} title={process.intro.title} lead={process.intro.body} />

      {process.phases.map((phase, i) => (
        <Section key={phase.number} tone={i % 2 === 0 ? "white" : "offwhite"} labelledBy={`phase-${phase.number}`}>
          <div className="phase">
            <div>
              <span className="phase-number">{phase.number}</span>
              <h2 id={`phase-${phase.number}`} className="h1">
                {phase.name}
              </h2>
              <p className="body-large">{phase.summary}</p>
            </div>
            <div className="phase-details">
              <div data-reveal>
                <h3>{labels.happens}</h3>
                <ul className="check-list" role="list">
                  {phase.happens.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div data-reveal>
                <h3>{labels.clientSees}</h3>
                <p>{phase.clientSees}</p>
              </div>
              <div className="deliverable" data-reveal>
                <h3>{labels.youGet}</h3>
                <p>{phase.youGet}</p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <ClosingCta title={home.closing.title} />
    </>
  );
}
