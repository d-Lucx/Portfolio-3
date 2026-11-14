import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteOrigin } from '../lib/site-url';

const origin = siteOrigin(process.env.SITE_URL);
export const metadata: Metadata = {
  metadataBase: origin,
  title: 'Rene Christian — Computer Engineering & AI Automation',
  description: 'Computer Engineering student exploring AI automation through agent workflows, reliable software, and embedded systems. See the projects and contact Rene Christian.',
  alternates: origin ? { canonical: '/' } : undefined,
  robots: { index: process.env.VERCEL_ENV === 'production' && !!origin, follow: true },
  openGraph: { title: 'Rene Christian — Engineering & AI Automation', description: 'AI workflows, reliable software, and software–hardware integration. Explore the work of Rene Christian.', type: 'website', siteName: 'Rene Christian' },
  twitter: { card: 'summary_large_image' },
  other: { 'page-type': 'software', 'site-kind': 'software' },
};
export const viewport: Viewport = { themeColor: '#f5f5ef' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-type="software" data-radius="soft"><body>{children}</body></html>;
}
