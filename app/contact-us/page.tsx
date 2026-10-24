import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/lib/site";
import { getSourceSeo } from "@/lib/source-seo";

const seo = getSourceSeo("/contact-us");
export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: { canonical: "/contact-us" },
};

const details = [
  { icon: Phone, label: "Call", value: `${contact.mobile} · ${contact.landline}`, href: `tel:${contact.mobile.replace(/\s/g, "")}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us now", href: contact.whatsapp },
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: "Visit", value: contact.address },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-44">
      <div className="aurora" />
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-sm text-[var(--brand)]">Home / Contact Us</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight">Contact Us</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            <span className="block text-2xl font-semibold text-foreground">
              Let Us Elevate Your Business
            </span>
            Ready to start a conversation?
          </p>
          <ul className="mt-10 space-y-6">
            {details.map((d) => (
              <li key={d.label} className="flex gap-4">
                <d.icon className="mt-1 size-5 text-[var(--brand)]" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="hover:text-[var(--brand)]">{d.value}</a>
                  ) : (
                    <p>{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}