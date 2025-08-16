import z from "zod";

export const depositSchema = z.object({
  amount: z.number().min(50).max(10000),
  currency: z.string().min(3).max(100),
});

export type DepositSchemaType = z.infer<typeof depositSchema>;