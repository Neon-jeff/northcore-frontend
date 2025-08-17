/* eslint-disable @next/next/no-img-element */
"use client";
import { ProfitPerformance } from "@/components/charts";
import { DataTable } from "@/components/data-tables";
import { transactionsColumns } from "@/components/data-tables/column-defs/transactions";
import ExpertCard from "@/components/experts/expert-card";
import { Button } from "@/components/ui";
import { useExperts } from "@/hooks/experts";
import { useCryptocurrencyData } from "@/hooks/markets/indext";
import {  useUserExperts } from "@/hooks/subscriptions";
import { useGetTransactions } from "@/hooks/transactions";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user";
import { formatCurrency } from "@/utils/currency/format-currency";
import { IconArrowRight, IconGiftFilled } from "@tabler/icons-react";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="lg:grid lg:grid-cols-[3fr_1.5fr]  gap-5 min-h-screen ">
      <div className="flex flex-col gap-5 h-full ">
        <div className="flex max-md:flex-col gap-5">
          <AccountBalance />
          <AccountInfo />
        </div>
        <Banner />
        <RecentActivity />
      </div>
      <div className="flex flex-col gap-5 h-full">
        <CustomerActivity />
        <MarketOverview />
      </div>
    </div>
  );
};

function AccountBalance() {
  const { data } = useUserStore();
  return (
    <div className="lg:w-2/3 rounded-2xl bg-white lg:py-10 p-5 min-h-64 space-y-6">
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

function AccountInfo() {
  const experts = useUserExperts();
  return (
    <div className="lg:w-1/3 rounded-2xl relative bg-white lg:py-5 p-5 min-h-64">
      <p className="text-black  text-base font-bold mb-2">
        Recent Subscriptions
      </p>
      {experts.length === 0 && (
        <div className="space-y-2 h-full flex flex-col lg:justify-center items-center mt-4">
          <Image
            src={"/icons/no-expert.svg"}
            width={100}
            height={100}
            alt="No Active Subscription"
          />
          <p className="text-sm ">No Active Subscription</p>
          <button className=" rounded-full bg-primary/5 lg:mt-5 text-primary text-sm p-3 w-full px-5">
            Subscribe to an expert
          </button>
        </div>
      )}
      {
        experts.slice(0,3).map((expert) => (
          <ExpertCard key={expert.id} {...expert} variant="small" />
        ))
      }
    </div>
  );
}

function Banner() {
  const { data } = useExperts();
  return (
    <div className="w-full z-0 rounded-2xl relative  bg-white  lg:p-5  p-5  space-y-8">
      <div className="flex max-md:flex-col justify-between gap-5 items-center ">
        <p className=" text-xl  text-zinc-800 flex items-center gap-2 font-bold">
          Top experts
        </p>
        <Link
          href={"/user/copy-trading"}
          className="text-primary max-md:hidden self-end text-sm flex px-5 items-center gap-2 bg-primary/5  p-3 rounded-full "
        >
          {" "}
          See all experts{" "}
          <IconArrowRight
            size={20}
            className="text-primary"
            strokeWidth={1.2}
          />
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {(data?.experts || []).map((item) => (
          <ExpertCard key={item.id} {...item} />
        ))}
      </div>
      <Link
        href={"/user/copy-trading"}
        className="text-primary lg:hidden justify-center self-end text-sm flex px-5 items-center gap-2 bg-primary/5  p-3 rounded-full "
      >
        See all experts{" "}
        <IconArrowRight size={20} className="text-primary" strokeWidth={1.2} />
      </Link>
    </div>
  );
}

function RecentActivity() {
  const { data, isLoading } = useGetTransactions();
  if (isLoading) {
    return (
      <div className="w-full rounded-2xl bg-white lg:p-10 p-5 h-full flex items-center justify-center">
        <LoaderCircle className="animate-spin text-primary" />
      </div>
    );
  }
  return (
    <div className=" rounded-2xl bg-white lg:p-10 p-3 h-full">
      <h1 className="text-black text-lg font-bold">Recent Transactions</h1>
      {data && (
        <DataTable
          columns={transactionsColumns}
          data={data.transactions.slice(0, 6)}
        />
      )}
    </div>
  );
}

function CustomerActivity() {
  return (
    <div className=" rounded-2xl bg-white lg:p-5 p-3 h-[30vh]">
      <h1 className="text-black text-lg font-bold">Customer Activity</h1>
      <div className="flex flex-col items-start w-full justify-between gap-2 border p-4 rounded-xl border-gray-100 mt-4">
        <div className="flex gap-2">
          <IconGiftFilled size={38} color="violet"/>
          <div>
            <p className="text-sm text-gray-600">20% Deposit Bonus</p>
            <p>Get started with your first deposit, win up to $200 in bonus funds</p>
          </div>
        </div>
        <Link href={'/user/cashier'} className=" text-[.7rem] h-10 self-end px-5 lg:w-1/3 bg-primary/5 text-primary font-bold rounded-full flex items-center gap-1">Claim Now <IconArrowRight size={16} className="text-primary" strokeWidth={1.2} /></Link>
      </div>
    </div>
  );
}

function MarketOverview() {
  const { data, isLoading } = useCryptocurrencyData();

  return (
    <div className=" w-full rounded-2xl bg-white overflow-hidden lg:p-5 py-10 p-5 flex  items-center flex-col gap-1 h-full">
      <h1 className="text-black w-full text-lg font-bold">Market Overview</h1>
      {isLoading && (
        <LoaderCircle className="animate-spin text-primary mt-20" />
      )}
      <div className="mt-5  w-full">
        {data &&
          data.cryptocurrencies.slice(0, 10).map((crypto) => (
            <div
              key={crypto.symbol}
              className="flex justify-between items-center bg-gray-50/30 gap-2 mb-4  p-4 border border-zinc-100/60 rounded-xl"
            >
              <div className="flex items-center gap-6">
                <img
                  loading="lazy"
                  src={crypto.image}
                  alt={crypto.name}
                  className="h-10 w-10 rounded-full"
                />
                <p>{crypto.name}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-base font-bold text-zinc-700">
                  ${crypto.price}
                </p>
                <p
                  className={cn("text-xs text-zinc-400", {
                    "text-green-500": crypto.change_1h > 0,
                    "text-red-500": crypto.change_1h < 0,
                  })}
                >
                  {crypto.change_1h.toPrecision(3)}%
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DashboardPage;
