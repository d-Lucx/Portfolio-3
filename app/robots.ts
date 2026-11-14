import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  const publicProduction = process.env.VERCEL_ENV === 'production' && !!process.env.SITE_URL;
  return { rules: { userAgent: '*', ...(publicProduction ? { allow: '/', disallow: '/api/' } : { disallow: '/' }) }, ...(publicProduction ? { sitemap: new URL('/sitemap.xml', process.env.SITE_URL).href } : {}) };
}
