import { Terminal } from "lucide-react";

export function ProfileScreen() {
  return (
    <div className="level-content">
      <div className="about-grid">
        <div className="profile-card">
          <div className="profile-card-top"><span>PLAYER CARD</span><span className="online-pill">● ONLINE</span></div>
          <div className="avatar-frame"><div className="avatar-pixel"><span>DA</span></div><div className="avatar-spark spark-one">✦</div><div className="avatar-spark spark-two">✧</div></div>
          <h3>DAVERAM A</h3><p>FULL STACK DEVELOPER</p>
          <div className="profile-stats"><span>LEVEL <b>01+</b></span><span>CLASS <b>ENGINEER</b></span></div>
        </div>
        <div className="about-copy">
          <p className="terminal-label"><Terminal size={15} /> PLAYER_BIO.TXT</p>
          <h3>Curious mind.<br /><span>Builder mindset.</span></h3>
          <p>I&apos;m a Full Stack Developer focused on building scalable web applications with React, Node.js and TypeScript. I enjoy solving real-world problems — from designing clean APIs and database structures to crafting responsive user interfaces.</p>
          <p>I&apos;ve worked across SaaS platforms, multi-tenant systems, background processing and production deployments. I care about writing maintainable code and understanding how the whole system works, not just one screen.</p>
          <div className="stat-row"><div><strong>1,000<span>+</span></strong><small>APIs BUILT</small></div><div><strong>08</strong><small>APPLICATIONS</small></div><div><strong>03</strong><small>CORE STACKS</small></div></div>
        </div>
      </div>
    </div>
  );
}
