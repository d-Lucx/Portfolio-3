import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return process.env.SITE_URL && process.env.VERCEL_ENV === 'production' ? [{ url: new URL('/', process.env.SITE_URL).href }] : [];
}
