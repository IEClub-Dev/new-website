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

          

          <div className="flex items-center gap-3 text-[var(--theme-text-main)] opacity-75">
            <SocialIcon href="https://www.instagram.com/ieclub_kfupm" label="Instagram">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 6.25Z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://x.com/IEClub_KFUPM" label="X">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M18.9 2h3.7l-8.1 9.3L23 22h-7.3l-5.7-8.2L3.7 22H0l8.7-10L1 2h7.5l5.2 7.4L18.9 2Zm-1.3 18h2L7.1 4H4.9l12.7 16Z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://www.linkedin.com/company/ieclub-kfupm/" label="LinkedIn">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.4a1.56 1.56 0 0 1 .04 3.1ZM5.5 10.2h2.8v9.3H5.5v-9.3Zm4.8 0h2.7v1.3h.1c.4-.7 1.3-1.6 2.9-1.6 3 0 3.6 2 3.6 4.6v5.9h-2.8v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6H10.3v-9.3Z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://discord.com/invite/avx3bqFw8C" label="Discord">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M20.3 4.44A18.25 18.25 0 0 0 16.52 3l-.28.54a16.78 16.78 0 0 1 4.2 2.06c-1.35.7-2.62 1.54-3.8 2.54a14.1 14.1 0 0 0-8.66 0c-1.18-1-2.45-1.84-3.8-2.54a16.82 16.82 0 0 1 4.2-2.06l-.28-.54A18.25 18.25 0 0 0 3.7 4.44C1.92 8.08 1.5 11.6 1.76 15.1a18.52 18.52 0 0 0 5.57 2.82l.74-1.21c-.95-.42-1.84-.94-2.69-1.56.46-.33.91-.68 1.35-1.05a12.24 12.24 0 0 0 9.86 0c.44.37.89.72 1.35 1.05-.85.62-1.74 1.14-2.69 1.56l.74 1.21a18.52 18.52 0 0 0 5.57-2.82c.26-3.5-.16-7.02-2.34-10.66ZM9.5 13.5c-.9 0-1.63-.82-1.63-1.82s.72-1.82 1.63-1.82c.9 0 1.63.82 1.63 1.82s-.73 1.82-1.63 1.82Zm5 0c-.9 0-1.63-.82-1.63-1.82s.72-1.82 1.63-1.82c.9 0 1.63.82 1.63 1.82s-.73 1.82-1.63 1.82Z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://www.youtube.com/@ieclub_kfupm" label="YouTube">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M23 12c0-1.3-.1-2.5-.3-3.5-.4-1.7-1.7-3-3.4-3.3C16.8 4.8 12 4.8 12 4.8s-4.8 0-7.3.4c-1.7.3-3 1.6-3.4 3.3A34.1 34.1 0 0 0 1 12c0 1.3.1 2.5.3 3.5.4 1.7 1.7 3 3.4 3.3 2.5.4 7.3.4 7.3.4s4.8 0 7.3-.4c1.7-.3 3-1.6 3.4-3.3.2-1 .3-2.2.3-3.5ZM10 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://t.me/KFUPM_IEClub" label="Telegram">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M21.3 4.7 18.6 18.9c-.2.9-.8 1.1-1.6.7l-4.5-3.3-2.2 2.1c-.2.2-.5.4-.8.4l.3-4.6L17.8 6.7c.3-.3-.1-.5-.5-.2L7.8 12.5l-4.4-1.4c-.9-.3-.9-.9.2-1.4l15.8-6.1c.8-.3 1.5.2 1.2 1.1Z" />
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
