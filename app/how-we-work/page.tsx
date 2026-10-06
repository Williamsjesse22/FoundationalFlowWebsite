import type { Metadata } from "next";
import { process } from "@/content/process";
import { BookCallButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "How we work",
  description: "What happens in each phase, what you see, and what you get at the end.",
};

/**
 * Not linked from the site yet. The home page covers how we work in three steps;
 * this page still carries the earlier general-AI positioning and needs a rewrite.
 */
export default function HowWeWorkPage() {
  const { labels } = process;
  return (
    <>
      <section className="sec">
        <div className="head">
          <span className="dim">{process.intro.eyebrow}</span>
          <h1>{process.intro.title}</h1>
          <p>{process.intro.body}</p>
        </div>
      </section>

      <section className="sec">
        <div className="builds">
          {process.phases.map((phase, i) => (
            <div className={`build${i % 2 ? " flip" : ""}`} key={phase.number}>
              <div className="btext">
                <span className="tag">{phase.number}</span>
                <h2>{phase.name}</h2>
                <p>{phase.summary}</p>
              </div>
              <div className="vis">
                <div className="vis-head">
                  <span>{labels.happens}</span>
                </div>
                <div className="vis-body">
                  <ul className="plain-list">
                    {phase.happens.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <div className="why">
                    <small>{labels.clientSees}</small>
                    <p>{phase.clientSees}</p>
                  </div>
                  <div className="why">
                    <small>{labels.youGet}</small>
                    <p>{phase.youGet}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="anything">
          <p>
            <b>{process.intro.title}</b>
          </p>
          <BookCallButton />
        </div>
      </section>
    </>
  );
}
