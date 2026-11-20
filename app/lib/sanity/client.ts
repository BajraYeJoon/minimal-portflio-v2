import { createClient } from '@sanity/client';

/**
 * Resolve config from Vite's build-time env (browser + SSR) and fall back to
 * `process.env` so the same module also works in Node/Vercel serverless.
 */
function readEnv(key: string, fallback: string): string {
  const viteEnv = (import.meta as unknown as { env?: Record<string, string> })
    .env;
  const nodeEnv =
    typeof process !== 'undefined' ? (process.env?.[key] as string) : undefined;

  return viteEnv?.[key] || nodeEnv || fallback;
}

export const client = createClient({
  projectId: readEnv('VITE_SANITY_PROJECT_ID', 'z68c4dv3'),
  dataset: readEnv('VITE_SANITY_DATASET', 'production'),
  apiVersion: readEnv('VITE_SANITY_API_VERSION', '2025-02-01'),
  useCdn: true,
});

/** Resolve a query, falling back to `fallback` so a CMS outage cannot break a page. */
export async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  try {
    return await client.fetch<T>(query);
  } catch (error) {
    console.error('[sanity] query failed', error);
    return fallback;
  }
}
