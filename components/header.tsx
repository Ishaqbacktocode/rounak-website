"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight, Menu, Moon, Plus, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { categoryList, groupServices, type CategorySlug } from "@/lib/site";
import { Logo } from "@/components/logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<CategorySlug | null>(null);
  const [mobileOpen, setMobileOpen] = useState<CategorySlug | null>(null);
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
      className="site-header fixed inset-x-0 top-4 z-40 flex justify-center px-4"
    >
      <div
        className={`site-header-container relative w-full transition-all duration-300 ${

          scrolled ? "max-w-4xl" : "max-w-5xl"
        }`}
        onMouseLeave={() => setOpen(null)}
      >
        <nav
          className={`site-header-nav flex items-center justify-between gap-6 border border-foreground/10 bg-background/70 px-5 backdrop-blur-xl transition-all duration-300 ${

            scrolled ? "h-12" : "h-14"
          }`}
        >
          <Link href="/" aria-label="Rounak Computers home">
            <Logo darkSrc="/logo.png" className="h-8" />
          </Link>

          <ul className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
            {categoryList.map((c) => (
              <li key={c.slug} onMouseEnter={() => setOpen(c.slug)}>
                <Link
                  href={`/${c.slug}`}
                  className={`flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors hover:text-foreground ${
                    open === c.slug ? "bg-foreground/5 text-foreground" : ""
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
              <SheetContent className="w-[min(100%-1rem,28rem)] overflow-y-auto border-l border-foreground/10 bg-background/95 p-0 backdrop-blur-2xl">
                <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
                <div className="flex min-h-full flex-col">
                  <div className="border-b border-foreground/10 px-6 pb-6 pt-16">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                      Explore Rounak
                    </p>
                    <p className="mt-2 max-w-xs text-2xl font-semibold tracking-tight">
                      Technology that moves your business forward.
                    </p>
                  </div>

                  <nav className="flex-1 px-4 py-6" aria-label="Mobile navigation">
                    <div className="space-y-2">
                      {categoryList.map((c) => {
                        const expanded = mobileOpen === c.slug;
                        return (
                          <div key={c.slug} className="rounded-2xl border border-transparent transition-colors data-[expanded=true]:border-foreground/10 data-[expanded=true]:bg-foreground/[0.03]" data-expanded={expanded}>
                            <div className="flex items-center gap-2">
                              <Link
                                href={`/${c.slug}`}
                                className="flex min-h-14 flex-1 items-center gap-3 rounded-2xl px-4 text-lg font-semibold tracking-tight hover:text-[var(--brand)]"
                              >
                                <span className="size-1.5 rounded-full bg-[var(--brand)]" />
                                {c.title}
                              </Link>
                              <button
                                type="button"
                                aria-label={`${expanded ? "Collapse" : "Expand"} ${c.title}`}
                                aria-expanded={expanded}
                                onClick={() => setMobileOpen(expanded ? null : c.slug)}
                                className="mr-2 flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
                              >
                                <Plus className={`size-5 transition-transform duration-300 ${expanded ? "rotate-45" : ""}`} />
                              </button>
                            </div>
                            <AnimatePresence initial={false}>
                              {expanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 pb-4 pl-9">
                                    <Link
                                      href={`/${c.slug}`}
                                      className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)]"
                                    >
                                      View all {c.title}
                                      <ArrowUpRight className="size-3.5" />
                                    </Link>
                                    <ul className="space-y-2 border-l border-foreground/10 pl-4 text-sm text-muted-foreground">
                                      {groupServices(c.slug).flatMap((g) =>
                                        g.items.map((s) => (
                                          <li key={s.slug}>
                                            <Link
                                              href={`/${s.category}/${s.slug}`}
                                              className="flex items-center justify-between gap-3 py-1.5 hover:text-foreground"
                                            >
                                              {s.title}
                                              <ChevronRight className="size-3.5 opacity-50" />
                                            </Link>
                                          </li>
                                        ))
                                      )}
                                    </ul>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-2 border-t border-foreground/10 pt-6 text-center text-sm font-medium">
                      <Link href="/about-us" className="rounded-xl bg-foreground/5 px-3 py-3 hover:bg-foreground/10">About</Link>
                      <Link href="/blog" className="rounded-xl bg-foreground/5 px-3 py-3 hover:bg-foreground/10">Blog</Link>
                      <Link href="/contact-us" className="rounded-xl bg-foreground/5 px-3 py-3 hover:bg-foreground/10">Contact</Link>
                    </div>
                  </nav>

                  <div className="sticky bottom-0 border-t border-foreground/10 bg-background/90 p-4 backdrop-blur-xl">
                    <Link
                      href="/contact-us"
                      className="flex items-center justify-between rounded-2xl bg-foreground px-5 py-4 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                    >
                      Ready to improve your IT?
                      <ArrowRight className="size-4" />
                    </Link>
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
              <div className="site-mega-menu grid grid-cols-[1fr_2fr] gap-8 rounded-3xl border border-foreground/10 bg-background/90 p-8 backdrop-blur-2xl">
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
