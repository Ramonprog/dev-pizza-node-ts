import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string().min(3),
});

export type User = z.infer<typeof CategorySchema>;
