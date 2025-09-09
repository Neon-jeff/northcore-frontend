/* eslint-disable @next/next/no-img-element */
"use client";
import { deposit_address } from "@/data/wallet";
import { cn } from "@/lib/utils";
import React from "react";
import { Form, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui";
import { IconArrowDown, IconCheck } from "@tabler/icons-react";
import { toast } from "sonner";
import { useCreateTransaction } from "@/hooks/transactions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import {
  withdrawalSchema,
  WithdrawalSchemaType,
} from "@/utils/validators/withdrawal";
import { useUserStore } from "@/store/user";

const WithdrawalForm = () => {
  const form = useForm<WithdrawalSchemaType>({
    defaultValues: {
      amount: 0,
      currency: "",
      address: "",
    },
    resolver: zodResolver(withdrawalSchema),
  });
  const [step, setStep] = React.useState<"one" | "two" | "three">("one");
  const makePayment = useCreateTransaction();
  const queryClient = useQueryClient();
    const { data } = useUserStore();
  const handleCreateWithdrawal = () => {
    const amount = form.watch("amount");
    const currency = form.watch("currency");
    if(!form.watch("address")){
        toast.error("Please enter a valid wallet address");
        return;
    }
    if(!form.watch("currency")){
        toast.error("Please select a currency");
        return;
    }
    if(!amount || amount <= 0){
        toast.error("Please enter a valid amount");
        return;
    }
    if(amount < (data?.balance || 0)){
        toast.error("Insufficient balance");
        return;
    }
    makePayment.mutate(
      {
        amount,
        currency,
        transaction_type: "debit",
        name: "withdrawal",
        withdrawal_address: form.watch("address"),
      },
      {
        onSuccess: () => {
          setStep("three");
          form.reset();
          makePayment.reset();
          queryClient.invalidateQueries({ queryKey: ["transactions"] });
        },
        onError: () => {
          toast.error("Failed to create deposit, try again or contact support");
        },
      }
    );
  };
  return (
    <div className="space-y-4">
      <Form {...form}>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateWithdrawal();
          }}
        >
          <div>
            {form.watch("currency") && step === "two" && (
              <div className="flex flex-col items-center gap-2 mt-5">
                <img
                  src={
                    deposit_address.find(
                      (item) => item.name === form.watch("currency")
                    )?.image
                  }
                  alt={form.watch("currency")}
                  className="lg:w-10 lg:h-10 w-10 h-10 object-contain mix-blend-multiply rounded-full"
                />
                <p className="text-base text-black font-bold">
                  {form.watch("currency")}
                </p>
              </div>
            )}
            {step === "one" && (
              <>
                <h1 className="pb-1 text-lg font-bold text-black mt-8">
                  {step === "one" && "Select Withdrawal Currency"}
                </h1>
                <p className="text-sm text-gray-400">
                  {step == "one" && "Please choose a withdrawal currency."}
                </p>
              </>
            )}
          </div>
          {step === "one" && (
            <FormField
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <div className="grid lg:grid-cols-3 grid-cols-2  gap-2">
                    {deposit_address.map((item, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex flex-col  gap-2 p-4 max-md:text-[.6rem] border border-gray-100 cursor-grab min-w-1/3 rounded-xl bg-gray-50/20",
                          field.value === item.name &&
                            "bg-green-50/60 border-green-200 border text-black"
                        )}
                        onClick={() => field.onChange(item.name)}
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="lg:w-10 lg:h-10 w-10 h-10 object-contain mix-blend-multiply rounded-full"
                          />
                          <h2 className="text-sm">{item.name}</h2>
                        </div>
                        <p className="text-gray-400 text-[.65rem] ">
                          50 USD - 100,000 USD{" "}
                          <br className="hidden lg:block" /> Withdrawal 5 -
                          10mins
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="mt-20"
                    disabled={!form.watch("currency")}
                    onClick={() => setStep("two")}
                  >
                    Continue
                  </Button>
                </FormItem>
              )}
            />
          )}

          {step === "two" && (
            <div className="flex flex-col items-center gap-2 border border-gray-100 p-5 rounded-xl">
              <FormField
                name="amount"
                render={({ field }) => (
                  <FormItem className=" space-y-2">
                    <div className="relative">
                      <Input
                        className="placeholder:text-black placeholder:font-bold"
                        placeholder="Wallet Balance"
                        disabled
                      />
                      <span className="absolute text-base right-3 top-1/2 font-bold disabled:opacity-100 -translate-y-1/2 cursor-pointer">
                        {data?.balance}.00 USD
                      </span>
                    </div>
                    <div className="p-2 mx-auto border border-primary rounded-full w-fit">
                      <IconArrowDown
                        className="text-primary mx-auto "
                        size={15}
                      />
                    </div>
                    <div className="relative">
                      <Input
                        onChange={field.onChange}
                        placeholder="Enter Amount to Withdraw"
                        inputMode="numeric"
                        type="number"
                      />
                      <img
                        src={
                          deposit_address.find(
                            (item) => item.name === form.watch("currency")
                          )?.image
                        }
                        alt={form.watch("currency")}
                        className="w-8 h-8 object-contain mix-blend-multiply rounded-full absolute right-5 top-1/2 -translate-y-1/2"
                      />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                name="address"
                render={({ field }) => (
                  <FormItem className="w-full mt-5">
                    <Input
                      {...field}
                      placeholder="Enter Wallet Address"
                      className=""
                    />
                  </FormItem>
                )}
              />

              {step === "two" && (
                <div className="w-full font-bold text-gray-600 text-xs">
                  <div>
                    <div className="mt-5  border p-5 rounded-xl border-dashed border-green-300 bg-green-50/60 w-full space-y-2 text-sm mx-auto max-md:text-xs">
                      <div className="flex justify-between">
                        <span>Amount</span>
                        <span className="font-bold  ">
                          {form.watch("amount")}.00USD
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Commission</span>
                        <span className="font-bold  ">
                          {form.watch("amount") * 0}.00USD
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processing Time</span>
                        <span className="font-bold  ">5 - 10 mins </span>
                      </div>
                      <div className="flex font-jakarta text-green-600 justify-between mt-5 font-semibold text-sm">
                        <span>Total Amount</span>
                        <span className="font-bold text-base ">
                          {(form.watch("amount") * 1).toFixed(2)} USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="mt-10 w-full"
                    type="submit"
                    disabled={makePayment.isPending}
                  >
                   Make Withdrawal
                  </Button>
                </div>
              )}
            </div>
          )}
          {step ==='three' && <PaymentCompleted />}
        </form>
      </Form>
    </div>
  );
};

