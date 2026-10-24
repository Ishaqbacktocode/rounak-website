"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { categoryList, groupServices, type CategorySlug } from "@/lib/site";
import { Logo } from "@/components/logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<CategorySlug | null>(null);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = categoryList.find((c) => c.slug === open);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="fixed inset-x-0 top-4 z-40 flex justify-center px-4"
    >
      <div
        className={`relative w-full transition-all duration-300 ${
          scrolled ? "max-w-4xl" : "max-w-5xl"
        }`}
        onMouseLeave={() => setOpen(null)}
      >
        <nav
          className={`flex items-center justify-between gap-6 rounded-full border border-white/10 bg-background/70 px-5 backdrop-blur-xl transition-all duration-300 ${
            scrolled ? "h-12" : "h-14"
          }`}
        >
          <Link href="/" aria-label="Rounak Computers home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
            {categoryList.map((c) => (
              <li key={c.slug} onMouseEnter={() => setOpen(c.slug)}>
                <Link
                  href={`/${c.slug}`}
                  className={`flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors hover:text-foreground ${
                    open === c.slug ? "bg-white/10 text-foreground" : ""
                  }`}
                >
                  {c.navLabel}
                  <ChevronDown
                    className={`size-3.5 transition-transform ${open === c.slug ? "rotate-180" : ""}`}
                  />
                </Link>
              </li>
            ))}
            <li onMouseEnter={() => setOpen(null)}>
              <Link href="/about-us" className="rounded-full px-3 py-1.5 hover:text-foreground">
                About
              </Link>
            </li>
            <li onMouseEnter={() => setOpen(null)}>
              <Link href="/blog" className="rounded-full px-3 py-1.5 hover:text-foreground">
                Blog
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle light and dark theme"
              title="Toggle light and dark theme"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              <Moon className="block dark:hidden" aria-hidden="true" />
              <Sun className="hidden dark:block" aria-hidden="true" />
            </Button>
            <Button
              render={<Link href="/contact-us" />}
              nativeButton={false}
              size="sm"
              className="rounded-full"
            >
              Enquire now
            </Button>

            <Sheet>
              <SheetTrigger
                render={<Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" />}
              >
                <Menu />
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="mt-10 space-y-8 px-6">
                  {categoryList.map((c) => (
                    <div key={c.slug}>
                      <Link href={`/${c.slug}`} className="text-lg font-semibold">
                        {c.title}
                      </Link>
                      <ul className="mt-3 space-y-2 border-l border-white/10 pl-4 text-sm text-muted-foreground">
                        {groupServices(c.slug).flatMap((g) =>
                          g.items.map((s) => (
                            <li key={s.slug}>
                              <Link href={`/${s.category}/${s.slug}`}>{s.title}</Link>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  ))}
                  <div className="space-y-3 text-lg">
                    <Link href="/about-us" className="block">About</Link>
                    <Link href="/blog" className="block">Blog</Link>
                    <Link href="/contact-us" className="block">Contact</Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        <AnimatePresence>
          {active && (
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-x-0 top-full hidden pt-3 md:block"
            >
              <div className="grid grid-cols-[1fr_2fr] gap-8 rounded-3xl border border-white/10 bg-background/90 p-8 backdrop-blur-2xl">
                <div>
                  <h3 className="text-xl font-semibold">{active.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{active.tagline}</p>
                  <Link
                    href={`/${active.slug}`}
                    onClick={() => setOpen(null)}
                    className="mt-6 inline-flex items-center gap-1 text-sm text-[var(--brand)]"
                  >
                    View all <ArrowUpRight className="size-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  {groupServices(active.slug).map((g) => (
                    <div key={g.group}>
                      <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                        {g.group}
                      </p>
                      <ul className="space-y-2">
                        {g.items.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/${s.category}/${s.slug}`}
                              onClick={() => setOpen(null)}
                              className="text-sm transition-colors hover:text-[var(--brand)]"
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}