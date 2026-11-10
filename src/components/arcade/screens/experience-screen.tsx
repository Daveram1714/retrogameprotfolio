import { CheckCircle2, Trophy } from "lucide-react";
import { experience } from "@/data/portfolio";

export function ExperienceScreen() {
  return (
    <div className="level-content">
      <article className="quest-card quest-card--expanded">
        <div className="quest-marker"><Trophy size={18} /></div>
        <div className="quest-content">
          <div className="quest-meta"><span>{experience.period}</span><span className="quest-tag">MAIN QUEST / COMPLETED TO DATE</span></div>
          <h3>{experience.role}</h3><h4>{experience.company}</h4><p>{experience.summary}</p>
          <div className="quest-achievements"><span>UNLOCKED ACHIEVEMENTS</span>{experience.highlights.map((item) => <div key={item}><CheckCircle2 size={15} /> {item}</div>)}</div>
        </div>
      </article>
      <div className="experience-footnote">MORE EXPERIENCE IS BEING ADDED AS THE PLAYER LEVELS UP.</div>
    </div>
  );
}
