export const FEATURED_WORKS_QUERY = `*[_type == "work"] | order(_createdAt desc) {
  _id,
  title,
  "image": image.asset->url,
  services,
  link,
  size
}`;
