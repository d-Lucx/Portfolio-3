import Image from 'next/image';
import { profile } from '../content/profile';
import { MotionController } from './MotionController';

export function Hero() {
  return <section className="hero" id="home" aria-labelledby="hero-title" data-enter>
    <div className="hero-eyebrow"><span className="status-dot" aria-hidden="true"/> Computer Engineering Student · AI Automation</div>
    <div className="hero-grid"><div className="hero-copy">
      <h1 id="hero-title">Code. Systems.<br/><span>Automation.</span></h1>
      <p className="hero-intro">I’m <strong>Rene Christian.</strong></p>
      <p className="hero-description">I build AI workflows and software projects, and connect software with hardware. Currently learning n8n and developing my practice in AI automation.</p>
      <div className="actions"><a className="button primary" href={`mailto:${profile.email}`}>Contact me <span aria-hidden="true">↗</span></a><a className="text-link light" href="#featured">View projects <span aria-hidden="true">→</span></a></div>
    </div><div className="hero-scene" aria-label="Screenshots from Bej Hub and OmniPoint">
      <div className="screen-layer main-layer"><div className="window-bar" aria-hidden="true"><span>● ● ●</span><span>Bej Hub / studio</span></div><Image src="/projects/bej-hub.webp" alt="Actual Bej Hub studio with three AI agent characters and mission status." width={1600} height={900} priority sizes="(max-width: 850px) 90vw, 48vw"/></div>
      <div className="screen-layer secondary-layer"><div className="window-bar" aria-hidden="true"><span>● ● ●</span><span>OmniPoint / register</span></div><Image src="/projects/omnipoint.webp" alt="Actual OmniPoint register showing its catalog and checkout." width={1351} height={759} priority sizes="(max-width: 850px) 55vw, 28vw"/></div>
    </div></div>
    <div className="hero-bottom"><span>Software × Hardware × AI</span><span>Explore / Build / Improve</span><MotionController/></div>
  </section>;
}
