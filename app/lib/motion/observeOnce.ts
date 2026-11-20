/**
 * Runs a callback the first time an element enters the viewport.
 *
 * Entrance animations use this instead of `ScrollTrigger` with `once: true`:
 * those triggers kill themselves from inside ScrollTrigger's own refresh loop,
 * which mutates the trigger list mid-iteration and throws on long pages.
 */
export function observeOnce(
  element: Element,
  onEnter: () => void,
  rootMargin = '0px 0px -12% 0px',
) {
  if (typeof IntersectionObserver === 'undefined') {
    onEnter();
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      onEnter();
    },
    { rootMargin, threshold: 0.01 },
  );

  observer.observe(element);

  return () => observer.disconnect();
}
