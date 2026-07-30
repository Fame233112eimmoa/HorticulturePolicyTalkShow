import Link from "next/link";

import { SiteLogo } from "@/components/site-logo";
import {
  contactDetails,
  navItems,
  socialLinks,
} from "@/lib/proposal-data";
import { siteTagline } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-graphite lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <div className="inline-flex rounded-[1.5rem] border border-line bg-white px-4 py-3">
              <SiteLogo variant="footer" />
            </div>
            <p className="mt-4 text-graphite">{siteTagline}</p>
            <p className="mt-4 max-w-xl leading-7">
              Production proposal options covering talk-show and cooking-show
              formats, with clear scope, crew, post-production, and delivery
              support.
            </p>
          </div>

          <div>
            <p className="font-display text-xl text-ink">Navigation</p>
            <div className="mt-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-xl text-ink">Contact</p>
            <div className="mt-4 space-y-3">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block transition-colors hover:text-ink"
                >
                  {item.value}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-xl text-ink">Social</p>
            <div className="mt-4 space-y-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors hover:text-ink"
                >
                  {item.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <p>© {year} Lifestyle Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
