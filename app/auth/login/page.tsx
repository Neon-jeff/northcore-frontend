"use client";
import LoginForm from "@/components/forms/auth/login";
import AuthLayout from "@/components/layout/auth";
import React from "react";

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
