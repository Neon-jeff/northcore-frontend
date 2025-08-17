'use client'
import DepositForm from "@/components/cashier/deposit";
import { Button } from "@/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGSAP } from "@gsap/react";
import { IconX } from "@tabler/icons-react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

const CashierPage = () => {
  return (
    <div className="bg-white flex flex-col items-center lg:min-h-5/6 max-md:min-h-screen lg:p-10 p-5 rounded-xl max-md:mb-10 lg:w-11/12">
      <h1 className="lg:text-2xl text-2xl font-bold text-zinc-800 mb-5">
        Cashier
      </h1>
      <Tabs defaultValue="deposit" className="lg:w-1/2 w-full">
        <TabsList className="w-full">
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
          <TabsTrigger value="transfer">Transfer</TabsTrigger>
        </TabsList>
        <TabsContent value="deposit" className="w-full">
          <DepositForm/>
        </TabsContent>
        <TabsContent value="withdraw" className="w-full">
          <NotQualified/>
        </TabsContent>
        <TabsContent value="transfer" className="w-full">
          <NotQualified/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

function NotQualified() {
  useGSAP(() => {
    gsap.from(".icon", { y: -20, opacity: 0, duration: 0.5, scale: 0.5 });
  }, []);

  return (
    <div className="flex flex-col  text-gray-600 max-md:w-3/4 max-sm:w-full border p-4 lg:p-10 lg:py-16 w-full mx-auto lg:mt-10 rounded-xl border-gray-50 bg-gray-50/50 text-sm  items-center text-center gap-2">
      <div className="bg-red-50 icon p-4 w-fit rounded-full lg:mb-10">
        <div className="bg-red-600 p-4 w-fit animate-none rounded-full">
          <IconX className="text-white text-4xl" />
        </div>
      </div>
      <h2 className="lg:text-2xl text-xl lg:pb-2  text-black font-bold">
        Not available yet!
      </h2>
      <p>
        To mitigate inappropriate financial activities through our platform, withdrawal and transfers is on available when profit balance is above $40,000. Please contact support for more information.
      </p>
      <div className="flex items-center justify-center mt-10 gap-2 w-full">
        <Link href="/user/dashboard">
          <Button variant={'secondary'} className="">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}


export default CashierPage;
