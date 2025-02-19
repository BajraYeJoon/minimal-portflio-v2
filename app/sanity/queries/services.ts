export const SERVICES_QUERY = `*[_type == "service"] | order(number asc) {
  _id,
  title,
  description,
  icon
}`;
