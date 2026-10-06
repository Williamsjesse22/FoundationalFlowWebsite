/**
 * Home page content, ported from Tyler's homepage mockup (Draft 1, Sep 30 2026).
 *
 * Every number, name and address in the product visuals is SAMPLE DATA, shown with a
 * "Sample" label in the UI. Replace these values when Tyler supplies real ones.
 */

export const hero = {
  eyebrow: "For remodeling & design-build firms",
  title: "Operations and AI for remodeling companies.",
  lede: "We work alongside your team to build the systems that help you grow, so taking on more jobs doesn't mean adding more overhead.",
  thesis: "Building the foundation your business scales on.",
} as const;

/** Hero animation: a jobsite receipt read, matched to a project and filed. */
export const receiptFlow = {
  label: "Receipt filing",
  sampleLabel: "Sample",
  ariaLabel: "Animation of a jobsite receipt being read, matched to a project, and filed",
  receipt: {
    vendor: "HOME DEPOT",
    lines: [
      { item: "2x4x8 SPF ×12", amount: "59.76" },
      { item: '1/2" DRYWALL ×20', amount: "287.40" },
      { item: "SCREWS 1-5/8", amount: "18.97" },
      { item: "JOINT COMPOUND", amount: "19.98" },
    ],
    total: { item: "TOTAL", amount: "412.18" },
    meta: ["#4023257", "09/14/26 7:38A"],
  },
  stages: [
    { title: "Sent from the jobsite", detail: "Crew lead emails a photo · 7:42 AM" },
    { title: "Receipt read", detail: "#4023257 · Sep 14 · $412.18" },
    { title: "Matched to the project", detail: "Elm St kitchen · PM Dave" },
    { title: "Filed", detail: "Elm St kitchen / 2026-09 / HD-4023257.pdf" },
  ],
  foot: { question: "Can't tell which job?", answer: "It asks whoever sent it." },
} as const;

export const whatWeBuild = {
  eyebrow: "What we build",
  title: "Systems that grow with your business",
  body: "Every engagement starts with how your business runs today. Here are the systems we build most often for remodelers, starting with the second brain that ties them together.",
  closer: "If your team does something by hand every week, there's a good chance we can build it.",
} as const;

export const secondBrain = {
  title: "A second brain for your company",
  problem:
    "Answers live in five different tools, so the owner pieces the week together by hand, and most problems show up at month-end, when it's too late to change them.",
  body: "We connect the tools you already run on (your CRM, JobTread, QuickBooks, your calendar and email) and teach them to work together. Every week your numbers are pulled, checked and explained for you. When something starts to slip, like a missed client update, a job running over budget or a lead nobody called back, you hear about it in time to fix it.",
  points: [
    {
      title: "Everything in one place",
      body: "Leads, jobs, costs, and conversations come together, so you see the full picture of every project.",
    },
    {
      title: "See what's driving growth",
      body: "Which lead sources close, which job types make money, and where your crews' time goes.",
    },
    {
      title: "Catch things early",
      body: "A job trending over budget or a lead nobody called back shows up right away, not at month-end.",
    },
  ],
  visual: {
    ariaLabel: "Animation of five business tools feeding a second brain that writes a Monday brief",
    sources: ["CRM", "JobTread", "QuickBooks", "Calendar", "Email"],
    hub: { title: "Second brain", meta: "Updated Mon 6:00 AM" },
    brief: {
      title: "Monday brief",
      meta: "Week of Oct 5 · sample",
      items: [
        {
          chip: "Growth",
          tone: "up",
          body: "Close rate is up to 38% this month, led by referral leads.",
          source: "CRM · last 30 days",
        },
        {
          chip: "Watch",
          tone: "watch",
          body: "Job 2431 is trending 7% over on materials. Worth a look before the cabinet order goes in.",
          source: "JobTread · Job 2431",
        },
        {
          chip: "Follow up",
          tone: "todo",
          body: "Two in-home consults from last week haven't had a follow-up call yet.",
          source: "Calendar + email",
        },
      ],
    },
  },
} as const;

/** Text side of each "what we build" panel. The visuals are components keyed by `id`. */
export const builds = [
  {
    id: "lead-intake",
    tag: "Lead intake",
    title: "Every call answered, every lead booked",
    problem:
      "Calls come in while everyone is on a jobsite or home for the night. Every missed call is a homeowner who calls the next remodeler on their list.",
    body: "A voice agent picks up when the office can't: after hours, on the jobsite, during installs. It asks your qualifying questions and books the in-home consult.",
    flip: true,
  },
  {
    id: "forecasting",
    tag: "Forecasting",
    title: "Know how far out your crews are booked",
    problem:
      "Sales and production get planned separately. By the time the schedule looks thin, it's too late to sell the work that would have filled it.",
    body: "Sold work, jobs still in design, and your sales pace come together in one forecast. You see how many months of work your crews have, and you know when to push sales before the schedule thins out.",
    flip: false,
  },
  {
    id: "reporting",
    tag: "Reporting",
    title: "See every project without asking",
    problem:
      "A straight answer on pipeline or job margin means asking three people and waiting for someone to build a spreadsheet.",
    body: "Dashboards for pipeline, close rate, jobs in production, and margin by job, updated daily from the tools you already use.",
    flip: true,
  },
  {
    id: "hiring",
    tag: "Hiring",
    title: "Hire field leaders faster",
    problem:
      "One project manager posting brings in dozens of applicants, and the owner spends evenings reading résumés from people who have never run a job.",
    body: "A screening pipeline for project managers and carpenters, so the owner only interviews people worth the drive.",
    flip: false,
  },
  {
    id: "back-office",
    tag: "Back office",
    title: "A back office that scales with you",
    problem:
      "Bills, statements, and homeowner emails all land in one inbox, and the bookkeeper spends the first week of every month catching up.",
    body: "Vendor bills and accounting email sorted, entered, and matched to jobs, so month-end close goes faster as you grow.",
    flip: true,
  },
] as const;

