"use client";
/* eslint-disable @next/next/no-img-element */
import { env } from "@/env";
import { Experts } from "@/services/expert/types";
import { formatCurrency } from "@/utils/currency/format-currency";
import { Users } from "lucide-react";
import React from "react";
import { Button } from "../ui";
import {
  useCreateSubscription,
  useIsExpertSubscribed,
} from "@/hooks/subscriptions";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { useExpertTrades } from "@/hooks/experts";
import { useUserStore } from "@/store/user";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

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
  id: expert_id,
  isActive,
  variant = "large",
  showProfitGained,
}: Experts & {
  isActive?: boolean;
  variant?: "large" | "small";
  showProfitGained?: boolean;
}) => {
    const { t } = useTranslation();
  const {data} = useUserStore();
  const router = useRouter();
  const createSubscription = useCreateSubscription();
  const { isSubscribed } = useIsExpertSubscribed(expert_id);
  const queryClient = useQueryClient();
  const { data: expertProfits } = useExpertTrades(expert_id);
  const handleSubscription = () => {

    if(!data?.kyc_verified){
      toast.error(t('components.pleaseCompleteKycVerificationTo'),{
        action:<Button onClick={()=>{router.push('/user/account/?open=true')}}>{t('components.completeKyc')}</Button>
      });
      return;
    }
    if (isSubscribed) {
      toast.error(t('components.youAreAlreadySubscribedTo'));
      return;
    }
    createSubscription.mutate(
      {
        expert_id,
        is_active: false,
      },
      {
        onSuccess: () => {
          toast.success(t('components.subscriptionCreatedSuccessfully'));
          queryClient.invalidateQueries({
            queryKey: ["userSubscription"],
          });
        },
        onError: () => {
          toast.error(t('components.failedToCreateSubscription'));
        },
      }
    );
  };

  return (
    <div
      className={cn(
        "overflow-clip rounded-xl pb-4 border border-gray-100 relative font-bold"
      )}
    >
      {variant !== "small" && <div className="bg-black h-24 " />}
      <div className={cn("px-3", variant == "small" && "fle")}>
        <div
          className={cn(
            "flex justify-between items-center flex-col  -translate-y-5 ",
            variant == "small" && " translate-y-4 pb-4 items-start"
          )}
        >
          <img
            loading="lazy"
            src={`${env.API_BASE_URL}${avatar}`}
            alt={name}
            className={cn(
              "w-20 h-20 object-cover object-top rounded-full",
              variant === "small" && "w-12 h-12"
            )}
          />
          <div
            className={cn(
              "text-center text-xs ",
              variant === "small" && "text-left text-[.65rem] space-y-1"
            )}
          >
            <p
              className={cn(
                "mt-2 text-base text-black",
                variant === "small" && "text-sm"
              )}
            >
              {name}
            </p>
            <p className=" flex items-center gap-1  text-gray-400">
              <Users size={16} /> {followers} {t('components.followers')}</p>
          </div>
        </div>
        {variant !== "small" && (
          <div className="-translate-y-2.5 text-center">
            <p className="text-2xl font-bold text-green-600 pb-1">
              {formatCurrency(all_time_profit)}
            </p>
            <p className="pb-1 text-gray-500 text-[.65rem]">
              {win_rate}{t('components.winRateAllTime')}</p>

            {/* <span className="text-xs text-gray-400">All time profit</span> */}
          </div>
        )}
        {variant !== "small" && (
          <div className=" space-y-1 text-[.65rem] text-black">
            <p className="flex justify-between">
              <span className="text-gray-400">{t('components.averageFollowerProfit')}</span>
              {formatCurrency(followers_profit_average)}
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400">{t('components.minimumInvestment')}</span>
              {formatCurrency(minimum_investment)}
            </p>
            <p className="flex justify-between capitalize">
              <span className="text-gray-400">{t('components.marketDomain')}</span>
              {market_domain}
            </p>
            <p className="flex justify-between capitalize">
              <span className="text-gray-400">{t('components.preferredCurrency')}</span>
              {preferred_currency}
            </p>
          </div>
        )}
        {isActive !== undefined && (
          <p
            className={cn(
              "mx-auto w-fit px-5 py-2 absolute bg-orange-50 text-orange-600 text-xs rounded-full top-2 right-2",
              isActive && "bg-green-50 text-green-600"
            )}
          >
            {isActive ? t('components.active') : t('components.pendingConfirmation')}
          </p>
        )}
        {(showProfitGained && isActive) && (
          <p className="text-xs text-gray-500 text-center mt-4">
            {t('components.estimatedProfitGained')}<br />
            <span className="text-lg text-black block mt-1"> {formatCurrency(
              (expertProfits?.trades || []).reduce(
                (acc, trade) => acc + trade.profit_loss,
                0
              )
            )}</span>
          </p>
        )}
        {variant !== "small" && (
          <Button
            loading={createSubscription.isPending}
            disabled={createSubscription.isPending}
            onClick={handleSubscription}
            className="w-full mt-2"
          >
            {isSubscribed ? t('components.alreadySubscribed') : t('components.subscribeToExpert')}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ExpertCard;
