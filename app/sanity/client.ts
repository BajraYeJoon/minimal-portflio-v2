import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'z68c4dv3',
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
});
