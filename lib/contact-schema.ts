import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  company: z.string().trim().optional(),
  email: z.email("Enter a valid email"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number"),
  service: z.string().min(1, "Choose a service"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)").max(2000),
  website: z.string().max(0).optional(), // honeypot, bots fill this
});

export type EnquiryValues = z.infer<typeof enquirySchema>;