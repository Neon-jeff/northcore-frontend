'use client'
import { Button } from "@/components/ui";
import { useGSAP } from "@gsap/react";
import { IconX } from "@tabler/icons-react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

const SignalsPage = () => {
  return (
    <div className="lg:w-11/12 w-full py-10 p-2 space-y-5 lg:min-h-5/6 max-md:min-h-screen rounded-2xl bg-white lg:p-10 ">
      <div className="space-y-2 text-center lg:w-1/3 mx-auto">
        <h1 className="text-2xl font-bold text-black">Your Signals</h1>
        <p className="text-sm text-gray-600">
          Subscribe to Premium signals for advanced trading customers
        </p>
      </div>
        <NotQualified/>
    </div>
  );
};

function NotQualified() {
  useGSAP(() => {
    gsap.from(".icon", { y: -20, opacity: 0, duration: 0.5, scale: 0.5 });
  }, []);

  return (
    <div className="flex flex-col  text-gray-600 max-md:w-3/4 max-sm:w-full border p-4 lg:p-10 lg:py-16 w-1/3 mx-auto lg:mt-10 rounded-xl border-gray-50 bg-gray-50/50 text-sm  items-center text-center gap-2">
      <div className="bg-red-50 icon p-4 w-fit rounded-full lg:mb-10">
        <div className="bg-red-600 p-4 w-fit animate-none rounded-full">
          <IconX className="text-white text-4xl" />
        </div>
      </div>
      <h2 className="lg:text-2xl text-xl lg:pb-2  text-black font-bold">
        Feature not available
      </h2>
      <p>
        This feature is not available for your account type. Please contact support to upgrade to a premium account to access advanced trading signals.
      </p>
      <div className="flex items-center justify-center mt-10 gap-2 w-full">
        <Link href="/user/dashboard">
          <Button variant={'secondary'} className="">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}

export default SignalsPage;
