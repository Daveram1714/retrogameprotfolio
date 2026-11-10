"use client";

import { useMemo, useState } from "react";
import { Braces, Code2, Database, Server, Wrench, Zap } from "lucide-react";
import { skills } from "@/data/portfolio";

const filters = ["ALL", "LANGUAGE", "FRONTEND", "BACKEND", "DATABASE", "SYSTEMS", "TOOLS"];
const icons = [Braces, Code2, Server, Database, Wrench, Zap];

export function SkillsScreen() {
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState<string | null>(null);
  const visibleSkills = useMemo(() => skills.filter((skill) => filter === "ALL" || skill.category === filter), [filter]);
  const activeSkill = skills.find((skill) => skill.name === selected);
  return (
    <div className="level-content">
      <div className="filter-bar" aria-label="Filter skills">
        {filters.map((item) => <button key={item} className={filter === item ? "filter-chip is-active" : "filter-chip"} onClick={() => { setFilter(item); setSelected(null); }} type="button">{item}</button>)}
      </div>
      <div className="skills-grid skills-grid--interactive">
        {visibleSkills.map((skill, index) => {
          const Icon = icons[index % icons.length];
          return <button className={selected === skill.name ? "skill-card skill-card--selected" : "skill-card"} key={skill.name} onClick={() => setSelected(selected === skill.name ? null : skill.name)} type="button" aria-pressed={selected === skill.name}>
            <div className="skill-card-top"><span>{skill.category}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="skill-icon"><Icon /></div><h3>{skill.name}</h3>
            <div className="skill-card-bottom"><span className="skill-level"><i /> {skill.level}</span><span>VIEW INFO ↗</span></div>
          </button>;
        })}
      </div>
      {activeSkill && <aside className="detail-panel"><span className="detail-panel__eyebrow">POWER-UP DETAILS / {activeSkill.category}</span><h3>{activeSkill.name}</h3><p>{activeSkill.note}</p><span className="detail-panel__status">● {activeSkill.level} — EQUIPPED</span></aside>}
      <p className="interaction-hint">SELECT ANY SKILL CARD TO VIEW ITS DETAILS</p>
    </div>
  );
}
