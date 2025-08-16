import DepositForm from "@/components/cashier/deposit";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const CashierPage = () => {
  return (
    <div className="bg-white flex flex-col items-center lg:min-h-5/6 max-md:h-screen lg:p-10 p-5 rounded-xl max-md:mb-10 lg:w-11/12">
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
      </Tabs>
    </div>
  );
};

export default CashierPage;
