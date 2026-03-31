"use client";
/* eslint-disable @next/next/no-img-element */
import { deposit_address } from "@/data/wallet";
import { cn } from "@/lib/utils";
import React from "react";
import { Form, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { depositSchema, DepositSchemaType } from "@/utils/validators/deposit";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui";
import {
  IconAlertSquareRounded,
  IconArrowUp,
  IconCheck,
  IconCopy,
  IconCopyCheck,
  IconGiftFilled,
} from "@tabler/icons-react";
import { useCopyToClipboard } from "@/hooks/ui";
import { toast } from "sonner";
import { Loader } from "../icons";
import { useCreateTransaction, useGetTransactions } from "@/hooks/transactions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useUserStore } from "@/store/user";
import { useTranslation } from "react-i18next";

const DepositForm = () => {
  const { t } = useTranslation();
  const form = useForm<DepositSchemaType>({
    defaultValues: {
      amount: 0,
      currency: "",
    },
    resolver: zodResolver(depositSchema),
  });
  const [step, setStep] = React.useState<"one" | "two" | "three" | "four">(
    "one",
  );
  const copyToClipBoard = useCopyToClipboard();
  const makePayment = useCreateTransaction();
  const queryClient = useQueryClient();
  const { data: transactions } = useGetTransactions();
  const { data } = useUserStore();

  const handleCopyToClipBoard = () => {
    copyToClipBoard.mutate(
      deposit_address.find((item) => item.name === form.watch("currency"))
        ?.address || t("components.addressNotFound"),
      {
        onSuccess: () => {
          toast.success(t("components.addressCopiedToClipboard"));
        },
        onError: () => {
          toast.error(t("components.failedToCopyAddress"));
        },
        onSettled: () => {
          setTimeout(() => {
            copyToClipBoard.reset();
          }, 1000);
        },
      },
    );
  };
  const handleCreateDeposit = () => {
    const amount = form.watch("amount");
    const currency = form.watch("currency");
    if (amount < 50) {
      toast.error(t("components.minimumDepositIs50Usd"));
      return;
    }
    makePayment.mutate(
      {
        amount,
        currency,
        transaction_type: "credit",
        name: "deposit",
        withdrawal_address: "",
      },
      {
        onSuccess: () => {
          setStep("four");
          form.reset();
          makePayment.reset();
          queryClient.invalidateQueries({ queryKey: ["transactions"] });
        },
        onError: () => {
          toast.error(t("components.failedToCreateDepositTry"));
        },
      },
    );
  };
  return (
    <div className="space-y-4">
      <Form {...form}>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateDeposit();
          }}
        >
          <div>
            {form.watch("currency") && step === "two" && (
              <div className="flex flex-col items-center gap-2 mt-5">
                <img
                  src={
                    deposit_address.find(
                      (item) => item.name === form.watch("currency"),
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
                <h1 className="pb-1 text-lg text-black mt-8">
                  {step === "one" && t("components.selectDepositMethod")}
                </h1>
                <p className="text-sm text-gray-400">
                  {step == "one" && t("components.pleaseChooseADepositMethod")}
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
                            "bg-green-50/60 border-green-200 border text-black",
                        )}
                        onClick={() => {
                          field.onChange(item.name);
                          setStep("two");
                        }}
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
                          {t("components.50Usd100000Usd")}{" "}
                          <br className="hidden lg:block" />{" "}
                          {t("components.deposit")}{" "}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* <Button
                    className="mt-20"
                    disabled={!form.watch("currency")}
                    onClick={() => setStep("two")}
                  >
                    {t('components.continue')}</Button> */}
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
                        className=""
                        placeholder={t("components.walletBalance")}
                        disabled
                      />
                      <span className="absolute text-base right-3 top-1/2 font-bold disabled:opacity-100 -translate-y-1/2 cursor-pointer">
                        {data?.balance}
                        {t("components.00Usd")}
                      </span>
                    </div>
                    <div className="p-2 mx-auto border border-primary rounded-full w-fit">
                      <IconArrowUp
                        className="text-primary mx-auto "
                        size={15}
                      />
                    </div>
                    <div className="relative">
                      <Input
                        onChange={field.onChange}
                        placeholder={t("components.enterAmountMinimum50Usd")}
                        inputMode="numeric"
                        type="number"
                      />
                      <img
                        src={
                          deposit_address.find(
                            (item) => item.name === form.watch("currency"),
                          )?.image
                        }
                        alt={form.watch("currency")}
                        className="w-8 h-8 object-contain mix-blend-multiply rounded-full absolute right-5 top-1/2 -translate-y-1/2"
                      />
                    </div>
                    <div>
                      {transactions?.transactions.length === 0 && (
                        <div className="bg-green-50 p-4 text-gray-600 rounded-md space-y-2">
                          <div className="flex gap-2 items-center text-green-700">
                            <IconGiftFilled className="text-green-500" />
                            <p className="text-sm font-bold">
                              {t("components.bonusAvailable")}
                            </p>
                          </div>
                          <p>{t("components.youHaveA20Bonus")}</p>
                        </div>
                      )}
                      <div className="mt-5 lg:w-2/3 w-full space-y-2 text-sm mx-auto">
                        <div className="flex justify-between">
                          <span>{t("components.amount")}</span>
                          <span className="font-bold text-sm ">
                            {form.watch("amount")}
                            {t("components.00usd")}
                          </span>
                        </div>
                        {transactions?.transactions.length === 0 && (
                          <div className="flex justify-between">
                            <span>{t("components.bonus")}</span>
                            <span className="font-bold text-sm ">
                              {(form.watch("amount") * 0.2).toFixed(2)}
                              {t("components.usd")}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>{t("components.commission")}</span>
                          <span className="font-bold text-sm ">
                            {form.watch("amount") * 0}
                            {t("components.00usd")}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t("components.processingTime")}</span>
                          <span className="font-bold text-sm ">
                            {t("components.25Mins")}{" "}
                          </span>
                        </div>
                        <div className="flex justify-between mt-5 text-black font-bold text-base">
                          <span>{t("components.receivingAmount")}</span>
                          {transactions?.transactions?.length === 0 && (
                            <span className="font-bold text-base ">
                              {(form.watch("amount") * 1.2).toFixed(2)}
                              {t("components.usd")}
                            </span>
                          )}
                          {(transactions?.transactions || []).length > 1 && (
                            <span className="font-bold text-base ">
                              {(form.watch("amount") * 1).toFixed(2)}
                              {t("components.usd")}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button
                      className="mt-10"
                      disabled={!form.watch("amount") || Number(form.watch("amount")) < 50}
                      onClick={() => setStep("three")}
                    >
                      {t("components.makePayment")}
                    </Button>
                    <Button
                      className="border-primary text-primary"
                      variant={"outline"}
                      onClick={() => {
                        setStep("one");
                        form.reset();
                      }}
                    >
                      {t("components.back")}
                    </Button>
                  </FormItem>
                )}
              />
            </div>
          )}
          {step === "three" && (
            <div className="space-y-2">
              <img
                src={
                  deposit_address.find(
                    (item) => item.name === form.watch("currency"),
                  )?.image
                }
                alt={form.watch("currency")}
                className="lg:w-10 lg:h-10 mb-5 mx-auto w-10 h-10 object-contain mix-blend-multiply rounded-full"
              />
              <p className="text-sm text-black font-bold text-center">
                {t("components.makeYourPaymentToThis")}
              </p>
              <div className="flex justify-between items-center p-3 border rounded-md">
                <p className="font-mono text-sm">
                  {
                    deposit_address.find(
                      (item) => item.name === form.watch("currency"),
                    )?.address
                  }
                </p>
                {!copyToClipBoard.isPending && !copyToClipBoard.isSuccess && (
                  <IconCopy onClick={handleCopyToClipBoard} />
                )}
                {copyToClipBoard.isPending && <Loader />}
                {copyToClipBoard.isSuccess && (
                  <IconCopyCheck
                    className="text-green-500"
                    onClick={handleCopyToClipBoard}
                  />
                )}
              </div>
              <div className="text-center space-y-3 py-4">
                <img
                  src={deposit_address[0].qr_code}
                  alt={t("components.qrCode")}
                  className="h-40 w-40 object-contain mx-auto mt-4 rounded-md"
                />
                <p>{t("components.orScanThisQrCode")}</p>
              </div>
              <div className="bg-sky-50 text-gray-700 p-4 rounded-xl">
                <div className="space-y-2">
                  <p className="flex gap-1 text-primary font-bold items-center text-sm">
                    <IconAlertSquareRounded size={18} />{" "}
                    {t("components.takeNote")}
                  </p>
                  <p>{t("components.verifyTheAddressOnThis")}</p>
                </div>
              </div>
              <Button
                className="mt-4 w-full"
                type="submit"
                disabled={makePayment.isPending}
              >
                {!makePayment.isPending && t("components.iHaveMadePayment")}
                {makePayment.isPending && <Loader />}
              </Button>
              <Button
                className="border-primary w-full text-primary"
                variant={"outline"}
                onClick={() => {
                  setStep("two");
                }}
              >
                {t("components.back")}
              </Button>
            </div>
          )}
          {step === "four" && <PaymentCompleted />}
        </form>
      </Form>
    </div>
  );
};

function PaymentCompleted() {
  const { t } = useTranslation();
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
        {t("components.depositRequestCompleted")}
      </h2>
      <p>{t("components.yourDepositRequestHasBeen")}</p>
      <div className="flex items-center justify-center mt-10 gap-2 w-full">
        <Link href="/user/dashboard">
          <Button variant={"secondary"} className="bg-gray-100 text-black">
            {t("components.goToDashboard")}
          </Button>
        </Link>
        <Button className="" onClick={handleDepositAgain}>
          {t("components.depositAgain")}
        </Button>
      </div>
    </div>
  );
}

export default DepositForm;
