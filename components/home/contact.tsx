import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@rounakcomputers.com",
    href: "mailto:info@rounakcomputers.com",
  },
  {
    icon: Phone,
    label: "Sales",
    value: "+971 55 475 2832",
    href: "tel:+971554752832",
  },
  {
    icon: Phone,
    label: "Office",
    value: "+971 4 386 5656",
    href: "tel:+97143865656",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "602, Al Rifaa Plaza, Khalid Bin Al Waleed Road, Dubai, UAE",
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Let us elevate your business
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Ready to start a conversation?
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground text-pretty">
            Transform your business into a future-ready digital enterprise with
            our comprehensive cloud, security and managed IT solutions.
          </p>

          <div className="mt-10 space-y-3">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {detail.label}
                    </div>
                    <div className="mt-1 font-medium leading-6">
                      {detail.value}
                    </div>
                  </div>
                </div>
              );
              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="block transition-colors hover:[&>div]:border-primary/40"
                >
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}
          </div>
        </div>

        <form className="rounded-3xl border border-border bg-card p-7 lg:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First name" name="firstName" required placeholder="John" />
            <Field label="Last name" name="lastName" required placeholder="Doe" />
            <Field label="Job title" name="jobTitle" placeholder="IT Manager" />
            <Field label="Company" name="company" placeholder="Company name" />
            <Field
              label="Email address"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="sm:col-span-2"
            />
            <Field
              label="Phone number"
              name="phone"
              type="tel"
              required
              placeholder="+971 ..."
              className="sm:col-span-2"
            />
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your project or requirement..."
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:gap-3 hover:opacity-90"
          >
            Submit now
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            We&apos;ll get back to you within one business day.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
