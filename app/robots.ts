import type { MetadataRoute } from 'next';
import { siteOrigin } from '../lib/site-url.ts';
export default function robots(): MetadataRoute.Robots {
  const origin = siteOrigin(process.env.SITE_URL);
  const publicProduction = process.env.VERCEL_ENV === 'production' && !!origin;
  return { rules: { userAgent: '*', ...(publicProduction ? { allow: '/', disallow: '/api/' } : { disallow: '/' }) }, ...(publicProduction ? { sitemap: new URL('/sitemap.xml', origin).href } : {}) };
}
