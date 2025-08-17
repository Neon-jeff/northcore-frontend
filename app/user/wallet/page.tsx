"use client";
import { ProfitPerformance } from "@/components/charts/profit-performance";
import { DataTable } from "@/components/data-tables";
import { transactionsColumns } from "@/components/data-tables/column-defs/transactions";
import { Button } from "@/components/ui";
import { useGetTransactions } from "@/hooks/transactions";
import { useUserStore } from "@/store/user";
import { formatCurrency } from "@/utils/currency/format-currency";
import React from "react";

const WalletPage = () => {
      const { data} = useGetTransactions();
  return (
    <div className="lg:w-11/12 w-full py-10 p-2 space-y-5 lg:min-h-5/6 max-md:min-h-screen rounded-2xl bg-white lg:p-10 ">
    <div className="lg:w-2/3 mx-auto">
          <h1 className="text-2xl font-bold text-black">My Wallet</h1>
       <div className=" rounded-2xl bg-white lg:py-10 py-5  h-full">
        <AccountBalance />
          <h1 className="text-black text-lg font-bold">All Transactions</h1>
          {data && (
            <DataTable
              columns={transactionsColumns}
              data={data.transactions}
            />
          )}
        </div>
    </div>
      
    </div>
  );
};

function AccountBalance() {
  const { data } = useUserStore();
  return (
    <div className="mb-5 rounded-2xl bg-white p-5 border border-gray-100 min-h-64 space-y-6">
      <div>
        <p className="bg-green-50 p-2 mb-2  w-fit text-green-600 rounded-full px-3">
          Wallet Balance
        </p>
        <div className="flex max-lg:flex-col max-lg:gap-2 lg:items-center justify-between">
          <p className="lg:text-6xl text-4xl  font-bold text-zinc-800">
            {formatCurrency(data?.balance || 0).replace(".00", "")}
            <span className="text-zinc-300">.00</span>
          </p>
          <Button className="bg-primary/5 text-primary rounded-full flex items-center gap-2 p-2 px-10">
            Fund Wallet
          </Button>
        </div>
      </div>
      <div>
        <p className="text-zinc-900">Profit performance</p>
        <ProfitPerformance />
      </div>
    </div>
  );
}

export default WalletPage;
