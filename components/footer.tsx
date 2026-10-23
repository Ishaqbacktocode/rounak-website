import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { categoryList, contact } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-xl font-semibold">
            Rounak<span className="text-[var(--brand)]">.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Cloud, AI and IT services for Dubai businesses for over 20 years.
          </p>
          <address className="mt-6 space-y-1 text-sm not-italic text-muted-foreground">
            <p>{contact.address}</p>
            <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p>{contact.mobile} · {contact.landline}</p>
          </address>
        </div>

        {categoryList.slice(0, 3).map((c) => (
          <div key={c.slug}>
            <Link href={`/${c.slug}`} className="text-sm font-semibold">{c.title}</Link>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Rounak Computers LLC</p>
        <div className="flex gap-5">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/tos">Terms</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
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