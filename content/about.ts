/**
 * About page. Brand Guide §10: Tyler's background in first person.
 * `bio` stays null until Tyler supplies it; the page then renders it as the lead section.
 */
export const about = {
  eyebrow: "About",
  title: "A firm that builds things that last.",
  lead: "We help businesses put AI to work where it pays off. Then we stay until it keeps working.",

  bio: null as { name: string; role: string; paragraphs: string[] } | null,

  sections: [
    {
      title: "Why we exist",
      body: "Plenty of firms will sell you an AI tool. Few will learn how your work really gets done. Fewer still stay through the messy middle of adoption. That middle is where the value is won or lost. So that is where we spend our time.",
    },
    {
      title: "Who we work with",
      body: "Business owners and operations leaders who know their processes could run better. They do not have the time or the team to redesign them. You bring the knowledge of your business. We bring the systems thinking and the build.",
    },
    {
      title: "What we believe",
      body: "Technology should make your people better at their jobs. It should not replace their judgment. Every system we build is meant to be understood and owned by the team that uses it.",
    },
  ],
} as const;
