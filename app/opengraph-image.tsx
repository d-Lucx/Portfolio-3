import { ImageResponse } from 'next/og';
export const alt = 'Rene Christian — Computer Engineering Student focused on AI Automation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function SocialImage() {
  return new ImageResponse(<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', background: '#173c30', color: '#f5f5ef', padding: '65px' }}><div style={{ display: 'flex', fontSize: 23, letterSpacing: 3 }}>RENE CHRISTIAN</div><div style={{ display: 'flex', flexDirection: 'column', fontSize: 80, letterSpacing: -4, lineHeight: 1.06 }}><span>Code. Systems.</span><span style={{ color: '#c9f388' }}>Automation.</span></div><div style={{ display: 'flex', fontSize: 23, color: '#d5dfd4' }}>Computer Engineering Student · AI Automation</div></div>, size);
}
