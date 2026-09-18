/**
 * Site-wide settings. Everything a non-developer might need to change lives in /content.
 * Components hold no copy.
 */
export const site = {
  name: "Foundational Flow",
  descriptor: "AI Strategy & Automation",
  legalName: "TylerLanaFox LLC",
  url: "https://foundationalflow.com",
  tagline: "We stay. We build. You lead.",
  supportingLine: "Long relationships. Real results. No wasted motion.",
  description:
    "AI strategy and automation for business owners and operations leaders. We build systems that do the repetitive work so your team can focus on what moves the business forward.",

  /**
   * Where "Book a call" goes (Calendly, Google Calendar booking page, etc.).
   * While null, every "Book a call" button links to the contact page instead.
   */
  bookingUrl: null as string | null,

  /**
   * Public email shown in the footer and contact page, and used as the fallback when
   * the form cannot send. While null, it is hidden everywhere.
   */
  contactEmail: null as string | null,

  /** Max 4 links (Brand Guide §7, Header). */
  nav: [
    { label: "How we work", href: "/how-we-work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
