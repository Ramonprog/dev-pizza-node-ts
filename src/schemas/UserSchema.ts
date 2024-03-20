import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export type User = z.infer<typeof UserSchema>;

export const AuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type Auth = z.infer<typeof AuthSchema>;
