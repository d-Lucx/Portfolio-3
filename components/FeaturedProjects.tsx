import Image from 'next/image';
import type { Project } from '../content/projects';

export function FeaturedProjects({ projects }: { projects: readonly Project[] }) {
  return <section className="featured section" id="featured" aria-labelledby="featured-heading">
    <div className="section-heading"><div><span className="section-index">01 / Selected work</span><h2 id="featured-heading">A closer look at the work.</h2></div><p>Three projects. My contribution,<br className="desktop-break"/> the decisions, and the evidence.</p></div>
    {projects.filter(p => p.featured).map((project, index) => {
      const detail = project.featured!;
      return <article className={`case-study case-${project.id}`} id={`case-${project.id}`} key={project.id} aria-labelledby={`title-${project.id}`}>
        <div className="case-copy"><div className="case-topline"><span className="project-number">0{index + 1}</span><span className="case-category">{project.id === 'bej-hub' ? 'AI workflow' : project.id === 'omnipoint' ? 'Software reliability' : 'Embedded automation'}</span></div><h3 id={`title-${project.id}`}>{project.name}</h3><p className="case-problem">{detail.problem}</p><div className="case-facts"><div><h4>My contribution</h4><p>{detail.contribution}</p></div><div><h4>What worked</h4><p>{detail.outcome}</p></div></div>
          <details className="case-details"><summary>Project context <span aria-hidden="true">＋</span></summary><p>{detail.limitations}</p>{detail.teamCredit && <p>{detail.teamCredit}</p>}</details>
          <ul className="stack-list" aria-label={`${project.name} technologies`}>{project.stack.map(s => <li key={s}>{s}</li>)}</ul>
          {project.repository && <a className="text-link" href={project.repository}>Review repository <span aria-hidden="true">↗</span></a>}
        </div>
        {project.media && <a className="case-media" href={project.media.src} target="_blank" rel="noreferrer" aria-label={`Open full ${project.name} image in a new tab`}><Image src={project.media.src} alt={project.media.alt} width={project.media.width} height={project.media.height} sizes="(max-width: 850px) 94vw, 53vw"/><span className="image-open" aria-hidden="true">↗</span></a>}
      </article>;
    })}
  </section>;
}
