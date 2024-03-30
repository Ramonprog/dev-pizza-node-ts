import { z } from "zod";

export const CreateProductSchema = z.object({
  name: z.string(),
  price: z.string(),
  description: z.string(),
  banner: z.string(),
  category_id: z.string(),
});

export type Item = z.infer<typeof CreateProductSchema>;
