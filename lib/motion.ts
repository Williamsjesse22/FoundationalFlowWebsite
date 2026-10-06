"use client";

import { useEffect, useRef, useState } from "react";

/** True when the visitor asked for reduced motion. False during server render and first paint. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/**
 * Steps 0, 1, ... total-1 on a loop, then starts over.
 * Returns null while motion is off, which means "render the finished state".
 */
export function useStepLoop(
  total: number,
  { interval = 1500, restPause = 2600, startDelay = 1500 }: { interval?: number; restPause?: number; startDelay?: number } = {},
): number | null {
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (reduced) {
      setStep(null);
      return;
    }
    let current = 0;
    const tick = () => {
      setStep(current);
      const next = (current + 1) % total;
      timer.current = setTimeout(tick, next === 0 ? restPause : interval);
      current = next;
    };
    timer.current = setTimeout(tick, startDelay);
    return () => clearTimeout(timer.current);
  }, [reduced, total, interval, restPause, startDelay]);

  return step;
}

/**
 * Reveals items one by one, pauses on the full set, then replays.
 * Returns null while motion is off, which means "show every item".
 */
export function useRevealLoop(
  count: number,
  { startDelay = 2000, gap = 900, firstGap = gap, pause = 4200 }: { startDelay?: number; gap?: number; firstGap?: number; pause?: number } = {},
): number | null {
  const reduced = usePrefersReducedMotion();
  const [shown, setShown] = useState<number | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (reduced) {
      setShown(null);
      return;
    }
    const timeouts = timers.current;
    const cycle = () => {
      setShown(0);
      for (let i = 0; i < count; i++) {
        timeouts.push(setTimeout(() => setShown(i + 1), firstGap + i * gap));
      }
      timeouts.push(setTimeout(cycle, firstGap + count * gap + pause));
    };
    timeouts.push(setTimeout(cycle, startDelay));
    return () => {
      timeouts.forEach(clearTimeout);
      timeouts.length = 0;
    };
  }, [reduced, count, startDelay, gap, firstGap, pause]);

  return shown;
}
