export const levels = [
  { id: "profile", number: "01", label: "PLAYER PROFILE", title: "THE PLAYER" },
  { id: "skills", number: "02", label: "POWER UPS", title: "MY LOADOUT" },
  { id: "experience", number: "03", label: "QUEST LOG", title: "EXPERIENCE" },
  { id: "projects", number: "04", label: "GAME LIBRARY", title: "SELECTED BUILDS" },
  { id: "contact", number: "05", label: "FINAL LEVEL", title: "LET'S CONNECT" },
] as const;

export const skills = [
  { name: "TypeScript", category: "LANGUAGE", level: "ADVANCED", note: "Typed application logic and maintainable API contracts." },
  { name: "JavaScript", category: "LANGUAGE", level: "ADVANCED", note: "Modern JavaScript, async flows, closures and event-driven programming." },
  { name: "Node.js", category: "BACKEND", level: "ADVANCED", note: "Backend services, REST APIs, socket APIs and application workflows." },
  { name: "Express.js", category: "BACKEND", level: "ADVANCED", note: "Routing, middleware, validation and API architecture." },
  { name: "React.js", category: "FRONTEND", level: "ADVANCED", note: "Reusable components, state-driven interfaces and responsive screens." },
  { name: "Next.js", category: "FRONTEND", level: "WORKING", note: "App Router, server/client rendering and full-stack React workflows." },
  { name: "Tailwind CSS", category: "FRONTEND", level: "ADVANCED", note: "Responsive UI systems and utility-first styling." },
  { name: "Prisma", category: "DATABASE", level: "ADVANCED", note: "Relations, transactions, joins, indexing and dynamic clients." },
  { name: "MySQL", category: "DATABASE", level: "ADVANCED", note: "Relational schema design and query-driven application data." },
  { name: "MongoDB", category: "DATABASE", level: "WORKING", note: "Document-based persistence with Mongoose." },
  { name: "Redis + BullMQ", category: "SYSTEMS", level: "WORKING", note: "Queues, delayed jobs, workers and scheduled background processing." },
  { name: "Docker", category: "TOOLS", level: "WORKING", note: "Containerizing applications and working with Docker-based environments." },
];

export const projects = [
  {
    id: "01",
    title: "Multi-tenant SaaS",
    type: "BACKEND ARCHITECTURE",
    description: "A tenant-aware SaaS foundation with a separate database per tenant, dynamic Prisma clients and middleware-based tenant resolution.",
    challenge: "Keep tenant data isolated while allowing one application codebase to serve multiple organizations.",
    approach: "Built tenant middleware, dynamic Prisma client selection and relational data workflows with transactions and indexing.",
    stack: ["Node.js", "TypeScript", "Prisma", "MySQL"],
    outcome: "Reusable multi-tenant foundation supporting complex business workflows.",
    accent: "violet",
  },
  {
    id: "02",
    title: "HRMS Platform",
    type: "BUSINESS APPLICATION",
    description: "An HRMS covering employee, attendance, leave, shift, workweek and organization workflows.",
    challenge: "Connect multiple HR workflows while keeping the data model consistent and APIs maintainable.",
    approach: "Designed relational models and delivered around 26 APIs across core HR modules.",
    stack: ["React", "Node.js", "Prisma", "MySQL"],
    outcome: "A connected HR workflow with structured modules and reusable application logic.",
    accent: "pink",
  },
  {
    id: "03",
    title: "Duty Automation",
    type: "BACKGROUND PROCESSING",
    description: "Background automation for shift rotation, clock-out calculations and automatic clock-out workflows.",
    challenge: "Run time-sensitive work reliably without making users wait for long-running requests.",
    approach: "Used Redis, BullMQ workers, delayed jobs and scheduled processing for asynchronous tasks.",
    stack: ["Node.js", "Redis", "BullMQ", "Prisma"],
    outcome: "Moved time-based operations into background workers and scheduled jobs.",
    accent: "blue",
  },
];

export const experience = {
  period: "DEC 2024 — PRESENT",
  role: "Full Stack Developer",
  company: "Skyraan Technologies",
  summary: "Building and maintaining full-stack SaaS applications, REST APIs, database workflows and production deployments.",
  highlights: [
    "Developed 1,000+ APIs across 8 applications",
    "Worked with relational models, complex joins, transactions and indexing",
    "Built multi-tenant database workflows and background processing",
    "Deployed and maintained applications using cPanel, PM2 and Nginx",
  ],
};
