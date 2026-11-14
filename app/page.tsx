import { projects } from '../content/projects';
import { SiteHeader } from '../components/SiteHeader';
import { Hero } from '../components/Hero';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ProjectIndex } from '../components/ProjectIndex';
import { AboutSkills } from '../components/AboutSkills';
import { Contact } from '../components/Contact';
import { ContributionCalendar } from '../components/ContributionCalendar';

export default function Home() {
  return <><SiteHeader/><main className="wrap" id="main-content"><Hero/><FeaturedProjects projects={projects}/><ProjectIndex projects={projects}/><AboutSkills/><section className="activity section" id="activity" aria-labelledby="activity-heading"><div className="section-heading"><div><span className="section-index">04 / GitHub activity</span><h2 id="activity-heading">An ongoing practice.</h2></div><a className="text-link" href="https://github.com/d-Lucx">Explore GitHub <span aria-hidden="true">↗</span></a></div><ContributionCalendar/></section><Contact/></main></>;
}
