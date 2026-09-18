"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import { BookCallButton } from "./Button";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** True while any in-page teal button is on screen, so the header can hide its own. */
function useTealOnScreen(pathname: string) {
  const [onScreen, setOnScreen] = useState(false);
  useEffect(() => {
    const sentinels = document.querySelectorAll("[data-teal-sentinel]");
    if (sentinels.length === 0) return setOnScreen(false);
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) e.isIntersecting ? visible.add(e.target) : visible.delete(e.target);
      setOnScreen(visible.size > 0);
    });
    sentinels.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);
  return onScreen;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const tealOnScreen = useTealOnScreen(pathname);

  useEffect(() => setOpen(false), [pathname]);

  // While open: lock scroll, close on Escape, trap focus inside the header.
  useEffect(() => {
    if (!open) return;
    const header = headerRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !header) return;
      const items = Array.from(header.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null);
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = site.nav.map((item) => (
    <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
      {item.label}
    </Link>
  ));

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <Logo />
        <nav aria-label="Main" className="nav-desktop">
          {links}
        </nav>
        <div className="header-actions">
          {/* Hidden (and out of tab order) while the menu is open or a page teal button is visible. */}
          <div className="header-cta" data-hidden={tealOnScreen && !open}>
            <BookCallButton inHeader />
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="menu-icon" data-open={open} aria-hidden="true" />
          </button>
        </div>
      </div>
      <nav id="mobile-nav" aria-label="Mobile" className="nav-mobile" hidden={!open}>
        {links}
      </nav>
    </header>
  );
}
