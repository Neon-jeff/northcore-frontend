import z from "zod";

export const withdrawalSchema = z.object({
  amount: z.number().min(50),
  currency: z.string().min(3).max(100),
  address: z.string().min(10).max(100),
});

export type WithdrawalSchemaType = z.infer<typeof withdrawalSchema>;