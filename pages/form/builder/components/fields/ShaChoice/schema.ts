import { z } from "zod";

export const formShaChoiceSchema = z.object({
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
  choices: z
    .array(
      z.object({
        timestamp: z.number().min(0),
        sha: z.string().min(1),
        title: z.string().min(1),
      })
    )
    .min(1),
  head: z.string().min(1),
});

export type FormInput = z.infer<typeof formShaChoiceSchema>;
