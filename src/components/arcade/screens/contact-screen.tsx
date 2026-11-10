import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { PixelButton } from "../pixel-button";

export function ContactScreen() {
  return (
    <div className="level-content contact-level">
      <div className="contact-orbit" aria-hidden="true">✦　✧　✦</div>
      <h3>READY FOR THE<br /><span>NEXT QUEST?</span></h3>
      <p>Have an idea, an opportunity, or a challenging problem? Let&apos;s connect and build something useful.</p>
      <div className="contact-actions">
        <PixelButton href="https://www.linkedin.com/in/daveram-a-a45176265/"><Linkedin size={17} /> CONTACT ME</PixelButton>
        <PixelButton href="https://github.com/Daveram1714" variant="secondary"><Github size={17} /> GITHUB</PixelButton>
        <PixelButton href="https://www.linkedin.com/in/daveram-a-a45176265/" variant="secondary"><Linkedin size={17} /> LINKEDIN</PixelButton>
      </div>
      <p className="contact-note">PLAYER ONE IS READY TO COLLABORATE <ArrowUpRight size={14} /></p>
    </div>
  );
}
