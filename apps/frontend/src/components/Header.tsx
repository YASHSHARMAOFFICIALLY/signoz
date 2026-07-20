"use client";

import { useEffect, useState } from "react";

const NAV = ["About", "Features", "Pricing", "Contact"];
const PAGES = ["Blog", "Case Studies", "Careers", "404"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ponytail: plain scroll listener, throttle only if it janks
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border border-border bg-surface/90 shadow-[0_20px_50px_-20px_rgba(17,17,20,0.25)] backdrop-blur"
            : "border border-transparent"
        }`}
      >
        <a
          href="#"
          className="font-display text-2xl font-semibold tracking-tight text-heading"
        >
          Lumen
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[0.95rem] text-muted transition-colors hover:text-heading"
            >
              {l}
            </a>
          ))}

          <div className="group relative">
            <button className="flex items-center gap-1 text-[0.95rem] text-muted transition-colors hover:text-heading">
              Pages
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform group-hover:rotate-180"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* pt-3 keeps the panel reachable across the hover gap */}
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="flex w-44 flex-col rounded-2xl border border-border bg-surface p-2 shadow-[0_20px_50px_-20px_rgba(17,17,20,0.25)]">
                {PAGES.map((p) => (
                  <a
                    key={p}
                    href="#"
                    className="rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-body hover:text-heading"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-primary-hover md:inline-block"
          >
            Get Started
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-heading md:hidden"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-surface p-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-1">
            {[...NAV, ...PAGES].map((l) => (
              <a
                key={l}
                href="#"
                className="rounded-xl px-3 py-2 text-muted transition-colors hover:bg-body hover:text-heading"
              >
                {l}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center font-semibold text-white"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
