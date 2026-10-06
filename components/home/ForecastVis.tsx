"use client";

import { useEffect, useMemo, useState } from "react";
import { forecastVis, sampleLabel } from "@/content/home";
import { usePrefersReducedMotion } from "@/lib/motion";

const X0 = 46,
  X1 = 460,
  Y0 = 226,
  Y1 = 14;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Backlog forecast: scheduled work drains at the burn rate, three sales paces refill it.
 * The curves and the "booked through" marker are computed, so changing the sample
 * numbers in content/home.ts moves the chart and the headline together.
 */
export function ForecastVis() {
  const { burn, maxY, startMonth, paces, headline, head, bandLabel, scheduledLabel, ariaLabel } = forecastVis;
  // Widen the readonly literal types from the content file so the maths can use plain numbers.
  const scheduled: number[] = [...forecastVis.scheduled];
  const N: number = forecastVis.months;
  const reduced = usePrefersReducedMotion();
  const [drawn, setDrawn] = useState<number>(N);

  const x = (m: number) => X0 + ((X1 - X0) * m) / N;
  const y = (v: number) => Y0 - ((Y0 - Y1) * v) / maxY;
  const monthLabel = (m: number) => {
    const d = new Date(startMonth.year, startMonth.month + m, 1);
    return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  };

  /** Backlog per month for each sales pace, from the end of the scheduled run. */
  const curves = useMemo(
    () =>
      paces.map((p) => {
        const values = [scheduled[scheduled.length - 1]];
        let zero: number | null = null;
        for (let m = scheduled.length; m <= N; m++) {
          const prev = values[values.length - 1];
          const next = prev - burn + p.sell;
          if (next <= 0 && zero === null) {
            zero = m - 1 + prev / (burn - p.sell);
            values.push(0);
            break;
          }
          values.push(Math.max(0, next));
        }
        return { ...p, values, zero };
      }),
    [paces, scheduled, burn, N],
  );

  const main = curves[0];
  const offset = scheduled.length - 1;

  useEffect(() => {
    if (reduced) {
      setDrawn(N);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      let t = 0;
      const step = () => {
        setDrawn(t);
        if (t < N) {
          t++;
          timers.push(setTimeout(step, 150));
        } else {
          timers.push(setTimeout(run, 4500));
        }
      };
      step();
    };
    timers.push(setTimeout(run, 3000));
    return () => timers.forEach(clearTimeout);
  }, [reduced, N]);

  const points = (values: readonly number[], from: number, upto: number) =>
    values
      .map((v, i) => [from + i, v] as const)
      .filter(([m]) => m <= upto)
      .map(([m, v]) => `${x(m)},${y(v)}`)
      .join(" ");

  // Tooltip follows the 12-month pace line as it draws.
  const tipMonth = drawn <= offset ? drawn : Math.min(drawn, offset + main.values.length - 1);
  const tipValue =
    drawn <= offset ? scheduled[Math.min(drawn, scheduled.length - 1)] : main.values[Math.min(drawn - offset, main.values.length - 1)];
  const atEnd = drawn > offset && drawn - offset >= main.values.length - 1;
  const tipX = x(Math.min(atEnd && main.zero !== null ? main.zero : tipMonth, N));
  const tipY = y(atEnd ? 0 : tipValue);
  const tipLabel = `${monthLabel(Math.min(Math.round(atEnd && main.zero !== null ? main.zero : tipMonth), N))} · $${(atEnd ? 0 : tipValue).toFixed(1)}M`;
  const tipWidth = tipLabel.length * 7 + 14;
  const tipLeft = Math.min(Math.max(tipX - tipWidth / 2, X0), X1 - tipWidth);

  const zeroX = main.zero !== null ? x(main.zero) : null;

  return (
    <div className="vis" role="img" aria-label={ariaLabel}>
      <div className="vis-head">
        <span className="live">{head}</span>
        <span>{sampleLabel}</span>
      </div>
      <div className="vis-body">
        <p className="fc-hl">
          {headline.before}
          <b>{main.zero !== null ? monthLabel(Math.floor(main.zero)) : monthLabel(N)}</b>
          {headline.after}
        </p>
        <svg className="fc-chart" viewBox="0 0 470 262" aria-hidden="true">
          <rect className="band" x={X0} y={y(burn)} width={X1 - X0} height={Y0 - y(burn)} />
          <text className="bandlbl halo" x={X0 + 8} y={Y0 - 8}>
            {bandLabel}
          </text>
          {Array.from({ length: maxY + 1 }, (_, v) => (
            <g key={v}>
              <line className="grid" x1={X0} x2={X1} y1={y(v)} y2={y(v)} />
              <text x={X0 - 8} y={y(v) + 4} textAnchor="end">
                {v === 0 ? "$0" : `$${v}M`}
              </text>
            </g>
          ))}
          {Array.from({ length: Math.floor(N / 3) + 1 }, (_, i) => i * 3).map((m) => (
            <text key={m} x={x(m)} y={Y0 + 18} textAnchor="middle">
              {monthLabel(m).replace(" 20", " ’")}
            </text>
          ))}
          <polyline className="ln" stroke="var(--ff-navy)" points={points(scheduled, 0, drawn)} />
          {curves.map((c) => (
            <polyline key={c.label} className="ln dash" stroke={c.color} points={drawn >= offset ? points(c.values, offset, drawn) : ""} />
          ))}
          {zeroX !== null && (
            <g className="out" style={{ opacity: main.zero !== null && drawn >= main.zero ? 1 : 0 }}>
              <line x1={zeroX} x2={zeroX} y1={y(1.6)} y2={Y0} />
              <circle cx={zeroX} cy={Y0} r="4" />
              <text x={zeroX - 6} y={y(1.6) - 6} textAnchor="end" className="halo">
                Booked through {monthLabel(Math.floor(main.zero as number))}
              </text>
            </g>
          )}
          <g className="tip" style={{ opacity: drawn >= N ? 0 : 1 }}>
            <rect x={tipLeft} y={tipY - 30} width={tipWidth} height={20} rx={4} />
            <text x={tipLeft + 7} y={tipY - 16}>
              {tipLabel}
            </text>
          </g>
        </svg>
        <div className="fc-legend">
          <span className="sol" style={{ color: "var(--ff-navy)" }}>
            <i />
            {scheduledLabel}
          </span>
          {paces.map((p) => (
            <span key={p.label} style={{ color: p.color }}>
              <i />
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
