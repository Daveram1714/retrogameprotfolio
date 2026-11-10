"use client";

import { ArrowLeft, ArrowRight, Home, RotateCcw } from "lucide-react";
import { levels } from "@/data/portfolio";

type LevelNavigationProps = {
  activeLevel: number;
  onNavigate: (index: number) => void;
  onHome: () => void;
};

export function LevelNavigation({ activeLevel, onNavigate, onHome }: LevelNavigationProps) {
  const previous = () => onNavigate(Math.max(0, activeLevel - 1));
  const next = () => onNavigate(Math.min(levels.length - 1, activeLevel + 1));
  return (
    <footer className="level-navigation">
      <button className="level-nav-button" onClick={onHome} type="button"><Home size={15} /> TITLE SCREEN</button>
      <div className="level-progress" aria-label={`Level ${activeLevel + 1} of ${levels.length}`}>
        <div className="level-progress__labels"><span>PROGRESS</span><span>{String(activeLevel + 1).padStart(2, "0")} / {String(levels.length).padStart(2, "0")}</span></div>
        <div className="level-progress__track">{levels.map((level, index) => <button key={level.id} aria-label={`Go to ${level.label}`} className={index <= activeLevel ? "level-progress__step is-done" : "level-progress__step"} onClick={() => onNavigate(index)} type="button" />)}</div>
      </div>
      <div className="level-nav-actions">
        <button className="level-nav-button" onClick={previous} disabled={activeLevel === 0} type="button"><ArrowLeft size={15} /> PREV</button>
        {activeLevel < levels.length - 1 ? <button className="level-nav-button level-nav-button--next" onClick={next} type="button">NEXT LEVEL <ArrowRight size={15} /></button> : <button className="level-nav-button level-nav-button--next" onClick={onHome} type="button"><RotateCcw size={15} /> REPLAY</button>}
      </div>
    </footer>
  );
}
