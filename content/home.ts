/**
 * Home page, in the section order from Brand Guide §10.
 */
export const home = {
  hero: {
    /** The tagline is the headline. `dim` renders at 45% opacity (Brand Guide §5). */
    headline: [
      { text: "We stay. We build.", dim: true },
      { text: "You lead.", dim: false },
    ],
    body: "We build AI systems that do the repetitive work so your team can focus on the stuff that actually moves the business forward.",
    secondaryCta: { label: "See how we work", href: "/how-we-work" },
  },

  whatWeDo: {
    eyebrow: "What we do",
    title: "Fix the work first. Then automate it.",
    cards: [
      {
        title: "Assess the people and roles",
        body: "We learn who does what and where their time goes. Every fix starts with the people doing the work.",
      },
      {
        title: "Evaluate and fix the process",
        body: "We find the steps that break, repeat, or wait on someone. We redesign them before anything gets automated.",
      },
      {
        title: "Implement AI and automation",
        body: "We build on top of what already works. Your team keeps its tools. The busywork goes away.",
      },
    ],
  },

  process: {
    eyebrow: "How we work",
    title: "Three phases. One outcome.",
    link: { label: "See the full process", href: "/how-we-work" },
  },

  /**
   * Proof band (navy). One concrete result, number in DM Mono.
   * Hidden while null. Needs a real, approved result from Tyler.
   * Example shape: { number: "12 hrs", label: "a week back for leadership", context: "One sentence on what we built." }
   */
  proof: null as { number: string; label: string; context: string } | null,

  people: {
    eyebrow: "The people side",
    title: "New systems only work if people use them.",
    body: [
      "Most automation projects fail at adoption, not at the build. We plan for that from day one.",
      "Change management and workforce communication run alongside the technical work. Your team hears what is changing and why. They learn the new way of working before it goes live.",
      "That is why we stay after launch. We track adoption and fix what gets in the way.",
    ],
    points: [
      "A communication plan for every rollout",
      "Hands-on training for the people doing the work",
      "Support after launch until the new way sticks",
    ],
  },

  closing: {
    title: "Tell us where the work gets stuck.",
  },
} as const;
