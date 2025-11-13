"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#focus-areas", label: "Focus Areas" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[rgba(119,118,110,0.3)] bg-[rgba(248,244,238,0.95)] backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#top" className="flex items-baseline gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-cobalt)]">
            Alpha Mind
          </span>
          <span className="text-sm text-[var(--color-slate-soft)]">
            Strategies
          </span>
        </Link>

        <div className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--color-slate-soft)] transition hover:text-[var(--color-navy)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[rgba(119,118,110,0.4)] text-[var(--color-slate-soft)] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="text-lg">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[rgba(119,118,110,0.3)] bg-[rgba(248,244,238,0.97)] px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[var(--color-slate)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
