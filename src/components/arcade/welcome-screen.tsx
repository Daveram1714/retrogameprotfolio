"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PixelButton } from "./pixel-button";

type WelcomeScreenProps = { onStart: () => void; onSkip: () => void };

export function WelcomeScreen({ onStart, onSkip }: WelcomeScreenProps) {
  return (
    <section className="hero title-screen" aria-label="Welcome screen">
      <div className="hero-stars" aria-hidden="true">
        {Array.from({ length: 34 }, (_, i) => <i key={i} style={{ left: `${(i * 37 + 7) % 100}%`, top: `${(i * 53 + 11) % 78}%`, animationDelay: `${(i % 7) * 0.4}s` }} />)}
      </div>
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> INSERT COIN TO BEGIN <span className="eyebrow-line" /></div>
        <p className="hero-kicker">WELCOME, PLAYER 01</p>
        <h1 className="hero-title"><span>DAVERAM</span><span className="hero-title-accent">A<span className="blink">_</span></span></h1>
        <div className="hero-subtitle">FULL STACK DEVELOPER</div>
        <p className="hero-description">I build digital experiences, craft reliable backends<br className="desktop-break" /> and turn complex ideas into working products.</p>
        <div className="hero-actions">
          <PixelButton onClick={onStart}><span className="play-triangle" /> START GAME</PixelButton>
          <button className="text-action" onClick={onSkip} type="button">SKIP INTRO <ArrowUpRight size={15} /></button>
        </div>
        <div className="hero-hint"><span className="hint-dot" /> CHOOSE YOUR NEXT LEVEL AFTER START</div>
      </div>
      <div className="ufo-scene" aria-hidden="true">
        <div className="ufo-beam" /><div className="ufo"><div className="ufo-dome" /><div className="ufo-body"><span /><span /><span /><span /><span /></div><div className="ufo-light" /></div><div className="ufo-caption">✦ 1UP ✦</div>
      </div>
      <div className="pixel-landscape" aria-hidden="true">
        <div className="mountain mountain-one" /><div className="mountain mountain-two" />
        <div className="city-back">{Array.from({ length: 18 }, (_, i) => <div key={i} className={`building building-${i % 5}`} />)}</div>
        <div className="city-front">{Array.from({ length: 13 }, (_, i) => <div key={i} className={`front-building front-building-${i % 4}`} />)}</div>
        <div className="ground-line" /><div className="ground" />
      </div>
      <div className="hero-bottom"><span>© 2026 DAVERAM A</span><span>EST. IN THE DIGITAL WORLD</span><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
    </section>
  );
}
