export const FEATURED_WORKS_QUERY = `*[_type == "work"] | order(index asc) {
  _id,
  index,
  title,
  "image": image.asset->url + '?auto=format&fit=max&sharp=20&fm=webp',
  services,
  link,
  size
}`;
