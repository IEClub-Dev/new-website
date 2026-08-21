"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      setIsHidden(scrollingDown && currentScrollY > 60);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transform transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative border-b border-[var(--theme-border)] bg-[var(--theme-card)]/90 px-5 shadow-sm backdrop-blur-sm">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/ie-Logo-Dark.png"
              alt="IE Club logo"
              width={54}
              height={54}
              priority
              className="object-contain"
            />
            <div className="leading-none">
              <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--theme-text-main)] opacity-60">
                KFUPM
              </div>
              <div className="mt-1 text-lg font-black uppercase tracking-[0.2em] text-[var(--theme-text-main)]">
                IE Club
              </div>
            </div>
          </div>

          <nav
            aria-label="Main navigation"
            className="ml-auto hidden items-center gap-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--theme-text-main)] opacity-70 md:flex"
          >
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative inline-flex items-center rounded-full px-2 py-1.5 transition-all duration-300 ease-out hover:opacity-100"
              >
                <span className="absolute inset-0 rounded-full bg-[var(--color-ie-red)]/10 opacity-0 blur-sm transition-all duration-300 ease-out group-hover:opacity-100 group-hover:shadow-[0_0_16px_rgba(209,57,57,0.55)]" />
                <span className="relative z-10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.06] group-hover:text-[var(--color-ie-red)]">
                  {link.label}
                </span>
                <span className="absolute inset-x-1 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-[var(--color-ie-red)] shadow-[0_0_10px_rgba(209,57,57,0.9)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-foreground)]/80 text-[var(--theme-text-main)] transition-all hover:scale-105 md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-[var(--theme-border)] bg-[var(--theme-card)]/95 px-3 py-3 md:hidden">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-2 text-sm font-medium uppercase tracking-[0.18em] text-[var(--theme-text-main)]"
            >
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-3 py-2 transition-all duration-300 hover:bg-[var(--color-ie-red)]/10 hover:text-[var(--color-ie-red)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
