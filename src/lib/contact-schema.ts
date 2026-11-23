import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(80, "Name is too long."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email("Please enter a valid email address."))
    .pipe(z.string().max(200, "Email is too long.")),
  subject: z
    .string()
    .trim()
    .min(3, "Please add a subject (at least 3 characters).")
    .max(120, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters.")
    .max(4000, "Message must be under 4000 characters."),
  website: z.string().max(0).optional(),
  startedAt: z.number().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
