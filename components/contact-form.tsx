"use client";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitEnquiry, type FormState } from "@/app/contact-us/actions";
import { allServices } from "@/lib/site";

const initial: FormState = { ok: false, message: "" };

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      {children}
      {error?.[0] && <p className="text-xs text-red-400">{error[0]}</p>}
    </div>
  );
}

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  useEffect(() => {
    if (!state.message) return;
    state.ok ? toast.success(state.message) : toast.error(state.message);
  }, [state]);

  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <form action={action} className="space-y-5">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="name" error={e.name}>
          <Input id="name" name="name" defaultValue={v.name} autoComplete="name" />
        </Field>
        <Field label="Company" name="company" error={e.company}>
          <Input id="company" name="company" defaultValue={v.company} autoComplete="organization" />
        </Field>
        <Field label="Email" name="email" error={e.email}>
          <Input id="email" name="email" type="email" defaultValue={v.email} autoComplete="email" />
        </Field>
        <Field label="Phone / WhatsApp" name="phone" error={e.phone}>
          <Input id="phone" name="phone" type="tel" defaultValue={v.phone} autoComplete="tel" />
        </Field>
      </div>

      <Field label="Service you're interested in" name="service" error={e.service}>
        <select
          id="service"
          name="service"
          defaultValue={v.service ?? defaultService}
          className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <option value="" className="bg-background">Select a service…</option>
          {allServices.map((s) => (
            <option key={s.slug} value={s.title} className="bg-background">
              {s.title}
            </option>
          ))}
          <option value="Something else" className="bg-background">Something else</option>
        </select>
      </Field>

      <Field label="How can we help?" name="message" error={e.message}>
        <Textarea id="message" name="message" rows={6} defaultValue={v.message} />
      </Field>

      <Button type="submit" size="lg" className="rounded-full" disabled={pending}>
        {pending ? <Loader2 className="animate-spin" /> : <Send />}
        {pending ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
}