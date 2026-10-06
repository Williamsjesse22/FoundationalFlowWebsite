"use client";

import { callVis, sampleLabel } from "@/content/home";
import { useRevealLoop } from "@/lib/motion";

/** Lead intake: the voice agent answers, qualifies, and books the consult. */
export function CallVis() {
  const { lines, booked, head, ariaLabel } = callVis;
  const total = lines.length + 1; // the booked card is the last reveal
  const shown = useRevealLoop(total, { startDelay: 2500, gap: 1100, firstGap: 600, pause: 4000 });

  const visible = (i: number) => (shown !== null && i < shown ? " show" : "");

  return (
    <div className="vis call" role="img" aria-label={ariaLabel} {...(shown === null ? {} : { "data-anim": "1" })}>
      <div className="vis-head">
        <span className="live">{head}</span>
        <span>{sampleLabel}</span>
      </div>
      <div className="vis-body">
        {lines.map((line, i) => (
          <div className={`say ${line.who}${visible(i)}`} key={line.text}>
            {line.text}
          </div>
        ))}
        <div className={`booked${visible(lines.length)}`}>
          <div>
            <b>{booked.title}</b>
            <small>{booked.detail}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
