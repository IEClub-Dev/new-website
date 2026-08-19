import Image from "next/image";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-foreground)] text-[var(--theme-text-main)] transition-opacity hover:opacity-80"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-[var(--theme-border)] bg-[var(--theme-card)] px-6 py-5 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3 opacity-75">
            <Image
              src="/ie-Logo-Dark.png"
              alt="IE Club logo"
              width={42}
              height={42}
              className="object-contain"
              priority
            />
            <div className="leading-none">
              <div className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[var(--theme-text-main)] opacity-60">
                KFUPM
              </div>
              <div className="mt-1 text-base font-black uppercase tracking-[0.2em] text-[var(--theme-text-main)]">
                IE Club
              </div>
            </div>
          </div>

          {/* <nav
            aria-label="Footer links"
            className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--theme-text-main)] opacity-70"
          >
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-opacity hover:opacity-70">
                {link.label}
              </a>
            ))}
          </nav> */}

          <div className="flex items-center gap-3 text-[var(--theme-text-main)] opacity-75">
            <SocialIcon href="https://instagram.com" label="Instagram">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 6.25Z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://x.com" label="X">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M18.9 2h3.7l-8.1 9.3L23 22h-7.3l-5.7-8.2L3.7 22H0l8.7-10L1 2h7.5l5.2 7.4L18.9 2Zm-1.3 18h2L7.1 4H4.9l12.7 16Z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://linkedin.com" label="LinkedIn">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.4a1.56 1.56 0 0 1 .04 3.1ZM5.5 10.2h2.8v9.3H5.5v-9.3Zm4.8 0h2.7v1.3h.1c.4-.7 1.3-1.6 2.9-1.6 3 0 3.6 2 3.6 4.6v5.9h-2.8v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6H10.3v-9.3Z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="mailto:ieclub@kfupm.edu.sa" label="Email">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.1-.25 6.9 5.55 6.9-5.55H5.1Zm13.15 2.1-6.37 5.12a1 1 0 0 1-1.26 0L5.75 8.6v8.65c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V8.6Z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-[var(--theme-border)] pt-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-[var(--theme-text-main)] opacity-60 sm:flex-row">
          <span>© 2026 IE Club</span>
          <span>Built for KFUPM</span>
        </div>
      </div>
    </footer>
  );
}
