"use server";
import { Resend } from "resend";
import { z } from "zod";
import { enquirySchema } from "@/lib/contact-schema";

export type FormState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string[] | undefined>;
  values?: Record<string, string>;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitEnquiry(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = Object.fromEntries(formData) as Record<string, string>;
  const parsed = enquirySchema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors: z.flattenError(parsed.error).fieldErrors,
      values: raw,
    };
  }

  const d = parsed.data;

  // Honeypot filled: pretend success, send nothing
  if (d.website) return { ok: true, message: "Thanks! We'll be in touch shortly." };

  const { error } = await resend.emails.send({
    from: "Rounak Website <onboarding@resend.dev>", // change after domain verification
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: d.email,
    subject: `New enquiry: ${d.service} (${d.name})`,
    text: [
      `Name: ${d.name}`,
      `Company: ${d.company || "-"}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      `Service: ${d.service}`,
      "",
      d.message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      ok: false,
      message: "Something went wrong. Please call or WhatsApp us instead.",
      values: raw,
    };
  }

  return { ok: true, message: "Thanks! We'll be in touch shortly." };
}