function PaymentCompleted() {
  useGSAP(() => {
    gsap.from(".icon", { y: -20, opacity: 0, duration: 0.5, scale: 0.5 });
  }, []);
  const handleDepositAgain = () => {
    location.reload();
  };
  return (
    <div className="flex flex-col  text-gray-600 max-md:w-3/4 max-sm:w-full border p-4 lg:p-10 lg:py-16 w-4/5 mx-auto lg:mt-10 rounded-xl border-gray-50 bg-gray-50/50 text-sm  items-center text-center gap-2">
      <div className="bg-green-50 icon p-4 w-fit rounded-full lg:mb-10">
        <div className="bg-green-600 p-4 w-fit animate-none rounded-full">
          <IconCheck className="text-white text-4xl" />
        </div>
      </div>
      <h2 className="lg:text-2xl text-xl lg:pb-2  text-black font-bold">
        Withdrawal Request Completed
      </h2>
      <p>
        Your withdrawal request has been completed, you will receive withdrawal
        update status from our support team via email.
      </p>
      <div className="flex items-center justify-center mt-10 gap-2 w-full">
        <Link href="/user/dashboard">
          <Button variant={"secondary"} className="bg-gray-100 text-black">
            Go to Dashboard
          </Button>
        </Link>
        <Button className="" onClick={handleDepositAgain}>
          Withdrawal Again
        </Button>
      </div>
    </div>
  );
}

export default WithdrawalForm;
