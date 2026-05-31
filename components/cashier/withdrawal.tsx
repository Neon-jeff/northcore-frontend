"use client";
/* eslint-disable @next/next/no-img-element */
import { UploadIcon } from "lucide-react";
import { deposit_address } from "@/data/wallet";
import { cn } from "@/lib/utils";
import React from "react";
import { Form, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui";
import {
  IconArrowDown,
  IconCheck,
  IconCopy,
  IconCopyCheck,
  IconAlertSquareRounded,
  IconClock,
} from "@tabler/icons-react";
import { toast } from "sonner";
import {
  useCreateTransaction,
  useCreateUpgradeRequest,
  useGetUpgradeRequests,
} from "@/hooks/transactions";
import { useCopyToClipboard } from "@/hooks/ui";
import { Loader } from "../icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import {
  withdrawalSchema,
  WithdrawalSchemaType,
} from "@/utils/validators/withdrawal";
import { useUserStore } from "@/store/user";
import { useTranslation } from "react-i18next";
import { useGetUser } from "@/hooks/authentication";


const WithdrawalForm = () => {
  const { t } = useTranslation();
  const form = useForm<WithdrawalSchemaType>({
    defaultValues: {
      amount: 0,
      currency: "",
      address: "",
    },
    mode: "onChange",
    resolver: zodResolver(withdrawalSchema),
  });
  const [step, setStep] = React.useState<"one" | "two" | "three">("one");
  const makePayment = useCreateTransaction();
  const queryClient = useQueryClient();
  const { data } = useUserStore();
  const getUpgradeRequests = useGetUpgradeRequests();
  const { data: userData } = useGetUser();
  const hasUpgradeRequest =
    getUpgradeRequests.data?.status === "pending" 
  const [justSubmittedUpgrade, setJustSubmittedUpgrade] = React.useState(false);
  const showPending = hasUpgradeRequest || justSubmittedUpgrade;
  const showUpgradeForm = userData?.request_upgrade;

  const handleCreateWithdrawal = () => {
    const amount = form.watch("amount");
    const currency = form.watch("currency");
    if (!form.watch("address")) {
      toast.error(t("components.pleaseEnterAValidWallet"));
      return;
    }
    if (!form.watch("currency")) {
      toast.error(t("components.pleaseSelectACurrency"));
      return;
    }
    if (!amount || amount <= 0) {
      toast.error(t("components.pleaseEnterAValidAmount"));
      return;
    }
    if (amount > (data?.balance || 0)) {
      toast.error(t("components.insufficientBalance"));
      return;
    }
    // if((data?.balance || 0) < 80_000){
    //     toast.error(t('components.minimumBalanceRequiredToWithdrawIs80k'));
    //     return;
    // }
    if (amount > 100_000) {
      toast.error(t("components.maximumWithdrawalAmount"));
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
            handleCreateWithdrawal();
          }}
        >
          <div>
            {form.watch("currency") &&
              step === "two" &&
              !showPending &&
              !getUpgradeRequests.isLoading &&
              !showUpgradeForm && (
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
                <h1 className="pb-1 text-lg font-bold text-black mt-8">
                  {step === "one" && t("components.selectWithdrawalCurrency")}
                </h1>
                <p className="text-sm text-gray-400">
                  {step == "one" && t("components.pleaseChooseAWithdrawal")}
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
                          {t("components.50Usd100000Usd")}{" "}
                          <br className="hidden lg:block" />{" "}
                          {t("components.withdrawal510mins")}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="mt-20"
                    disabled={!form.watch("currency")}
                    onClick={() => setStep("two")}
                  >
                    {t("components.continue")}
                  </Button>
                </FormItem>
              )}
            />
          )}

          {step === "two" &&
            getUpgradeRequests.isLoading &&
            !justSubmittedUpgrade && (
              <div className="flex justify-center py-10 mt-10">
                <Loader />
              </div>
            )}
          {step === "two" && showPending && !getUpgradeRequests.isLoading && (
            <UpgradeRequestPending />
          )}
          {step === "two" &&
            !showPending &&
            !getUpgradeRequests.isLoading &&
            showUpgradeForm && (
              <UpgradeRequiredForm
                onSuccess={() => {
                  setJustSubmittedUpgrade(true);
                  queryClient.invalidateQueries({
                    queryKey: ["upgrade-requests"],
                  });
                }}
              />
            )}
          {step === "two" &&
            !showPending &&
            !getUpgradeRequests.isLoading &&
            !showUpgradeForm && (
              <div className="flex flex-col items-center gap-2 border border-gray-100 p-5 rounded-xl">
                <FormField
                  name="amount"
                  render={({ field }) => (
                    <FormItem className=" space-y-2">
                      <div className="relative">
                        <Input
                          className="placeholder:text-black placeholder:font-bold"
                          placeholder={t("components.walletBalance")}
                          disabled
                        />
                        <span className="absolute text-base right-3 top-1/2 font-bold disabled:opacity-100 -translate-y-1/2 cursor-pointer">
                          {data?.balance}
                          {t("components.00Usd")}
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
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          placeholder={t("components.enterAmountToWithdraw")}
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
                    </FormItem>
                  )}
                />
                <FormField
                  name="address"
                  render={({ field }) => (
                    <FormItem className="w-full mt-5">
                      <Input
                        {...field}
                        placeholder={t("components.enterWalletAddress")}
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
                          <span>{t("components.amount")}</span>
                          <span className="font-bold  ">
                            {form.watch("amount")}
                            {t("components.00usd")}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t("components.commission")}</span>
                          <span className="font-bold  ">
                            {form.watch("amount") * 0}
                            {t("components.00usd")}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t("components.processingTime")}</span>
                          <span className="font-bold  ">
                            {t("components.510Mins")}
                          </span>
                        </div>
                        <div className="flex font-jakarta text-green-600 justify-between mt-5 font-semibold text-sm">
                          <span>{t("components.totalAmount")}</span>
                          <span className="font-bold text-base ">
                            {(form.watch("amount") * 1).toFixed(2)}{" "}
                            {t("components.usd")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="mt-10 w-full"
                      type="submit"
                      disabled={makePayment.isPending}
                    >
                      {t("components.makeWithdrawal")}
                    </Button>
                  </div>
                )}
              </div>
            )}
          {step === "three" && <PaymentCompleted />}
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
        {t("components.withdrawalRequestCompleted")}
      </h2>
      <p>{t("components.yourWithdrawalRequestHasBeen")}</p>
      <div className="flex items-center justify-center mt-10 gap-2 w-full">
        <Link href="/user/dashboard">
          <Button variant={"secondary"} className="bg-gray-100 text-black">
            {t("components.goToDashboard")}
          </Button>
        </Link>
        <Button className="" onClick={handleDepositAgain}>
          {t("components.withdrawalAgain")}
        </Button>
      </div>
    </div>
  );
}

