import { z } from "zod";

export const formInputSchema = z.object({
  output_id: z
    .string()
    .min(1)
    .regex(
      /^[a-zA-Z_][a-zA-Z0-9_-]+$/,
      "The <output_id> must start with a letter or _ and contain only alphanumeric characters, -, or _"
    ),
  name: z.string().min(1),
  placeholder: z.string().nullable(),
  note: z.string().nullable(),
  type: z.literal("input"),
});
export type FormInput = z.infer<typeof formInputSchema>;
