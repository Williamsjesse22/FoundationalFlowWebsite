"use client";

import { secondBrain } from "@/content/home";
import { useRevealLoop } from "@/lib/motion";
import { LogoMark } from "@/components/Logo";

/** Five tools feed the second brain, which writes the Monday brief. */
export function SecondBrainVis() {
  const { sources, hub, brief, ariaLabel } = secondBrain.visual;
  const shown = useRevealLoop(brief.items.length, { startDelay: 2000, gap: 900, firstGap: 900 });

  return (
    <div className="bv" role="img" aria-label={ariaLabel} {...(shown === null ? {} : { "data-anim": "1" })}>
      <div className="srcs">
        {sources.map((s) => (
          <div className="src-col" key={s}>
            <span className="chip-src">{s}</span>
            <span className="wire">
              <i />
            </span>
          </div>
        ))}
      </div>
      <div className="hub">
        <span>
          <LogoMark tone="accent-light" />
          {hub.title}
        </span>
        <small>{hub.meta}</small>
      </div>
      <div className="hub-wire" />
      <div className="brief">
        <div className="top">
          <b>{brief.title}</b>
          <span>{brief.meta}</span>
        </div>
        {brief.items.map((item, i) => (
          <div className={`item${shown !== null && i < shown ? " show" : ""}`} key={item.body}>
            <span className={`chip ${item.tone}`}>{item.chip}</span>
            <p>
              {item.body}
              <small>{item.source}</small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
