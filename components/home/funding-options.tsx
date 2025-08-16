import React from "react";
import {
  IconSeedling,
  IconGraph,
  IconUserBitcoin,
  Icon
} from "@tabler/icons-react";

const FundingOptions = () => {
  return (
    <div className="h-full">
      <div className="grid grid-cols-1 h-full  lg:gap-10 gap-5 ">
        <FundingOption
          title="Create an Account"
          description="Sign up and start trading in minutes."
          Icon={IconSeedling}
        />
        <FundingOption
          title="Subscribe to our trusted experts"
          description="Access exclusive insights and strategies from top traders."
          Icon={IconGraph}
        />
        <FundingOption
          title="Start Winning"
          description="Leverage our tools and insights to maximize your trading potential."
          Icon={IconUserBitcoin}
        />
   
      </div>
    </div>
  );
};

interface FundingOptionProps {
  title: string;
  description: string;
  Icon: Icon;
}
const FundingOption = ({ title, description, Icon }: FundingOptionProps) => {
  return (
    <div className="flex max-md:flex-col lg:gap-4 border-b lg:items-center justify-between bg-white pb-5 border-gray-100">
      <div className="flex max-md:flex-col gap-5 lg:items-center lg:w-1/2">
        <div className="bg-black/2 w-fit rounded-full p-4 h-fit">
          <Icon size={32} className="text-black/70" strokeWidth={1.2} />
        </div>
        <h3 className="text-sm lg:text-lg text-zinc-700 font-semibold">
          {title}
        </h3>
      </div>
      <div className="lg:w-1/2 w-full">
        <p className="text-xs  lg:text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default FundingOptions;
