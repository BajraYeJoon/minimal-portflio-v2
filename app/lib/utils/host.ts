/** Hostname for display, without the leading www. */
export function hostOf(link: string) {
  try {
    return new URL(link).host.replace(/^www\./, '');
  } catch {
    return link;
  }
}
