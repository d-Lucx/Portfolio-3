/** Environment values are configuration, not trusted URLs. Metadata must never crash a build. */
export function siteOrigin(value: string | undefined): URL | undefined {
  const input = value?.trim();
  if (!input) return undefined;
  try {
    const url = new URL(input.includes('://') || /^[a-z]+:/i.test(input) && !/^localhost:\d+/i.test(input) ? input : `https://${input}`);
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) return undefined;
    return new URL(url.origin);
  } catch { return undefined; }
}
