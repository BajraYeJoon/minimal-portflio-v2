export const ALL_WORKS_QUERY = `*[_type == "work"] | order(index asc) {
  _id,
  index,
  title,
  "image": image.asset->url + '?auto=format&fit=max&w=1200&fm=webp',
  services,
  link,
  size
}`;

export const EXPERIENCE_QUERY = `*[_type == "experience"] | order(order asc) {
  _id,
  order,
  company,
  role,
  summary
}`;

export const SERVICE_CATEGORIES_QUERY = `*[_type == "serviceCategory"] | order(order asc) {
  _id,
  title,
  services,
  order
}`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(number asc) {
  _id,
  number,
  quote,
  author {
    name,
    position,
    company,
    image
  }
}`;
