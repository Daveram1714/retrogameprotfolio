"use client";

import { useState } from "react";
import { ArrowUpRight, Braces, Monitor, Rocket, X } from "lucide-react";
import { projects } from "@/data/portfolio";

const symbols = [Braces, Monitor, Rocket];

export function ProjectsScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const activeProject = projects.find((project) => project.id === selected);
  return (
    <div className="level-content">
      <div className="projects-grid projects-grid--interactive">
        {projects.map((project, index) => {
          const Icon = symbols[index];
          return <button className={`project-card project-card--${project.accent}`} key={project.id} onClick={() => setSelected(project.id)} type="button">
            <div className="project-art"><div className="project-art-grid" /><span className="project-number">GAME {project.id}</span><div className="project-symbol"><Icon /></div><span className="project-art-label">{project.type}</span></div>
            <div className="project-info"><div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={18} /></div><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-open-hint">CLICK TO OPEN CASE FILE ↗</span></div>
          </button>;
        })}
      </div>
      {activeProject && <div className="project-modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
        <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
          <button className="project-modal__close" onClick={() => setSelected(null)} aria-label="Close project details" type="button"><X size={18} /></button>
          <span className="detail-panel__eyebrow">CASE FILE / GAME {activeProject.id}</span>
          <h3 id="project-modal-title">{activeProject.title}</h3><p>{activeProject.description}</p>
          <div className="case-study-block"><span>THE CHALLENGE</span><p>{activeProject.challenge}</p></div>
          <div className="case-study-block"><span>IMPLEMENTATION</span><p>{activeProject.approach}</p></div>
          <div className="case-study-block"><span>RESULT</span><p>{activeProject.outcome}</p></div>
          <div className="tag-list">{activeProject.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </section>
      </div>}
      <p className="interaction-hint">OPEN A PROJECT CARD TO EXPLORE THE CASE STUDY</p>
    </div>
  );
}
