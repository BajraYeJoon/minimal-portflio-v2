import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Magnetic } from '~/components/ui/Magnetic';
import { Text } from '~/components/ui/Text';
import { navigation } from '~/content/navigation';
import { site } from '~/content/site';
import { socialLinks } from '~/content/social';

export function Footer() {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kathmandu',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const update = () => setTime(formatter.format(new Date()));
    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  const emailHref = site.email
    ? `mailto:${site.email}`
    : (socialLinks[1]?.href ?? socialLinks[0]?.href ?? '#');

  return (
    <footer className="border-hairline border-t">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Text variant="micro" className="text-ember">
            Kathmandu
          </Text>
          <p className="text-small text-stone max-w-[22ch]">
            {site.role} — {site.focus}. Based in {site.location}.
          </p>
          <Magnetic strength={5} className="w-fit">
            <a
              href={emailHref}
              data-cursor="email"
              className="link-draw text-small w-fit text-paper"
            >
              {site.email || 'Message on LinkedIn'}
            </a>
          </Magnetic>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          <Text variant="micro" className="mb-2">
            Index
          </Text>
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-small text-stone w-fit transition-colors hover:text-paper"
            >
              <span className="text-roll">
                <span>{item.name}</span>
                <span aria-hidden="true">{item.name}</span>
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <Text variant="micro" className="mb-2">
            Elsewhere
          </Text>
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-small text-stone w-fit transition-colors hover:text-paper"
            >
              {item.name}
            </a>
          ))}
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-small text-stone w-fit transition-colors hover:text-paper"
            >
              Résumé
            </a>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Text variant="micro" className="mb-2">
            Local time
          </Text>
          <span className="font-mono text-small text-paper tabular-nums">
            {time} <span className="text-stone">NPT</span>
          </span>
          <span className="text-small text-stone">{site.timeZone}</span>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="shell">
          <span
            className="display-fade block text-[clamp(3rem,14vw,12rem)] leading-[0.92] whitespace-nowrap"
            aria-hidden="true"
          >
            Binaya B.
          </span>
        </div>
      </div>

      <div className="border-hairline border-t">
        <div className="shell text-micro text-stone flex flex-col gap-2 py-6 font-mono uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>React Router · Sanity · GSAP</span>
        </div>
      </div>
    </footer>
  );
}
