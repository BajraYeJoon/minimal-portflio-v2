export const SERVICE_CATEGORIES_QUERY = `*[_type == "serviceCategory"] | order(order asc) {
  _id,
  title,
  services,
  order
}`;
