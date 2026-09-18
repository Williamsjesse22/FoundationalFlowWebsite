"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Brand Guide §8 scroll reveal: 400ms fade, translateY 12px to 0, 60ms stagger.
 * Applies only to elements marked data-reveal (cards and phases, not every section).
 * Content is visible by default; hiding only happens once JS has marked <html class="js">.
 */
export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    els.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.querySelectorAll(":scope > [data-reveal]")) : [];
      el.style.setProperty("--reveal-delay", `${Math.max(0, siblings.indexOf(el)) * 60}ms`);
    });
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
