import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/back-to-top";
import {
  categoryList,
  companyLinks,
  contact,
  groupServices,
  legalLinks,
  socials,
} from "@/lib/site";
import { Logo } from "@/components/logo";

const linkClass = "transition-colors hover:text-foreground";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 pb-8 pt-20">
      {/* CTA band */}
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--brand)]/20 to-transparent p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to simplify your IT?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Talk to a certified engineer. We usually reply within one working day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              render={<Link href="/contact-us" />}
              nativeButton={false}
              size="lg"
              className="rounded-full"
            >
              Get in touch <ArrowRight />
            </Button>
            <Button
              render={<a href={contact.whatsapp} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Brand, company, contact */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" aria-label="Rounak Computers home">
              <Logo src="/logo-footer.png" className="h-10" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Cloud, AI and IT services for Dubai businesses for over 20 years.
            </p>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-5 text-sm text-muted-foreground">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className={linkClass}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <address className="space-y-4 text-sm not-italic text-muted-foreground lg:col-span-4">
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <a href={`tel:${contact.mobile.replace(/\s/g, "")}`} className={`flex gap-3 ${linkClass}`}>
              <Phone className="mt-0.5 size-4 shrink-0 text-[var(--brand)]" />
              <span>
                {contact.mobile}
                <br />
                {contact.landline}
              </span>
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className={`flex gap-3 ${linkClass}`}>
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-[var(--brand)]" />
              WhatsApp us
            </a>
            <a href={`mailto:${contact.email}`} className={`flex gap-3 ${linkClass}`}>
              <Mail className="mt-0.5 size-4 shrink-0 text-[var(--brand)]" />
              {contact.email}
            </a>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--brand)]" />
              {contact.address}
            </p>
          </address>
        </div>

        {/* Service columns, generated from lib/site.ts */}
        <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {categoryList.map((c) => (
            <nav key={c.slug} aria-label={c.title}>
              <Link href={`/${c.slug}`} className="text-sm font-semibold hover:text-[var(--brand)]">
                {c.title}
              </Link>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {groupServices(c.slug).flatMap((g) =>
                  g.items.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.category}/${s.slug}`} className={linkClass}>
                        {s.title}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rounak Computers LLC. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-5">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <BackToTop />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle />
    </a>
  );
}