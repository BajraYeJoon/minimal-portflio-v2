import { productWorks } from '~/content/products';
import type { Work } from '~/types';

const normalize = (link: string) =>
  link.trim().replace(/\/+$/, '').toLowerCase();

/**
 * Product work leads the index; anything already published in Sanity at the same
 * URL wins, so the local copies disappear as soon as the seed has run.
 */
export function mergeWorks(cmsWorks: Work[]): Work[] {
  const published = new Set(cmsWorks.map((work) => normalize(work.link)));
  const local = productWorks.filter(
    (work) => !published.has(normalize(work.link)),
  );
  return [...local, ...cmsWorks];
}
