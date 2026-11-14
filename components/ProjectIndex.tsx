'use client';
import Image from 'next/image';
import { useState } from 'react';
import type { Category, Project } from '../content/projects';
import { categoryCounts, filterProjects } from '../lib/project-index';

const options = [{ id: 'all', name: 'All work' }, { id: 'AI', name: 'AI' }, { id: 'Software', name: 'Software' }, { id: 'Hardware', name: 'Hardware' }] as const;
export function ProjectIndex({ projects }: { projects: readonly Project[] }) {
  const [category, setCategory] = useState<Category | 'all'>('all');
  const visible = filterProjects(projects, category);
  const counts = categoryCounts(projects);
  return <section className="project-index section" id="projects" aria-labelledby="projects-heading">
    <div className="section-heading"><div><span className="section-index">02 / Project index</span><h2 id="projects-heading">The wider collection.</h2></div><p>Software, hardware, AI experiments,<br className="desktop-break"/> and ideas in progress.</p></div>
    <div className="category-bar" role="group" aria-label="Filter projects by category">{options.map(option => <button key={option.id} type="button" aria-pressed={category === option.id} onClick={() => setCategory(option.id)}>{option.name}<span>{counts[option.id]}</span></button>)}</div>
    <div className="index-meta"><p role="status" aria-live="polite" aria-atomic="true">{visible.length} {visible.length === 1 ? 'entry' : 'entries'} shown</p><span>Projects & experiments</span></div>
    <div className="archive-grid">{visible.map(project => <article className={`archive-card ${project.media ? 'with-media' : ''}`} data-project-id={project.id} key={project.id}>
      <div className="archive-copy"><div className="archive-top"><span>{project.categories.join(' / ')}</span><span className="project-status">{project.status === 'project' ? 'Project' : project.status === 'prototype' ? 'Prototype' : project.status === 'workspace' ? 'Workspace' : 'Concept'}</span></div><h3>{project.name}</h3><p>{project.summary}</p>{project.stack.length > 0 && <ul className="mini-stack" aria-label={`${project.name} tools`}>{project.stack.map(s => <li key={s}>{s}</li>)}</ul>}
        <div className="archive-actions">{project.featured ? <a href={`#case-${project.id}`}>Read case study <span aria-hidden="true">↑</span></a> : project.repository && project.repositoryVisibility === 'public' ? <a href={project.repository}>Review repository <span aria-hidden="true">↗</span></a> : <span>{project.repositoryVisibility === 'private' ? 'Private repository' : 'Engineering project'}</span>}</div>
      </div>{project.media && <a className={`archive-media ${project.id === 'tagumfare' ? 'mobile-capture' : ''}`} href={project.media.src} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} preview in a new tab`}><Image src={project.media.src} alt={project.media.alt} width={project.media.width} height={project.media.height} sizes="(max-width: 600px) 94vw, (max-width: 1023px) 45vw, 30vw"/></a>}
    </article>)}</div>
  </section>;
}
