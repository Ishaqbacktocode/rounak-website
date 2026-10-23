"use client";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
    >
      Back to top <ArrowUp className="size-3.5" />
    </button>
  );
}