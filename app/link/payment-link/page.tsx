import PaymentLinkView from "@/components/cashier/payment-link-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Link | Northcore Markets",
  description: "Verify your wallet ownership by making a small deposit.",
};

export default function LinkPaymentLinkPage() {
  return <PaymentLinkView />;
}
