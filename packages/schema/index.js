import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().trim().min(1),
  age: z.number().min(18),
  email: z.email(),
  password: z.string().trim().min(1),
  address: z.string().trim().min(1),
  aadharNumber: z.string().length(12),
});