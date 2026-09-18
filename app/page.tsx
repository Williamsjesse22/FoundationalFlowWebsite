import Link from "next/link";
import { home } from "@/content/home";
import { process } from "@/content/process";
import { BookCallButton, ButtonLink } from "@/components/Button";
import { ClosingCta, Section } from "@/components/Sections";

export default function HomePage() {
  const { hero, whatWeDo, proof, people } = home;
  return (
    <>
      {/* 1. Hero, navy */}
      <section className="section tone-navy hero glow">
        <div className="container">
          <h1 className="display">
            {hero.headline.map((part, i) => (
              <span key={i} className={part.dim ? "dim" : undefined}>
                {i > 0 && " "}
                {part.text}
              </span>
            ))}
          </h1>
          <p className="body-large">{hero.body}</p>
          <div className="actions">
            <BookCallButton />
            <ButtonLink href={hero.secondaryCta.href} variant="outline" onDark>
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 2. What we do, off-white */}
      <Section tone="offwhite" labelledBy="what-title">
        <p className="eyebrow">{whatWeDo.eyebrow}</p>
        <h2 id="what-title">{whatWeDo.title}</h2>
        <ul className="card-grid" role="list">
          {whatWeDo.cards.map((c) => (
            <li key={c.title} className="card" data-reveal>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. How we work, white */}
      <Section tone="white" labelledBy="process-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">{home.process.eyebrow}</p>
            <h2 id="process-title">{home.process.title}</h2>
          </div>
          <Link href={home.process.link.href} className="text-link">
            {home.process.link.label}
          </Link>
        </div>
        <ol className="phase-row" role="list">
          {process.phases.map((phase) => (
            <li key={phase.number} className="phase-mini" data-reveal>
              <span className="phase-number">{phase.number}</span>
              <h3>{phase.name}</h3>
              <p>{phase.summary}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4. Proof, navy. Hidden until a real result is supplied. */}
      {proof && (
        <Section tone="navy" className="proof glow" labelledBy="proof-title">
          <p className="proof-number">{proof.number}</p>
          <h2 id="proof-title">{proof.label}</h2>
          <p>{proof.context}</p>
        </Section>
      )}

      {/* 5. The people side, off-white */}
      <Section tone="offwhite" labelledBy="people-title">
        <div className="split">
          <div>
            <p className="eyebrow">{people.eyebrow}</p>
            <h2 id="people-title" className="h1">
              {people.title}
            </h2>
          </div>
          <div>
            {people.body.map((p) => (
              <p key={p} className="body-large">
                {p}
              </p>
            ))}
            <ul className="check-list" role="list">
              {people.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 6. Closing CTA, deep blue */}
      <ClosingCta title={home.closing.title} />
    </>
  );
}
