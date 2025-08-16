import {z} from "zod";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password must not exceed 64 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character"),
});

type LoginFormValues = z.infer<typeof LoginSchema>;

export {LoginSchema, type LoginFormValues};