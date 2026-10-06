"use client";

import { receiptFlow } from "@/content/home";
import { useStepLoop } from "@/lib/motion";

/**
 * Hero visual: a receipt arrives, is read, matched to a project and filed.
 * With motion off it rests on the finished state (mockup note 2).
 */
export function ReceiptFlow() {
  const { receipt, stages, foot, label, sampleLabel, ariaLabel } = receiptFlow;
  // One step per stage, plus two resting steps where every stage is done.
  const step = useStepLoop(stages.length + 2);

  return (
    <div className="flow" role="img" aria-label={ariaLabel} {...(step === null ? {} : { "data-step": step })}>
      <div className="flow-head">
        <span className="live">{label}</span>
        <span>{sampleLabel}</span>
      </div>
      <div className="flow-body">
        <div className="rcpt" aria-hidden="true">
          <b>{receipt.vendor}</b>
          {receipt.lines.map((l) => (
            <div className="ln" key={l.item}>
              <span>{l.item}</span>
              <span>{l.amount}</span>
            </div>
          ))}
          <div className="ln tot">
            <span>{receipt.total.item}</span>
            <span>{receipt.total.amount}</span>
          </div>
          <div className="meta">
            {receipt.meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
          <div className="scan" />
        </div>
        <ol className="stages">
          {stages.map((stage, i) => (
            <li key={stage.title} className={step === null ? undefined : i < step ? "done" : i === step ? "now" : undefined}>
              <div>
                <b>{stage.title}</b>
                <small>{stage.detail}</small>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="flow-foot">
        {foot.question} <b>{foot.answer}</b>
      </p>
    </div>
  );
}
