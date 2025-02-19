import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'z68c4dv3',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});
