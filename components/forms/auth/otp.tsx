"use client";

import { Button } from "@/components/ui";
import FormContainer from "@/components/ui/form-container";
import { useRequestOTP, useVerifyOTP } from "@/hooks/authentication";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { toast } from "sonner";

const VerifyOTPForm = () => {
  const [otp, setOTP] = useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [timer, setTimer] = React.useState(59);
  const [showTimer, setShowTimer] = React.useState(true);
  const { data, rehydrated } = useUserStore((state) => state);
  const router = useRouter();
  const requestOTP = useRequestOTP();
  const verifyOTP = useVerifyOTP();
  useLayoutEffect(() => {
    if (!rehydrated) {
      return;
    }
    if (rehydrated && !data) {
      console.log("You must be logged in to verify your email");
      toast.error("You must be logged in to verify your email");
      router.push("/auth/login");
      return;
    }
    toast.success("OTP sent successfully");
    inputRef.current?.focus();
  }, [rehydrated]);

  useEffect(() => {
    if (timer === 0) {
      setShowTimer(false);
      return;
    }
    if (showTimer) {
      const timeout = setInterval(() => {
        if (timer === 0) {
          setShowTimer(false);
          return;
        }
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timeout);
    }
  }, [showTimer, timer]);

  function handleSubmit() {
    verifyOTP.mutate({
      email: data?.email || "",
      otp
    },
{
    onSuccess: () => {
        toast.success("OTP Verified Successfully");
        router.push("/user/dashboard");
    },
    onError: (error) => {
        console.error(error);
        toast.error(error?.message || "Invalid OTP");
    }
});

  }

  function handleResendOTP() {
    requestOTP.mutate(data?.email || "", {
      onSuccess: (data) => {
        toast.success(data?.message || "OTP sent successfully");
      },
      onError: (error) => {
        console.error(error);
        toast.error("An error occurred while sending OTP");
      },
    });
  }
  const checkIfNextToFill = (index: number): boolean => {
    const condition =
      index == [0, 1, 2, 3, 4].filter((item) => otp.charAt(item) == "")[0];
    return condition;
  };
  return (
    <FormContainer
      title="Verify your email"
      description={`Please enter the OTP sent to ${data?.email}`}
      className="lg:w-1/4 w-11/12"
    >
      <input
        type="number"
        className="opacity-0 inline absolute"
        ref={inputRef}
        onChange={(e) => {
          if (e.target.value.length == 7) return;
          setOTP(e.target.value);
        }}
      />
      <div className="space-x-4 w-full flex justify-between">
        {
          // OTP input field
          [...Array(5).keys()].map((_, i) => (
            <div
              key={i}
              className={cn(
                "lg:w-14 w-full h-14 inline-flex rounded-sm border-black border relative   items-center justify-center",
                otp.charAt(i) ? "border-zinc-800" : "border-zinc-300"
              )}
              onClick={() => {
                inputRef.current?.focus();
              }}
            >
              {/* typing ticker */}
              {checkIfNextToFill(i) ? (
                <div className="lg:h-6 h-3 w-[1px]   bg-black rounded-full absolute animate-pulse" />
              ) : (
                <span className="text-black absolute text-sm font-semibold">
                  {otp.charAt(i)}
                </span>
              )}
            </div>
          ))
        }
      </div>

      <div className="space-y-3 lg:space-y-5  w-full">
        <Button
          type="submit"
          variant="default"
          className="w-full my-10"
          disabled={otp.length < 5 || verifyOTP.isPending}
          onClick={handleSubmit}
        >
         {!verifyOTP.isPending ? "Verify Email" : <Loader2Icon className="text-white animate-spin" />}
        </Button>
        <div>
          <p className=" text-sm pb-2  lg:text-body-base text-center">
            {" "}
            Haven&apos;t gotten your code? Try again after
          </p>
          <div className="flex flex-col text-black gap-2 font-bold items-center">
            <p>
              00m : {timer < 10 && 0}
              {timer}s
            </p>
            <button
              className="text-primary cursor-pointer text-xs px-5  p-2 bg-primary/5 rounded-sm font-bold disabled:opacity-60"
              onClick={handleResendOTP}
              disabled={showTimer}
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default VerifyOTPForm;