export const problemLabel = "The problem it solves";
export const sampleLabel = "Sample";

/** Lead intake visual: a voice agent answering a call. */
export const callVis = {
  ariaLabel: "Animation of a voice agent answering a call and booking a consult",
  head: "Call answered · 7:12 PM",
  lines: [
    { who: "agent", text: "Thanks for calling. What kind of project are you thinking about?" },
    { who: "caller", text: "A kitchen remodel. We're in Ankeny." },
    { who: "agent", text: "Great. Do you have a rough budget in mind?" },
    { who: "caller", text: "Somewhere around $60 to 80k." },
  ],
  booked: { title: "In-home consult booked", detail: "Tue Oct 13 · 10:00 AM · Ankeny · Kitchen · $60–80k" },
} as const;

/** Forecast visual. `pace` values are millions of dollars sold per month. */
export const forecastVis = {
  ariaLabel: "Animated forecast of the work backlog draining over 18 months at three different sales paces",
  head: "Crew backlog forecast",
  /** The month in the middle of the sentence is computed from the numbers below. */
  headline: { before: "At your 12-month sales pace, crews are booked through ", after: "." },
  /** Backlog already scheduled, in $M, for the next four months. */
  scheduled: [4.8, 4.62, 4.05, 3.3],
  /** Monthly burn rate in $M. */
  burn: 0.8,
  months: 18,
  maxY: 5,
  startMonth: { year: 2026, month: 9 },
  scheduledLabel: "Scheduled (next 3 mo)",
  bandLabel: "Running short: under 1 month of work",
  paces: [
    { sell: 0.52, color: "var(--fc-pace-12)", label: "12-mo pace · $520K/mo" },
    { sell: 0.61, color: "var(--fc-pace-6)", label: "6-mo pace · $610K/mo" },
    { sell: 0.7, color: "var(--fc-pace-3)", label: "3-mo pace · $700K/mo" },
  ],
} as const;

/** Reporting visual. */
export const dashboardVis = {
  ariaLabel: "Sample weekly dashboard with pipeline, close rate, jobs in production, and margin by job",
  head: "Weekly numbers",
  kpis: [
    { label: "Pipeline", value: "$1.24M", delta: "+$180k" },
    { label: "Close rate", value: "38%", delta: "+4 pts" },
    { label: "In production", value: "9 jobs", delta: null },
  ],
  /** `fill` and `target` are percentages of the bar width. */
  bars: [
    { label: "Elm St kitchen", value: "31%", fill: 77.5, target: 55, low: false },
    { label: "Oak Ave basement", value: "24%", fill: 60, target: 55, low: false },
    { label: "Maple Dr bath", value: "18%", fill: 45, target: 55, low: true },
  ],
  note: "Margin by job · line marks the 22% target",
} as const;

/** Hiring visual. */
export const funnelVis = {
  ariaLabel: "Sample hiring funnel: 41 applied, 12 passed screening, 3 worth an interview",
  head: "Project manager opening",
  rows: [
    { label: "Applied", count: "41", fill: 100, tone: "neutral" },
    { label: "Passed screening", count: "12", fill: 29.3, tone: "blue" },
    { label: "Worth an interview", count: "3", fill: 7.3, tone: "teal" },
  ],
  topMatch: {
    label: "Top match",
    body: "11 years in residential remodeling, has run $2M+ in projects a year, lives 20 minutes from the shop.",
  },
} as const;

/** Back office visual. */
export const inboxVis = {
  ariaLabel: "Sample accounting inbox with each email sorted and handled",
  head: "Accounting inbox",
  rows: [
    { subject: "Ferguson · Invoice $1,286.40", detail: "Matched to Oak Ave basement", pill: "Bill entered", tone: "ok" },
    { subject: "Menards · September statement", detail: "Reconciled, no differences", pill: "Filed", tone: "ok" },
    { subject: "Lumber supplier · Price update", detail: "Flagged for the estimator", pill: "Sent to Dave", tone: "go" },
    { subject: "Homeowner · Payment question", detail: "Draft reply ready to review", pill: "Office manager", tone: "go" },
  ],
} as const;

export const howWeWork = {
  eyebrow: "How we work",
  title: "We start with your people",
  body: "We get to know how your team works before we build anything, so the tools fit your business instead of the other way around.",
  steps: [
    {
      k: "Step 1",
      title: "Walk the job",
      body: "We sit with your office and ride along with your crews to see how a project really runs today.",
    },
    {
      k: "Step 2",
      title: "Shape the process",
      body: "Together we set up the roles, handoffs, and steps that will hold up as you take on more work.",
    },
    {
      k: "Step 3",
      title: "Build and stay",
      body: "We build the tools, train your team, and stay on as your partner as the business grows.",
    },
  ],
} as const;

export const contactSection = {
  eyebrow: "Book a call",
  title: "Tell us where you want to grow",
  lead: "Book a call.",
} as const;

/** Used by the pages that still carry the older positioning. */
export const closing = {
  title: "Tell us where you want to grow.",
} as const;
