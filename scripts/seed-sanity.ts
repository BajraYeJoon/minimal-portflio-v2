// biome-ignore-all lint/suspicious/noConsole: seed script reports progress to the terminal
import { createReadStream } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { createClient } from '@sanity/client';
import { defaultExperience } from '../app/content/experience';
import { productWorks } from '../app/content/products';

const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error(
    'Missing SANITY_API_TOKEN.\n' +
      'Create a write token at https://www.sanity.io/manage (project z68c4dv3 → API → Tokens),\n' +
      'add it to .env as SANITY_API_TOKEN=..., then run: bun run seed:sanity',
  );
  process.exit(1);
}

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID ?? 'z68c4dv3',
  dataset: process.env.VITE_SANITY_DATASET ?? 'production',
  apiVersion: process.env.VITE_SANITY_API_VERSION ?? '2025-02-01',
  token,
  useCdn: false,
});

const existing = await client.fetch<{ _id: string }[]>(
  `*[_type == "work"] | order(index asc) { _id }`,
);
const productIds = new Set(productWorks.map((work) => work._id));
const otherIds = existing
  .map((doc) => doc._id)
  .filter((id) => !productIds.has(id));

for (const [position, work] of productWorks.entries()) {
  const filePath = path.join(process.cwd(), 'public', work.image);
  const asset = await client.assets.upload(
    'image',
    createReadStream(filePath),
    { filename: path.basename(filePath) },
  );

  await client.createOrReplace({
    _id: work._id,
    _type: 'work',
    index: position + 1,
    title: work.title,
    image: {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
    },
    services: work.services,
    link: work.link,
    size: work.size ?? 'normal',
  });

  console.log(`✓ ${work.title}`);
}

// Existing CMS entries keep their relative order, after the new products.
for (const [offset, id] of otherIds.entries()) {
  await client
    .patch(id)
    .set({ index: productWorks.length + offset + 1 })
    .commit();
}

for (const entry of defaultExperience) {
  await client.createOrReplace({
    _id: entry._id,
    _type: 'experience',
    order: entry.order,
    company: entry.company,
    role: entry.role,
    summary: entry.summary,
  });
  console.log(`✓ ${entry.company}`);
}

console.log(
  `Done — ${productWorks.length} products and ${defaultExperience.length} roles seeded, ${otherIds.length} existing entries reindexed.`,
);
