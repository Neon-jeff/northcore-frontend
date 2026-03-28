'use client'
import {DepositForm,WithdrawalForm} from "@/components/cashier";
import { Button } from "@/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUserStore } from "@/store/user";
import { useGSAP } from "@gsap/react";
import { IconX } from "@tabler/icons-react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const CashierPage = () => {
    const { t } = useTranslation();
  const {data} = useUserStore();
  return (
    <div className="bg-white flex flex-col items-center lg:min-h-5/6 max-md:min-h-screen lg:p-10 p-5 rounded-xl max-md:mb-10 lg:w-11/12">
      <h1 className="lg:text-2xl text-2xl font-bold text-zinc-800 mb-5">
        {t('components.cashier')}</h1>
      <Tabs defaultValue="deposit" className="lg:w-1/2 w-full">
        <TabsList className="w-full">
          <TabsTrigger value="deposit">{t('components.deposit')}</TabsTrigger>
          <TabsTrigger value="withdraw">{t('components.withdraw')}</TabsTrigger>
          <TabsTrigger value="transfer">{t('components.transfer')}</TabsTrigger>
        </TabsList>
        <TabsContent value="deposit" className="w-full">
          <DepositForm/>
        </TabsContent>
        <TabsContent value="withdraw" className="w-full">
          {
            data?.kyc_verified ? <WithdrawalForm/> : <KYCRequired/>
          }
        </TabsContent>
        <TabsContent value="transfer" className="w-full">
          <NotQualified/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

function KYCRequired() {
    const { t } = useTranslation();
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
        {t('components.kycVerificationRequired')}</h2>
      <p>
        {t('components.toMitigateInappropriateFinancialActivities')}</p>
      <div className="flex items-center justify-center mt-10 gap-2 w-full">
        <Link href="/user/account/?open=true" className="w-full">
          <Button variant={'secondary'} className="bg-black text-white">{t('components.verifyKyc')}</Button>
        </Link>
      </div>
    </div>
  );
}

function NotQualified() {
    const { t } = useTranslation();
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
        {t('components.featureNotAvailable')}</h2>
      <p>
        {t('components.thisFeatureIsNotYet')}</p>
      <div className="flex items-center justify-center mt-10 gap-2 w-full">
        <Link href="/user/dashboard" className="w-full">
          <Button variant={'secondary'} className="bg-black text-white">{t('components.viewDashboard')}</Button>
        </Link>
      </div>
    </div>
  );
}


export default CashierPage;
