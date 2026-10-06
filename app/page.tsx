import { builds, hero, howWeWork, secondBrain, whatWeBuild } from "@/content/home";
import { BookCallButton } from "@/components/Button";
import { LogoMark } from "@/components/Logo";
import { ContactSection } from "@/components/ContactSection";
import { ReceiptFlow } from "@/components/home/ReceiptFlow";
import { SecondBrainVis } from "@/components/home/SecondBrainVis";
import { CallVis } from "@/components/home/CallVis";
import { ForecastVis } from "@/components/home/ForecastVis";
import { DashboardVis, FunnelVis, InboxVis } from "@/components/home/StaticVisuals";
import { BuildPanel, Problem } from "@/components/home/BuildPanel";

/** One visual per build panel, keyed by the id in content/home.ts. */
const VISUALS: Record<string, React.ReactNode> = {
  "lead-intake": <CallVis />,
  forecasting: <ForecastVis />,
  reporting: <DashboardVis />,
  hiring: <FunnelVis />,
  "back-office": <InboxVis />,
};

export default function HomePage() {
  return (
    <>
      <section className="sec hero">
        <div>
          <span className="dim">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p className="lede">{hero.lede}</p>
          <div className="ctas">
            <BookCallButton />
          </div>
          <p className="thesis">
            <LogoMark tone="accent" />
            {hero.thesis}
          </p>
        </div>
        <ReceiptFlow />
      </section>

      <section className="sec" id="work" aria-labelledby="work-title">
        <div className="head">
          <span className="dim">{whatWeBuild.eyebrow}</span>
          <h2 id="work-title">{whatWeBuild.title}</h2>
          <p>{whatWeBuild.body}</p>
        </div>

        <div className="builds">
          <div className="brain build">
            <div>
              <div className="head brain-head">
                <h3 className="brain-title">{secondBrain.title}</h3>
                <Problem>{secondBrain.problem}</Problem>
                <p>{secondBrain.body}</p>
              </div>
              <div className="points">
                {secondBrain.points.map((point) => (
                  <div className="point" key={point.title}>
                    <LogoMark tone="accent" />
                    <div>
                      <h4>{point.title}</h4>
                      <p>{point.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <SecondBrainVis />
          </div>

          {builds.map((build) => (
            <BuildPanel key={build.id} tag={build.tag} title={build.title} problem={build.problem} body={build.body} flip={build.flip}>
              {VISUALS[build.id]}
            </BuildPanel>
          ))}
        </div>

        <div className="anything">
          <p>
            <b>{whatWeBuild.closer}</b>
          </p>
          <BookCallButton />
        </div>
      </section>

      <section className="sec" id="how" aria-labelledby="how-title">
        <div className="head">
          <span className="dim">{howWeWork.eyebrow}</span>
          <h2 id="how-title">{howWeWork.title}</h2>
          <p>{howWeWork.body}</p>
        </div>
        <div className="steps">
          {howWeWork.steps.map((step) => (
            <div className="step" key={step.k}>
              <span className="k">{step.k}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
