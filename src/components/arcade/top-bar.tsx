"use client";

import { Menu } from "lucide-react";
import { levels } from "@/data/portfolio";

type TopBarProps = {
  activeLevel: number;
  onNavigate: (index: number) => void;
  onHome: () => void;
};

export function TopBar({ activeLevel, onNavigate, onHome }: TopBarProps) {
  return (
    <header className="topbar">
      <button className="brand" onClick={onHome} type="button" aria-label="Return to title screen">
        <span className="brand-mark">DA</span>
        <span>DAVERAM<span className="brand-dot">.EXE</span></span>
      </button>
      <nav className="nav-links" aria-label="Portfolio levels">
        {levels.map((level, index) => (
          <button key={level.id} className={activeLevel === index ? "nav-link nav-link--active" : "nav-link"} onClick={() => onNavigate(index)} type="button">
            {level.number} {level.id}
          </button>
        ))}
      </nav>
      <span className="top-status"><i className="status-light" /> PLAYER ONLINE</span>
    </header>
  );
}

export function MobileLevelMenu({ activeLevel, onNavigate }: Pick<TopBarProps, "activeLevel" | "onNavigate">) {
  return (
    <details className="mobile-level-menu">
      <summary aria-label="Open level menu"><Menu size={16} /> LEVEL SELECT</summary>
      <div className="mobile-level-menu__items">
        {levels.map((level, index) => (
          <button key={level.id} className={activeLevel === index ? "nav-link nav-link--active" : "nav-link"} onClick={() => onNavigate(index)} type="button">
            {level.number} / {level.label}
          </button>
        ))}
      </div>
    </details>
  );
}
