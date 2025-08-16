"use client";
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
import { Button } from "@/components/ui";
import Link from "next/link";
import { LoginFormValues, LoginSchema } from "@/utils/validators/login";
import { useLogin } from "@/hooks/authentication";
import { useUserStore } from "@/store/user";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  const router = useRouter();
  const loginUser = useLogin();
  const { login } = useUserStore();
  function onSubmit(data: LoginFormValues) {
    loginUser.mutate(data, {
      onSuccess: (data) => {
        login(data.token, data.user);
        router.push("/user/dashboard");
      },
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
        <FormContainer
          title="Welcome back"
          description="Login to your account to continue"
        >
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
          <Link
            href="/auth/forgot-password"
            className="text-xs w-full block text-right text-primary"
          >
            Forgot your password?
          </Link>
          <Button className="w-full mt-5 block" type="submit">
            Log in
          </Button>
        </FormContainer>
        <div className="text-center mt-5">
          <p className="text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className=" font-bold text-primary">
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
