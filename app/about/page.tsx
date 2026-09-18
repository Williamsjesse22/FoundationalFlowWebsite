import type { Metadata } from "next";
import { about } from "@/content/about";
import { home } from "@/content/home";
import { ClosingCta, Section } from "@/components/Sections";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "About", description: about.lead };

export default function AboutPage() {
  const { bio } = about;
  return (
    <>
      <PageIntro eyebrow={about.eyebrow} title={about.title} lead={about.lead} />

      {bio && (
        <Section tone="white" labelledBy="bio-title">
          <div className="split">
            <div>
              <h2 id="bio-title" className="h1">
                {bio.name}
              </h2>
              <p className="muted">{bio.role}</p>
            </div>
            <div>
              {bio.paragraphs.map((p) => (
                <p key={p} className="body-large">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section tone={bio ? "offwhite" : "white"}>
        <div className="stack">
          {about.sections.map((s) => (
            <div key={s.title} className="split" data-reveal>
              <h2>{s.title}</h2>
              <p className="body-large">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <ClosingCta title={home.closing.title} />
    </>
  );
}
