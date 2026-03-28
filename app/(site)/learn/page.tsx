"use client";
/* eslint-disable @next/next/no-img-element */
import Section from "@/components/layout/sections";
import React from "react";
import Footer from "@/components/ui/footer";
import { FundingOptions } from "@/components/home";
import { Button } from "@/components/ui";
import Globe from "@/components/ui/globe";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const CompanyPage = () => {
    const { t } = useTranslation();
  return (
    <main className="bg-white">
      <Section className="lg:pt-20 lg:w-full justify-between  pt-20 flex max-md:justify-center text-white bg-black min-h-screen lg:p-10  max-md:flex-col">
        <div className="space-y-2  gap-4 flex lg:w-1/2 lg:pl-40  flex-col justify-center">
          <div className="flex text-[.65rem] px-5 text-blue-100 items-center gap-2 p-2 bg-gray-800 w-fit rounded-full border border-blue-900">
            <div className="bg-blue-500 border-blue-200 size-3 rounded-full animate-pulse border-2 " />
            <span>{t('components.aNewWinningStrategy')}</span>
          </div>
          <Section.Title className="text-white block lg:text-6xl lg:w-full ">
            {t('components.howToLeverageCopyTrading')}</Section.Title>
          <Section.Description className="text-white lg:w-4/5">
            {t('components.copyTradingAllowsYouTo')}</Section.Description>
          <Button className="w-fit">{t('components.startTrading')}</Button>
        </div>
   
            <img
          src="/images/learn.png"
          alt={t('components.learnCopyTrading')}
          className="lg:w-1/3 lg:h-1/2 lg:mt-20 mt-10 max-md:w-full"
        />

      </Section>
      <Section className="mt-10">
           <Section.Title className=" block py-10  ">
            {t('components.howToStartCopyTrading')}</Section.Title>
         <FundingOptions />
         <div className="flex flex-col items-center lg:mt-20 mt-5">
          <div className="flex flex-col items-center text-center">
            <Section.Title className=" block py-10  ">
             {t('components.startYourCopyTradingJourney')}</Section.Title>
            <Section.Description className="lg:w-1/2 text-gray-600">
              {t('components.neuralTradesIsALeading')}</Section.Description>
            <Link href={'/auth/signup'}>
            <Button className="mt-10">{t('components.getStarted')}</Button>
            </Link>
          </div>
          <Globe />
         </div>
      </Section>
      <Footer />
    </main>
  );
};

export default CompanyPage;
