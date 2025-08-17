/* eslint-disable @next/next/no-img-element */
"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { env } from "@/env";
import { useMarketData } from "@/hooks/markets/indext";
import { cn } from "@/lib/utils";
import {
  Cryptocurrency,
  Forexpairs,
  Stocks,
} from "@/services/market-data/types";
import { Loader2Icon } from "lucide-react";
import React from "react";

const MarketDataPage = () => {
  const { data, isLoading } = useMarketData();
  return (
    <div className="lg:w-11/12 w-full py-10 p-2 space-y-5 lg:min-h-5/6 max-md:min-h-screen rounded-2xl bg-white lg:p-10 ">
      <Tabs defaultValue="crypto" className="lg:w-2/3 w-full mx-auto    ">
        <TabsList className="w-full">
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="forex">Forex</TabsTrigger>
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
        </TabsList>
        {
            isLoading && <Loader2Icon className="animate-spin h-5 w-5 text-gray-500 mx-auto mt-10" />
        }
        {data && (
          <ScrollArea className="h-[70vh] mt-10">
            <TabsContent value="crypto" className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                {data?.cryptocurrencies.map((crypto) => (
                  <CryptoCard key={crypto.name} crypto={crypto} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="forex" className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                {data?.forex_pairs.map((forex) => (
                  <ForexCard key={forex.currency} forex={forex} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="stocks" className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                {data?.stocks.map((stock) => (
                  <StocksCard key={stock.image} stock={stock} />
                ))}
              </div>
            </TabsContent>
          </ScrollArea>
        )}
      </Tabs>
    </div>
  );
};

export function CryptoCard({ crypto }: { crypto: Cryptocurrency }) {
  return (
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
        <p className="text-base font-bold text-zinc-700">${crypto.price}</p>
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
  );
}

export function ForexCard({ forex }: { forex: Forexpairs }) {
  return (
    <div
      key={forex.currency}
      className="flex justify-between items-center bg-gray-50/30 gap-2 mb-4  p-4 border border-zinc-100/60 rounded-xl"
    >
      <div className="flex items-center gap-6">
        <img
          loading="lazy"
          src={`${env.API_BASE_URL}/static/images/forex/${forex.currency}.png`}
          alt={forex.currency}
          className="h-10 w-10 rounded-full"
        />
        <p>{forex.currency}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="text-base font-bold text-zinc-700">${forex.rate}</p>
      </div>
    </div>
  );
}

export function StocksCard({ stock }: { stock: Stocks }) {
  return (
    <div
      key={stock.image}
      className="flex justify-between items-center bg-gray-50/30 gap-2 mb-4  p-4 border border-zinc-100/60 rounded-xl"
    >
      <div className="flex items-center gap-6">
        <img
          loading="lazy"
          src={`${env.API_BASE_URL}/static/images/stocks/${stock.name}.png`}
          alt={stock.name}
          className="h-10 w-10 rounded-full"
        />
        <p>{stock.name}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="text-base font-bold text-zinc-700">${stock.price}</p>
      </div>
    </div>
  );
}

export default MarketDataPage;
