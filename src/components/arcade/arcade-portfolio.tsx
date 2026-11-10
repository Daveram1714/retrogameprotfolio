"use client";

import { useCallback, useEffect, useState } from "react";
import { TopBar } from "./top-bar";
import { WelcomeScreen } from "./welcome-screen";
import { LevelScreen } from "./level-screen";
import { MobileLevelMenu } from "./top-bar";
import { levels } from "@/data/portfolio";

export function ArcadePortfolio() {
  const [started, setStarted] = useState(false);
  const [activeLevel, setActiveLevel] = useState(0);

  const navigate = useCallback((index: number) => {
    setActiveLevel(Math.max(0, Math.min(levels.length - 1, index)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goHome = useCallback(() => {
    setStarted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.target instanceof HTMLElement && ["INPUT", "TEXTAREA", "BUTTON", "A"].includes(event.target.tagName)) return;
      if (event.key === "ArrowRight" && started) navigate(activeLevel + 1);
      if (event.key === "ArrowLeft" && started) navigate(activeLevel - 1);
      if (event.key === "Escape" && started) goHome();
      if (event.key === "Enter" && !started) setStarted(true);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeLevel, goHome, navigate, started]);

  const start = () => {
    setStarted(true);
    setActiveLevel(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="arcade-shell">
      <div className="scanlines" aria-hidden="true" />
      <TopBar activeLevel={activeLevel} onNavigate={(index) => { setStarted(true); navigate(index); }} onHome={goHome} />
      {started ? <><MobileLevelMenu activeLevel={activeLevel} onNavigate={(index) => navigate(index)} onHome={goHome} /><LevelScreen activeLevel={activeLevel} onNavigate={navigate} onHome={goHome} /></> : <WelcomeScreen onStart={start} onSkip={start} />}
      <div className="arcade-footer"><span>© 2026 DAVERAM A</span><span>BUILT WITH NEXT.JS / TYPESCRIPT / PIXEL ENERGY</span><button onClick={goHome} type="button">RETURN TO TITLE</button></div>
    </div>
  );
}
