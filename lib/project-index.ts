import type { Category, Project } from '../content/projects.ts';

export function filterProjects(items: readonly Project[], category: Category | 'all'): readonly Project[] {
  return category === 'all' ? items : items.filter(project => project.categories.includes(category));
}
export function categoryCounts(items: readonly Project[]): Record<Category | 'all', number> {
  return { all: items.length, AI: filterProjects(items, 'AI').length, Software: filterProjects(items, 'Software').length, Hardware: filterProjects(items, 'Hardware').length };
}
