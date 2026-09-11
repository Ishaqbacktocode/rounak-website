"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "Solutions", href: "#services" },
  { label: "Cloud", href: "#cloud" },
  { label: "Security", href: "#security" },
  { label: "Why Rounak", href: "#about" },
  { label: "Clients", href: "#testimonials" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        <Link href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-primary font-heading text-lg font-bold text-primary-foreground">
            R
          </div>
          <div className="leading-none">
            <div className="font-heading text-lg font-bold tracking-tight">
              Rounak
            </div>
            <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Computers
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+97145586565"
            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground xl:flex"
          >
            <Phone className="h-4 w-4" />
            +971 4 386 5656
          </a>
          <ThemeToggle />
          <Link
            href="#contact"
            className="hidden bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 sm:inline-flex"
          >
            Talk to an Expert
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="border border-border p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Talk to an Expert
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
