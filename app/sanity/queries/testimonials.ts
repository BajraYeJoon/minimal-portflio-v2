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
