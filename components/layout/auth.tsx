"use client";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

interface AuthLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const AuthLayout = ({ children, className }: AuthLayoutProps) => {
    const { t } = useTranslation();
  const { token, rehydrated, data } = useUserStore();
  const router = useRouter();
  useLayoutEffect(() => {
    if (token && rehydrated && data?.kyc_verified) {
      router.push("/user/dashboard");
    }
    if (data && rehydrated && !data?.email_verified) {
      router.push("/auth/verify-otp");
    }
  }, [token, rehydrated, data, router]);
  return (
    <div
      className={cn(
        "flex items-center min-h-screen justify-between",
        className
      )}
    >
      <div className="lg:w-7/12 w-full px-2 ">{children}</div>
      <div className="h-screen relative  bg-black w-5/12 hidden lg:block">
        <Image
          src={"/images/auth.jpg"}
          alt={t('components.neuralTradesAuth')}
          height={500}
          width={500}
          className="h-full w-full object-cover object-left-top"
        />

        <div className="absolute bottom-0 top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-black/95 text-white p-16 pb-20 flex flex-col justify-end">
          <div className="space-y-5">
            <h2 className="text-6xl ">
              {t('components.breakMarketBoundariesInYour')}</h2>
            <p className="text-xs text-gray-200 mt-4 bg-white/20 border border-white/20 p-4 rounded-lg backdrop-blur-sm backdrop-filter">
              {t('components.tradingInvolvesRiskPastPerformance')}</p>
          </div>
        </div>
        <p className="absolute top-4 right-4 flex items-center gap-2 text-sm text-gray-100">
          {t('components.wantToKnowMoreAbout')}{" "}
          <Link
            href="/learn-more"
            className="border p-3 bg-white text-xs text-gray-600 rounded-sm"
          >
            {t('components.bookACallWithUs')}</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
