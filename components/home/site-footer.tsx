import Link from "next/link";
import { Mail, Phone, MapPin, Star} from "lucide-react";
import Image from "next/image"

const quickLinks = [
  { label: "Solutions", href: "#services" },
  { label: "Cloud", href: "#cloud" },
  { label: "Security", href: "#security" },
  { label: "Why Rounak", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Microsoft 365 & Copilots",
  "Azure & Cloud Migration",
  "Managed IT & AMC",
  "Cybersecurity",
  "CCTV & Structured Cabling",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="#top" className="flex items-center">
                <Image
                  src="/brand/192.png"
                  alt="Rounak Computers"
                  width={192}
                  height={192}
                  className="h-10 w-auto object-contain sm:h-31"
                  priority
                />
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
              A leading cloud solutions provider in the UAE, helping businesses
              transform through cloud integration, infrastructure management and
              IT security.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
              Products &amp; Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li
                  key={link}
                  className="text-sm text-muted-foreground"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:info@rounakcomputers.com"
                  className="flex items-start gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  info@rounakcomputers.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+971554752832"
                  className="flex items-start gap-3 transition-colors hover:text-foreground"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  +971 55 475 2832
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                602, 6th Floor, Al Rifaa Plaza, Khalid Bin Al Waleed Road, Dubai, UAE
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rounakcomputers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-foreground"
                >
                <Star className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Follow us on Instagram
                </a>
                social media links can be added here in the future if needed
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Rounak Computers LLC. All rights
            reserved.
          </p>
          <p>Cloud Solutions &middot; AI &middot; Digital Transformation</p>
        </div>
      </div>
    </footer>
  );
}
