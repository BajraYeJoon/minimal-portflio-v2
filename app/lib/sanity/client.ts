import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'z68c4dv3',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  apiVersion: process.env.VITE_SANITY_API_VERSION || '2025-02-01',
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
