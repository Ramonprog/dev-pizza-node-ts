import { z } from "zod";

export const CreateOrderSchema = z.object({
  table: z.number().min(1),
});

export type User = z.infer<typeof CreateOrderSchema>;
