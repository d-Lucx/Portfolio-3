import { profile } from '../content/profile';
export function SiteHeader() {
  return <header className="site-header wrap">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <a className="brand" href="#home" aria-label="Rene Christian home"><span className="brand-mark" aria-hidden="true">rc</span><span><strong>{profile.name}</strong><span className="brand-sub">Computer Engineering</span></span></a>
    <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#about">About</a><a href="#activity">Activity</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a></nav>
    <a className="header-github" href={profile.github}>GitHub <span aria-hidden="true">↗</span></a>
  </header>;
}
