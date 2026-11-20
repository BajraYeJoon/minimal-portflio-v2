import type { SanityImageSource } from '@sanity/image-url';
import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from './client';

const { projectId, dataset } = client.config();
const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlFor(source: SanityImageSource | undefined | null) {
  if (!builder || !source) return null;
  return builder.image(source);
}
