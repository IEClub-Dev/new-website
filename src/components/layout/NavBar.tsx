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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
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
      <div className="relative border-b border-[var(--theme-border)] bg-[var(--theme-card)]/90 px-4 shadow-sm backdrop-blur-sm sm:px-5">
        <div className="relative flex h-20 items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-4">
            <Image
              src="/ie-Logo-Dark.png"
              alt="IE Club logo"
              width={48}
              height={48}
              priority
              className="h-12 w-12 object-contain sm:h-[54px] sm:w-[54px]"
            />
            <div className="min-w-0 leading-none">
              <div className="truncate text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--theme-text-main)] opacity-60 sm:text-[10px] sm:tracking-[0.35em]">
                KFUPM
              </div>
              <div className="mt-1 truncate text-sm font-black uppercase tracking-[0.12em] text-[var(--theme-text-main)] sm:text-lg sm:tracking-[0.2em]">
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
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-foreground)]/80 text-[var(--theme-text-main)] transition-all hover:scale-105 md:hidden"
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

        <div
          className={`absolute left-0 right-0 top-full border-b border-[var(--theme-border)] bg-[var(--theme-card)]/95 px-3 py-3 shadow-lg backdrop-blur-md transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="flex flex-col gap-2 text-sm font-medium uppercase tracking-[0.16em] text-[var(--theme-text-main)]"
          >
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 transition-all duration-300 hover:bg-[var(--color-ie-red)]/10 hover:text-[var(--color-ie-red)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close mobile menu"
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-[-1] bg-black/30 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </nav>
  );
}
