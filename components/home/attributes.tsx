"use client";
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
import { useTranslation } from "react-i18next";

const Attributes = () => {
    const { t } = useTranslation();
  return (
    <div className="h-full">
      <div className="grid grid-cols-2 h-full   md:grid-cols-2  lg:grid-cols-3 lg:gap-10 gap-5 ">
        <AttributeItem
          title={t('components.assetGrowth')}
          description={t('components.maximizeYourPortfolioWithOur')}
          Icon={IconSeedling}
        />
        <AttributeItem
          title={t('components.realtimeData')}
          description={t('components.accessUptodateMarketDataTo')}
          Icon={IconGraph}
        />
        <AttributeItem
          title={t('components.communitySupport')}
          description={t('components.joinACommunityOfTraders')}
          Icon={IconUserBitcoin}
        />
        <AttributeItem
          title={t('components.advancedTools')}
          description={t('components.utilizeCuttingedgeToolsForInformed')}
          Icon={IconDevicesCog}
        />
        <AttributeItem
          title={t('components.demoTrading')}
          description={t('components.practiceTradingStrategiesWithOur')}
          Icon={IconChartCohort}
        />
        <AttributeItem
          title={t('components.securedProcess')}
          description={t('components.ensureYourTradesAreSecure')}
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
    const { t } = useTranslation();
  return (
    <div className="flex max-md:flex-col gap-4  lg:items-center bg-white pb-5 ">
      <div className="bg-black/4 w-fit rounded-xl lg:p-6 p-4 h-fit">
        <Icon size={32}  className="text-black/70" strokeWidth={1.2} />
      </div>
      <div>
        <h3 className="text-base lg:text-lg text-zinc-700 font-semibold">{title}</h3>
        <p className="text-xs lg:text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Attributes;
