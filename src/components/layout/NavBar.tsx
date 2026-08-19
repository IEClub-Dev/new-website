"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [isHidden, setIsHidden] = useState(false);
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

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transform transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative flex h-20 items-center justify-between border-b border-[var(--theme-border)] bg-[var(--theme-card)]/90 px-5 backdrop-blur-sm shadow-sm">
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

        <div className="h-11 w-11" aria-hidden="true" />
      </div>
    </nav>
  );
}
