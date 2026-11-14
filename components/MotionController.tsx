'use client';
import { useEffect, useState } from 'react';

export function MotionController() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const root = document.documentElement;
    const apply = () => {
      root.dataset.motion = preference.matches ? 'reduced' : paused ? 'paused' : 'running';
      setReduced(preference.matches);
    };
    apply();
    preference.addEventListener('change', apply);
    const hero = document.querySelector('.hero');
    const observer = new IntersectionObserver(([entry]) => { root.dataset.heroVisible = String(entry.isIntersecting); });
    if (hero) observer.observe(hero);
    const visibility = () => { root.dataset.pageVisible = String(!document.hidden); };
    visibility();
    document.addEventListener('visibilitychange', visibility);
    return () => { observer.disconnect(); preference.removeEventListener('change', apply); document.removeEventListener('visibilitychange', visibility); };
  }, [paused]);
  return <button className="motion-toggle" type="button" aria-pressed={paused || reduced} disabled={reduced} onClick={() => setPaused(!paused)}>{reduced ? 'Reduced motion on' : paused ? 'Resume animation' : 'Pause animation'} <span aria-hidden="true">{paused || reduced ? '▷' : 'Ⅱ'}</span></button>;
}
