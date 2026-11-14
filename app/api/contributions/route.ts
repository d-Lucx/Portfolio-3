import { getCalendarState } from '../../../lib/github/cache';
export const dynamic = 'force-dynamic';
export async function GET() {
  // No request parameters: visitors cannot change the account, URL or refresh policy.
  return Response.json(await getCalendarState(), { headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
}
