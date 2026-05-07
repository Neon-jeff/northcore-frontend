import z from "zod";

export const withdrawalSchema = z.object({
  amount: z
    .number()
    .min(50, { message: "Amount must be between USD50 and USD80,000" })
    .max(80_000, { message: "Amount must be between USD50 and USD80,000" }),
  currency: z.string().min(3).max(100),
  address: z.string().min(10).max(100),
});

export type WithdrawalSchemaType = z.infer<typeof withdrawalSchema>;
