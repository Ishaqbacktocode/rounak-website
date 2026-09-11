import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Rounak Computers provided invaluable assistance during our migration from GoDaddy to Office 365. We received excellent support throughout.",
    author: "Aakarsh P B",
    role: "Office 365 Migration",
  },
  {
    quote:
      "Sound in Cloud Solutions, AI and DevOps. They monitor my services and alert me on security issues. Perfect for my cloud needs.",
    author: "Arun Raj",
    role: "Long-term Client",
  },
  {
    quote:
      "It's been 5 years dealing with them. The entire Rounak team guides and suggests the right product. Product knowledge and support at its best.",
    author: "Ashino Thomas",
    role: "5-Year Partner",
  },
  {
    quote:
      "One of the best IT service companies in the UAE. Excellent support for cloud solutions and Microsoft 365. Highly recommended.",
    author: "Mohamed Haris",
    role: "System Analyst, FXGate Ltd",
  },
  {
    quote:
      "A highly competent and professional group of consultants. Definitely a great company to work with!",
    author: "Wail",
    role: "Business Client",
  },
  {
    quote:
      "Quick and prompt service. They helped us even after closing hours when we needed an HP charger urgently.",
    author: "Rikdha Jalakam",
    role: "Retail Customer",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Real people, real results
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            What our clients say about Rounak.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex flex-col rounded-2xl border border-border bg-background p-7"
            >
              <Quote className="h-7 w-7 text-primary/40" />
              <blockquote className="mt-4 flex-1 leading-7 text-foreground/90">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="font-heading font-semibold">
                  {testimonial.author}
                </div>
                <div className="mt-0.5 text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
