"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const lastScrollY = useRef(0);
  const pathname = usePathname();

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
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close the mobile menu after navigating to another page.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transform transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative flex h-20 items-center justify-between gap-3 px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <a
          href="/"
          aria-label="Go to home page"
          className="flex min-w-0 items-center gap-2.5 sm:gap-4"
        >
          <Image
            src="/logo-light.png"
            alt="IE Club logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12 object-contain sm:h-[54px] sm:w-[54px] logo-light"
          />

          <Image
            src="/logo-dark.png"
            alt="IE Club logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12 object-contain sm:h-[54px] sm:w-[54px] logo-dark"
          />

          <div className="min-w-0 leading-none">
            <div className="truncate text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--color-text-main)] opacity-60 sm:text-[10px] sm:tracking-[0.35em]">
              KFUPM
            </div>

            <div className="mt-1 truncate text-sm font-black uppercase tracking-[0.12em] text-[var(--color-text-main)] sm:text-lg sm:tracking-[0.2em]">
              IE Club
            </div>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          onMouseLeave={() => setHoveredLink(null)}
          className="ml-auto hidden items-center gap-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-text-main)] md:flex"
        >
          {quickLinks.map((link) => {
            const isCurrentPage = isLinkActive(link.href);

            // Hide the current-page appearance while any link is hovered.
            const showActiveTheme = isCurrentPage && hoveredLink === null;

            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isCurrentPage ? "page" : undefined}
                onMouseEnter={() => setHoveredLink(link.href)}
                className="group relative inline-flex items-center rounded-full px-2 py-1.5 opacity-70 transition-all duration-300 ease-out hover:opacity-100"
              >
                {/* Glow */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 rounded-full bg-[var(--color-ie-red)]/10 blur-sm transition-all duration-300 ease-out group-hover:opacity-100 group-hover:shadow-[0_0_16px_rgba(179,50,50,0.55)] ${
                    showActiveTheme ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Link text */}
                <span
                  className={`relative z-10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.06] group-hover:text-[var(--color-ie-red-hover)] ${
                    showActiveTheme
                      ? "text-[var(--color-ie-red)]"
                      : "text-[var(--color-text-main)]"
                  }`}
                >
                  {link.label}
                </span>

                {/* Underline */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-1 -bottom-1 h-0.5 origin-left rounded-full bg-[var(--color-ie-red)] shadow-[0_0_10px_rgba(179,50,50,0.9)] transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    showActiveTheme ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-foreground)]/80 text-[var(--color-text-main)] transition-all hover:scale-105 md:hidden"
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

        {/* Mobile navigation */}
        <div
          className={`absolute left-4 right-4 top-full rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-card)]/95 px-2 py-2 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="flex flex-col gap-1.5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-text-main)]"
          >
            {quickLinks.map((link) => {
              const isCurrentPage = isLinkActive(link.href);
              const showActiveTheme = isCurrentPage && hoveredLink === null;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isCurrentPage ? "page" : undefined}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative inline-flex items-center justify-center rounded-full px-3 py-2.5 opacity-80 transition-all duration-300 ease-out hover:opacity-100"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-full bg-[var(--color-ie-red)]/10 blur-sm transition-all duration-300 ease-out group-hover:opacity-100 group-hover:shadow-[0_0_16px_rgba(179,50,50,0.55)] ${
                      showActiveTheme ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <span
                    className={`relative z-10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.04] group-hover:text-[var(--color-ie-red-hover)] ${
                      showActiveTheme
                        ? "text-[var(--color-ie-red)]"
                        : "text-[var(--color-text-main)]"
                    }`}
                  >
                    {link.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-1 -bottom-1 h-0.5 origin-left rounded-full bg-[var(--color-ie-red)] shadow-[0_0_10px_rgba(179,50,50,0.9)] transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                      showActiveTheme ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

