import type { MetadataRoute } from 'next';
import { siteOrigin } from '../lib/site-url.ts';
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin(process.env.SITE_URL);
  return origin && process.env.VERCEL_ENV === 'production' ? [{ url: origin.href }] : [];
}
