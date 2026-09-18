/**
 * The three phases, shared by the Home summary and the How we work page.
 * Phase names are provisional until Tyler confirms them.
 */
export const process = {
  intro: {
    eyebrow: "How we work",
    title: "Three phases. Each one ends with something you can use.",
    body: "Every engagement follows the same path. You always know what is happening, what you will see, and what you get at the end.",
  },
  labels: {
    happens: "What happens",
    clientSees: "What you see",
    youGet: "What you get",
  },
  phases: [
    {
      number: "01",
      name: "Assess",
      summary: "We map how work actually gets done today.",
      happens: [
        "Interviews with the people doing the work, not just leadership",
        "A map of your tools, handoffs, and manual steps",
        "A ranked list of opportunities by effort and payoff",
      ],
      clientSees: "Short working sessions with your team. A written summary after each one.",
      youGet: "An opportunity map and a recommended starting point.",
    },
    {
      number: "02",
      name: "Redesign",
      summary: "We design the new workflow before anything gets built.",
      happens: [
        "The future process, step by step",
        "Where AI helps and where a person stays in the loop",
        "Success measures agreed up front",
      ],
      clientSees: "Workflow drafts you can mark up. Nothing moves forward without your sign-off.",
      youGet: "An approved workflow design and build plan.",
    },
    {
      number: "03",
      name: "Implement",
      summary: "We build it, roll it out, and stay until it sticks.",
      happens: [
        "Automations and AI tools connected to your existing software",
        "Training for the people who use it",
        "Adoption tracked against the success measures",
      ],
      clientSees: "Working software early and often. Regular check-ins on adoption.",
      youGet: "A running system your team owns and understands.",
    },
  ],
} as const;
