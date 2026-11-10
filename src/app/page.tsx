"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Rocket,
  Terminal,
  X,
  Zap,
} from "lucide-react";

const skills = [
  { name: "TypeScript", type: "LANGUAGE", level: "ADVANCED" },
  { name: "JavaScript", type: "LANGUAGE", level: "ADVANCED" },
  { name: "Node.js", type: "BACKEND", level: "ADVANCED" },
  { name: "Express.js", type: "BACKEND", level: "ADVANCED" },
  { name: "React.js", type: "FRONTEND", level: "ADVANCED" },
  { name: "Next.js", type: "FRONTEND", level: "WORKING" },
  { name: "Tailwind CSS", type: "FRONTEND", level: "ADVANCED" },
  { name: "Prisma", type: "DATABASE", level: "ADVANCED" },
  { name: "MySQL", type: "DATABASE", level: "ADVANCED" },
  { name: "MongoDB", type: "DATABASE", level: "WORKING" },
  { name: "Redis + BullMQ", type: "SYSTEMS", level: "WORKING" },
  { name: "Docker", type: "TOOLS", level: "WORKING" },
];

const projects = [
  {
    id: "01",
    title: "Multi-tenant SaaS",
    subtitle: "BACKEND SYSTEM",
    description:
      "Tenant-aware architecture with separate databases, dynamic Prisma clients, middleware-based tenant resolution and relational data workflows.",
    stack: ["Node.js", "TypeScript", "Prisma", "MySQL"],
    accent: "violet",
  },
  {
    id: "02",
    title: "HRMS Platform",
    subtitle: "BUSINESS APPLICATION",
    description:
      "Employee, attendance, leave, shift and workweek workflows backed by a structured data model and production APIs.",
    stack: ["React", "Node.js", "Redis", "BullMQ"],
    accent: "pink",
  },
  {
    id: "03",
    title: "Duty Automation",
    subtitle: "BACKGROUND PROCESSING",
    description:
      "Automated shift rotation, clock-out calculations and delayed background jobs using Redis, BullMQ and scheduled workers.",
    stack: ["Node.js", "Redis", "BullMQ", "Prisma"],
    accent: "blue",
  },
];

const experience = [
  {
    period: "DEC 2024 — PRESENT",
    role: "Full Stack Developer",
    company: "Skyraan Technologies",
    detail:
      "Building and maintaining full-stack SaaS applications, REST APIs, database workflows and production deployments across multiple applications.",
    points: [
      "Developed 1,000+ APIs across 8 applications",
      "Worked with relational models, joins, transactions and indexing",
      "Deployed and maintained applications using cPanel, PM2 and Nginx",
    ],
  },
];

function PixelButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      className={`pixel-button ${variant === "secondary" ? "pixel-button--secondary" : ""}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default function Home() {
  const [started, setStarted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const enterGame = () => {
    setStarted(true);
    window.setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const goTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="arcade-shell">
      <div className="scanlines" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#" aria-label="Player One home">
          <span className="brand-mark">DA</span>
          <span>DAVERAM<span className="brand-dot">.EXE</span></span>
        </a>
        <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
          {["about", "skills", "experience", "projects", "contact"].map((item) => (
            <button
              key={item}
              className={activeSection === item ? "nav-link nav-link--active" : "nav-link"}
              onClick={() => goTo(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </nav>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <span className="top-status"><span className="status-light" /> PLAYER ONLINE</span>
      </header>

      <section className="hero" aria-label="Welcome screen">
        <div className="hero-stars" aria-hidden="true">
          {Array.from({ length: 34 }, (_, i) => (
            <i key={i} style={{ left: `${(i * 37 + 7) % 100}%`, top: `${(i * 53 + 11) % 78}%`, animationDelay: `${(i % 7) * 0.4}s` }} />
          ))}
        </div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> INSERT COIN TO BEGIN <span className="eyebrow-line" /></div>
          <p className="hero-kicker">WELCOME, PLAYER 01</p>
          <h1 className="hero-title"><span>DAVERAM</span><span className="hero-title-accent">A<span className="blink">_</span></span></h1>
          <div className="hero-subtitle">FULL STACK DEVELOPER</div>
          <p className="hero-description">
            I build digital experiences, craft reliable backends<br className="desktop-break" />
            and turn complex ideas into working products.
          </p>
          <div className="hero-actions">
            <PixelButton onClick={enterGame}><span className="play-triangle" /> START GAME</PixelButton>
            <button className="text-action" onClick={() => goTo("projects")} type="button">VIEW MY WORK <ArrowUpRight size={15} /></button>
          </div>
          <div className="hero-hint"><span className="hint-dot" /> PRESS START TO ENTER STORY MODE</div>
        </div>

        <div className="ufo-scene" aria-hidden="true">
          <div className="ufo-beam" />
          <div className="ufo">
            <div className="ufo-dome" />
            <div className="ufo-body"><span /><span /><span /><span /><span /></div>
            <div className="ufo-light" />
          </div>
          <div className="ufo-caption">✦ 1UP ✦</div>
        </div>

        <div className="pixel-landscape" aria-hidden="true">
          <div className="mountain mountain-one" />
          <div className="mountain mountain-two" />
          <div className="city-back">
            {Array.from({ length: 18 }, (_, i) => <div key={i} className={`building building-${i % 5}`} />)}
          </div>
          <div className="city-front">
            {Array.from({ length: 13 }, (_, i) => <div key={i} className={`front-building front-building-${i % 4}`} />)}
          </div>
          <div className="ground-line" />
          <div className="ground" />
        </div>
        <div className="hero-bottom">
          <span>© 2026 DAVERAM A</span>
          <span>EST. IN THE DIGITAL WORLD</span>
          <span>SCROLL TO EXPLORE <ArrowDown size={13} /></span>
        </div>
      </section>

      <div className="game-divider"><span>✦</span> LEVEL 01 — THE PLAYER <span>✦</span></div>

      <section className="content-section about-section" id="about">
        <div className="section-heading">
          <span className="section-index">01 / PLAYER PROFILE</span>
          <h2>THE PLAYER<span className="heading-period">.</span></h2>
        </div>
        <div className="about-grid">
          <div className="profile-card">
            <div className="profile-card-top"><span>PLAYER CARD</span><span className="online-pill">● ONLINE</span></div>
            <div className="avatar-frame">
              <div className="avatar-pixel"><span>DA</span></div>
              <div className="avatar-spark spark-one">✦</div><div className="avatar-spark spark-two">✧</div>
            </div>
            <h3>DAVERAM A</h3>
            <p>FULL STACK DEVELOPER</p>
            <div className="profile-stats"><span>LEVEL <b>01+</b></span><span>CLASS <b>ENGINEER</b></span></div>
          </div>
          <div className="about-copy">
            <p className="terminal-label"><Terminal size={15} /> PLAYER_BIO.TXT</p>
            <h3>Curious mind.<br /><span>Builder mindset.</span></h3>
            <p>
              I&apos;m a Full Stack Developer focused on building scalable web applications with
              React, Node.js and TypeScript. I enjoy solving real-world problems — from designing
              clean APIs and database structures to crafting responsive user interfaces.
            </p>
            <p>
              I&apos;ve worked across SaaS platforms, multi-tenant systems, background processing
              and production deployments. I care about writing maintainable code and understanding
              how the whole system works, not just one screen.
            </p>
            <div className="stat-row">
              <div><strong>1,000<span>+</span></strong><small>APIs BUILT</small></div>
              <div><strong>08</strong><small>APPLICATIONS</small></div>
              <div><strong>03</strong><small>CORE STACKS</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section skills-section" id="skills">
        <div className="section-heading">
          <span className="section-index">02 / POWER UPS</span>
          <h2>MY LOADOUT<span className="heading-period">.</span></h2>
        </div>
        <p className="section-intro">THE TOOLS I USE TO BUILD, SHIP AND LEVEL UP.</p>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-card-top"><span>{skill.type}</span><span>0{i + 1}</span></div>
              <div className="skill-icon">{i % 3 === 0 ? <Braces /> : i % 3 === 1 ? <Code2 /> : <Zap />}</div>
              <h3>{skill.name}</h3>
              <div className="skill-card-bottom"><span className="skill-level"><i /> {skill.level}</span><span>UNLOCKED</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section experience-section" id="experience">
        <div className="section-heading">
          <span className="section-index">03 / QUEST LOG</span>
          <h2>EXPERIENCE<span className="heading-period">.</span></h2>
        </div>
        <div className="quest-list">
          {experience.map((job) => (
            <article className="quest-card" key={job.company}>
              <div className="quest-marker"><span>✦</span></div>
              <div className="quest-content">
                <div className="quest-meta"><span>{job.period}</span><span className="quest-tag">MAIN QUEST</span></div>
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
                <p>{job.detail}</p>
                <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-heading">
          <span className="section-index">04 / GAME LIBRARY</span>
          <h2>SELECTED BUILDS<span className="heading-period">.</span></h2>
        </div>
        <p className="section-intro">A FEW SYSTEMS AND FEATURES FROM MY DEVELOPMENT JOURNEY.</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card project-card--${project.accent}`} key={project.id}>
              <div className="project-art">
                <div className="project-art-grid" />
                <span className="project-number">GAME {project.id}</span>
                <div className="project-symbol">{project.id === "01" ? <Braces /> : project.id === "02" ? <Monitor /> : <Rocket />}</div>
                <span className="project-art-label">{project.subtitle}</span>
              </div>
              <div className="project-info">
                <div className="project-title-row"><h3>{project.title}</h3><span>↗</span></div>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <a className="github-link" href="https://github.com/Daveram1714" target="_blank" rel="noreferrer">
          <Github size={17} /> EXPLORE MORE ON GITHUB <ArrowUpRight size={15} />
        </a>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-stars" aria-hidden="true">✦　·　✧　　·　✦　　·　✧　　✦　·　✧</div>
        <span className="section-index">05 / FINAL LEVEL</span>
        <h2>LET&apos;S BUILD<br /><span>SOMETHING</span><br />EPIC<span className="heading-period">.</span></h2>
        <p>Have an idea, an opportunity, or a challenging problem?<br />I&apos;m always up for the next quest.</p>
        <div className="contact-actions">
          <a className="pixel-button" href="https://github.com/Daveram1714" target="_blank" rel="noreferrer"><Github size={17} /> GITHUB</a>
          <a className="pixel-button pixel-button--secondary" href="https://www.linkedin.com/in/daveram-a-a45176265/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LINKEDIN</a>
        </div>
        <div className="contact-footer">
          <span>PLAYER ONE — DAVERAM A</span>
          <span>THANKS FOR PLAYING <span className="footer-heart">♥</span></span>
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>BACK TO TOP ↑</a>
        </div>
      </section>
    </main>
  );
}
