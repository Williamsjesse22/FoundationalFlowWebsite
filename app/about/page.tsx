import type { Metadata } from "next";
import { about } from "@/content/about";
import { BookCallButton } from "@/components/Button";

export const metadata: Metadata = { title: "About", description: about.lead };

/**
 * Not linked from the site yet. Still carries the earlier general-AI positioning,
 * so it needs a rewrite for remodelers once Tyler supplies the copy.
 */
export default function AboutPage() {
  return (
    <>
      <section className="sec">
        <div className="head">
          <span className="dim">{about.eyebrow}</span>
          <h1>{about.title}</h1>
          <p>{about.lead}</p>
        </div>
      </section>

      <section className="sec">
        <div className="builds">
          {about.sections.map((s) => (
            <div className="build" key={s.title}>
              <div className="btext">
                <h2>{s.title}</h2>
              </div>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <div className="anything">
          <p>
            <b>{about.lead}</b>
          </p>
          <BookCallButton />
        </div>
      </section>
    </>
  );
}
