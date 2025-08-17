import {z} from "zod";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
});

type LoginFormValues = z.infer<typeof LoginSchema>;

export {LoginSchema, type LoginFormValues};