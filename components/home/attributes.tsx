import React from "react";
import {
  IconSeedling,
  IconGraph,
  IconUserBitcoin,
  Icon,
  IconShield,
  IconDevicesCog,
  IconChartCohort,
} from "@tabler/icons-react";

const Attributes = () => {
  return (
    <div className="h-full">
      <div className="grid grid-cols-1 h-full   md:grid-cols-2  lg:grid-cols-2 lg:gap-10 gap-5 ">
        <AttributeItem
          title="Asset Growth"
          description="Maximize your portfolio with our advanced trading strategies."
          Icon={IconSeedling}
        />
        <AttributeItem
          title="Real-Time Data"
          description="Access up-to-date market data to stay ahead of the curve."
          Icon={IconGraph}
        />
        <AttributeItem
          title="Community Support"
          description="Join a community of traders for shared insights and strategies."
          Icon={IconUserBitcoin}
        />
        <AttributeItem
          title="Advanced Tools"
          description="Utilize cutting-edge tools for informed trading decisions."
          Icon={IconDevicesCog}
        />
        <AttributeItem
          title="Demo Trading"
          description="Practice trading strategies with our demo accounts."
          Icon={IconChartCohort}
        />
        <AttributeItem
          title="Secured Process"
          description="Ensure your trades are secure with our robust platform."
          Icon={IconShield}
        />
      </div>
    </div>
  );
};

interface AttributeProps {
  title: string;
  description: string;
  Icon: Icon;
}
const AttributeItem = ({ title, description, Icon }: AttributeProps) => {
  return (
    <div className="flex max-md:flex-col gap-4 border-b lg:items-center bg-white pb-5 border-gray-100">
      <div className="bg-black/2 w-fit rounded-full p-4 h-fit">
        <Icon size={32}  className="text-black/70" strokeWidth={1.2} />
      </div>
      <div>
        <h3 className="text-sm lg:text-lg text-zinc-700 font-semibold">{title}</h3>
        <p className="text-xs lg:text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Attributes;
