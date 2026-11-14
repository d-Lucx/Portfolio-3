import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { Project } from '../content/projects.ts';
import { categoryCounts, filterProjects } from '../lib/project-index.ts';

const items: readonly Project[] = [
  { id: 'ai', name: 'AI prototype', summary: '', categories: ['AI', 'Software'], status: 'prototype', stack: [] },
  { id: 'device', name: 'Device', summary: '', categories: ['Hardware', 'Software'], status: 'project', stack: [], repositoryVisibility: 'private' },
  { id: 'idea', name: 'Idea', summary: '', categories: ['Software'], status: 'concept', stack: [] },
];
test('All work retains source order and includes private projects and concepts once', () => {
  assert.deepEqual(filterProjects(items, 'all').map(p => p.id), ['ai', 'device', 'idea']);
});
test('overlapping subject categories include a project once per relevant result', () => {
  assert.deepEqual(filterProjects(items, 'AI').map(p => p.id), ['ai']);
  assert.deepEqual(filterProjects(items, 'Software').map(p => p.id), ['ai', 'device', 'idea']);
  assert.deepEqual(categoryCounts(items), { all: 3, AI: 1, Software: 3, Hardware: 1 });
});
test('empty results are genuine and filtering does not mutate input', () => {
  const frozen = Object.freeze([Object.freeze(items[0])]);
  assert.deepEqual(filterProjects(frozen, 'Hardware'), []);
  assert.equal(frozen[0], items[0]);
});
