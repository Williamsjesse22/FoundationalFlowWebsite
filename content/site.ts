/**
 * Site-wide settings. Everything a non-developer might need to change lives in /content.
 * Components hold no copy.
 */
export const site = {
  name: "Foundational Flow",
  legalName: "Foundational Flow",
  location: "Urbandale, Iowa",
  url: "https://foundationalflow.com",
  /** Internal brand line. Not shown on the site (mockup note 1). */
  tagline: "We stay. We build. You lead.",
  description:
    "Operations and AI for remodeling companies. We work alongside your team to build the systems that help you grow, so taking on more jobs does not mean adding more overhead.",

  /**
   * Where every "Book a call" goes. The buttons scroll to the form on the home page,
   * which emails Tyler. There is deliberately no calendar link.
   */
  bookHref: "/#contact",

  /** Where contact form submissions are read, and the address shown in the contact section. */
  contactEmail: "tyler@foundationalflow.com",
} as const;
