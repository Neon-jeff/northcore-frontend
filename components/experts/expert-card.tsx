/* eslint-disable @next/next/no-img-element */
import { env } from "@/env";
import { Experts } from "@/services/expert/types";
import { formatCurrency } from "@/utils/currency/format-currency";
import { Users } from "lucide-react";
import React from "react";
import { Button } from "../ui";

const ExpertCard = ({
  name,
  avatar,
  followers_profit_average,
  followers,
  win_rate,
  all_time_profit,
  market_domain,
  preferred_currency,
  minimum_investment,
}: Experts) => {
  return (
    <div className="overflow-clip rounded-xl pb-4 border border-gray-100 font-bold">
      <div className="bg-black h-24 " />
      <div className="px-3">
        <div className="flex justify-between items-center flex-col   -translate-y-5  ">
          <img
            loading="lazy"
            src={`${env.API_BASE_URL}${avatar}`}
            alt={name}
            className="w-20 h-20 object-cover object-top rounded-full"
          />
          <div className="text-center">
            <p className="mt-2 text-base text-black">{name}</p>
            <p className=" flex items-center gap-1 text-xs  text-gray-400">
              <Users size={16} /> {followers} Followers
            </p>
          </div>
        </div>
        <div className="-translate-y-2.5 text-center">
          <p className="text-2xl font-bold text-green-600 pb-1">
            {formatCurrency(all_time_profit)}
          </p>
          <p className="pb-1 text-gray-500 text-[.65rem]">{win_rate}% Win rate all time</p>

          {/* <span className="text-xs text-gray-400">All time profit</span> */}
        </div>
        <div className=" space-y-1 text-[.65rem] text-black">
          <p className="flex justify-between">
            <span className="text-gray-400">Average follower profit: </span>
            {formatCurrency(followers_profit_average)}
          </p>
          <p className="flex justify-between">
            <span className="text-gray-400">Minimum Investment: </span>
            {formatCurrency(minimum_investment)}
          </p>
          <p className="flex justify-between capitalize">
            <span className="text-gray-400">Market Domain: </span>
            {market_domain}
          </p>
          <p className="flex justify-between capitalize">
            <span className="text-gray-400">Preferred Currency: </span>
            {preferred_currency}
          </p>
        </div>
        <Button className="w-full mt-5">Subscribe to expert</Button>
      </div>
    </div>
  );
};


export default ExpertCard;