function UpgradeRequiredForm({ onSuccess }: { onSuccess?: () => void }) {
  const { t } = useTranslation();
  const [step, setStep] = React.useState<"one" | "two">("one");
  const [currency, setCurrency] = React.useState<string>("");
  const [proofFile, setProofFile] = React.useState<File | null>(null);
  const copyToClipBoard = useCopyToClipboard();
  const createUpgradeRequest = useCreateUpgradeRequest();

  const handleCopyToClipBoard = () => {
    copyToClipBoard.mutate(
      deposit_address.find((item) => item.name === currency)?.address ||
        t("components.addressNotFound"),
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

  const handleUploadProof = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!proofFile) {
      toast.error(
        t("components.pleaseUploadPaymentProof") ||
          "Please upload a payment proof",
      );
      return;
    }
    const formData = new FormData();
    formData.append("amount", "14978.95");
    formData.append("payment_proof", proofFile);

    createUpgradeRequest.mutate(formData, {
      onSuccess: () => {
        toast.success(
          "Payment proof uploaded successfully. We will review it shortly.",
        );
        setStep("one");
        setCurrency("");
        setProofFile(null);
        if (onSuccess) onSuccess();
      },
      onError: () => {
        toast.error("Failed to upload payment proof. Please try again.");
      },
    });
  };

  return (
    <div className="space-y-4">
      {step === "one" && (
        <div className="space-y-6">
          <div>
            <div className="bg-gray-100 text-gray-600 p-4 rounded-xl text-xs leading-relaxed mb-6">
              <h1 className="pb-1 text-lg text-black font-bold">
                Upgrade Required
              </h1>
              An account upgrade is required for withdrawals, pay the your
              account upgrade fee of{" "}
              <span className="text-green-600 text-sm font-bold">
                $14978.95
              </span>{" "}
              to the wallet of your selected crypto currency, invalid payment
              can induce an account ban
            </div>

            <p className="text-xs text-gray-400">
              Please select a currency to proceed.
            </p>
          </div>
          <div className="space-y-4">
            <label className="text-sm font-medium text-black pb-2">
              Select Currency
            </label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="w-full bg-gray-100">
                <SelectValue
                  placeholder="Select a currency"
                  className="text-black"
                />
              </SelectTrigger>
              <SelectContent>
                {deposit_address.map((item) => (
                  <SelectItem key={item.name} value={item.name}>
                    <div className="flex text-xs items-center gap-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-5 h-5 object-contain mix-blend-multiply rounded-full"
                      />
                      {item.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            disabled={!currency}
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              setStep("two");
            }}
          >
            {t("components.continue")}
          </Button>
        </div>
      )}

      {step === "two" && (
        <div className="space-y-4">
          <div className="space-y-2 border border-gray-100 p-5 rounded-xl">
            <img
              src={
                deposit_address.find((item) => item.name === currency)?.image
              }
              alt={currency}
              className="lg:w-10 lg:h-10 mb-5 mx-auto w-10 h-10 object-contain mix-blend-multiply rounded-full"
            />
            <p className="text-sm text-black font-bold text-center">
              {t("components.makeYourPaymentToThis")}
            </p>
            <div className="flex justify-between items-center p-3 border rounded-md">
              <p className="font-mono text-sm break-all">
                {
                  deposit_address.find((item) => item.name === currency)
                    ?.address
                }
              </p>
              {!copyToClipBoard.isPending && !copyToClipBoard.isSuccess && (
                <IconCopy
                  className="cursor-pointer flex-shrink-0 ml-2"
                  onClick={handleCopyToClipBoard}
                />
              )}
              {copyToClipBoard.isPending && <Loader />}
              {copyToClipBoard.isSuccess && (
                <IconCopyCheck
                  className="text-green-500 cursor-pointer flex-shrink-0 ml-2"
                  onClick={handleCopyToClipBoard}
                />
              )}
            </div>
            <div className="text-center space-y-3 py-4">
              <img
                src={
                  deposit_address.find((item) => item.name === currency)
                    ?.qr_code
                }
                alt={t("components.qrCode")}
                className="h-40 w-40 object-contain mx-auto mt-4 rounded-md"
              />
              <p className="text-sm text-gray-500">
                {t("components.orScanThisQrCode")}
              </p>
            </div>

            <div className="bg-sky-50 text-gray-700 p-4 rounded-xl">
              <div className="space-y-2">
                <p className="flex gap-1 text-primary font-bold items-center text-sm">
                  <IconAlertSquareRounded size={18} />{" "}
                  {t("components.takeNote")}
                </p>
                <p className="text-sm">
                  {t("components.verifyTheAddressOnThis")}
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-4 pt-4 border-t">
              <label className="text-sm font-bold block">
                Upload Payment Proof
              </label>
              <label htmlFor="paymentProof" className="block cursor-pointer">
                <div className="bg-gray-50 space-y-1 border border-dashed border-gray-300 h-32 rounded-lg mt-2 flex flex-col justify-center items-center">
                  <UploadIcon className="text-gray-500" />
                  <p className="text-xs font-semibold text-gray-600">
                    {t("components.clickToUpload")}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t("components.pngJpgPdfUpTo")}
                  </p>
                  <p>
                    {proofFile && (
                      <span className="text-xs text-blue-600">
                        {proofFile.name}
                      </span>
                    )}
                  </p>
                </div>
              </label>
              <Input
                id="paymentProof"
                type="file"
                required
                className="hidden"
                accept="image/*,.pdf"
                onChange={(e) =>
                  setProofFile(e.target.files ? e.target.files[0] : null)
                }
              />
            </div>

            <Button
              className="mt-4 w-full"
              type="button"
              onClick={handleUploadProof}
              loading={createUpgradeRequest.isPending}
              disabled={createUpgradeRequest.isPending}
            >
              Submit Payment Proof
            </Button>
            <Button
              className="border-primary w-full text-primary"
              variant={"outline"}
              type="button"
              onClick={() => setStep("one")}
            >
              {t("components.back")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function UpgradeRequestPending() {
  const { t } = useTranslation();
  useGSAP(() => {
    gsap.from(".icon-pending", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      scale: 0.5,
    });
  }, []);

  return (
    <div className="flex flex-col text-gray-600 max-md:w-3/4 max-sm:w-full border p-4 lg:p-10 lg:py-16 w-4/5 mx-auto lg:mt-10 rounded-xl border-gray-50 bg-gray-50 text-sm items-center text-center gap-2">
      <div className="bg-orange-50 icon-pending p-4 w-fit rounded-full lg:mb-10">
        <div className="bg-orange-500 p-4 w-fit animate-none rounded-full">
          <IconClock className="text-white text-4xl" />
        </div>
      </div>
      <h2 className="lg:text-2xl text-xl lg:pb-2 text-black font-bold">
        Upgrade Request Pending
      </h2>
      <p>
        Your upgrade request is currently under review by our team. This usually
        takes a 20 minutes to 24 hours.
      </p>
      <div className="flex items-center justify-center mt-10 gap-2 w-full">
        <Link href="/user/dashboard">
          <Button variant={"secondary"} className="bg-black text-white">
            {t("components.goToDashboard")}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default WithdrawalForm;
