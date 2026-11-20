import { site } from '~/content/site';

/** CSS-only load curtain: lifts itself even when JavaScript never runs. */
export function IntroCurtain() {
  return (
    <div className="intro-curtain" aria-hidden="true">
      <div className="intro-curtain__mark flex flex-col items-center gap-3">
        <span className="font-mono text-micro text-stone uppercase">
          {site.role}
        </span>
        <span className="font-display text-heading text-paper uppercase">
          Binaya<span className="text-ember">.</span>
        </span>
      </div>
    </div>
  );
}
