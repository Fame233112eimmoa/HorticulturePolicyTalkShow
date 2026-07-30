"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { SiteLogo } from "@/components/site-logo";
import { navItems } from "@/lib/proposal-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-line/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="Lifestyle Studios home" className="shrink-0">
            <SiteLogo priority />
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-graphite lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/budget"
              className="hidden rounded-full border border-ink px-5 py-2.5 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white lg:inline-flex"
            >
              View Budget
            </Link>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-menu"
            className="mt-4 rounded-[1.75rem] border border-line bg-white p-4 shadow-panel lg:hidden"
          >
            <nav className="grid gap-2 text-sm text-graphite">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-line bg-surface px-4 py-3 transition-colors duration-300 hover:border-ink hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/budget"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-ink px-5 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
            >
              View Budget
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
