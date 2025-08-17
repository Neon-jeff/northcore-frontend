import z  from "zod";

// Define the interface for signup form data
interface SignupFormData {
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

// Define the schema with proper types
const SignupSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long"),
    terms: z.boolean().optional().refine(val => val, {
        message: "You must accept the terms and conditions",
    }),
    phone_number: z.string().optional(),
    first_name: z.string().min(1, "First name is required").max(50, "First name must not exceed 50 characters").optional(),
    last_name: z.string().min(1, "Last name is required").max(50, "Last name must not exceed 50 characters").optional(),

});

// Type for the parsed output
type SignupFormValues = z.infer<typeof SignupSchema>;

// Export the schema and types
export { SignupSchema, type SignupFormData, type SignupFormValues };