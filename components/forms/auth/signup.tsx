"use client";
import { SignupFormValues, SignupSchema } from "@/utils/validators/signup";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormContainer from "@/components/ui/form-container";
import { PhoneInput } from "@/components/ui/phone-number-input";
import { Button } from "@/components/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { useRegister } from "@/hooks/authentication";
import { useUserStore } from "@/store/user";
import { toast } from "sonner";

const SignUpForm = () => {
  const form = useForm<SignupFormValues>({
    defaultValues: {
      email: "",
      password: "",
      terms: false,
      phone_number: "",
      first_name: "",
      last_name: "",
    },
    resolver: zodResolver(SignupSchema),
  });
  const router = useRouter();
  const {login} = useUserStore()
  const register = useRegister()
  function onSubmit(data: SignupFormValues) {
    const body = {
      email: data.email || "",
      password: data.password || "",
      first_name: data.first_name || "",
      last_name: data.last_name || "",
      phone_number: data.phone_number || "",
    }
    register.mutate(body, {
      onSuccess: (data) => {
        if (data?.token) {
          login(data.token,data.user)
          toast.success(data.details || "Account created successfully");
          router.push("/auth/verify-otp");
        } else {
          router.push("/auth/login");
        }
      },
      onError: (error) => {
        console.error(error);
        toast.error(error?.message || "An error occurred while creating your account");
      },
    });
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
        <FormContainer
          title="Create your free account"
          description="Join us to start your trading journey"
        >
          <div className="flex w-full max-lg:flex-col lg:justify-between gap-5 lg:gap-2 ">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    {...field}
                    className="w-full"
                    type="text"
                    placeholder="James"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    {...field}
                    className="w-full"
                    type="text"
                    placeholder="Mason"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full max-lg:flex-col lg:justify-between gap-5 lg:gap-2 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input
                    {...field}
                    className="w-full"
                    type="email"
                    placeholder="james.mason@mail.com"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <PhoneInput
                    {...field}
                    className="w-full"
                    placeholder="+12125551234"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <Input
                  {...field}
                  className="w-full"
                  type="password"
                  placeholder="********"
                  isSecured
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="">
               <div className="flex items-center gap-2">
                 <Checkbox
                  id="terms"
                  defaultChecked={field.value}
                  onCheckedChange={(check) => field.onChange(check)}
                />
                <label htmlFor="terms" className="text-sm text-zinc-600">
                  I agree to the{" "}
                  <Link
                    href="/terms-of-service"
                    className="text-primary font-bold"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary font-bold"
                  >
                    Privacy Policy
                  </Link>
                </label>
               </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full mt-5 block" type="submit" loading={register.isPending} disabled={register.isPending}>
            Create an account
          </Button>
        </FormContainer>
        <div className="text-center mt-5">
          <p className="text-sm text-zinc-500">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary font-bold">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
