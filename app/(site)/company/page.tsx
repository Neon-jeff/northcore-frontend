"use client";
import Section from "@/components/layout/sections";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui";
import Footer from "@/components/ui/footer";
import { useTranslation } from "react-i18next";

const CompanyPage = () => {
    const { t } = useTranslation();
  return (
    <main className="bg-white">
      <Section className="lg:pt-40 max-md:w-11/12 mt-20 flex  min-h-[70vh] rounded-2xl lg:p-10 max-md:flex-col-reverse">
        <div className="space-y-2 gap-4 flex w-full flex-col justify-center">
          <Section.Title className="">{t('components.ourOperation')}</Section.Title>
          <Section.Description className=" lg:w-4/5">
            {t('components.weLeverageCuttingedgeTechnologyAnd')}</Section.Description>
          <Button className="w-fit">{t('components.startTradingNow')}</Button>
        </div>
        <motion.img
          src="/images/what-is-neural.jpeg"
          alt={t('components.companyImage')}
          className="lg:w-1/2 max-md:mb-10 w-full object-cover rounded-xl"
          width={600}
          height={400}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileTap={{ scale: 0.95 }}
          loading="lazy"
        />
      </Section>
      <Section className="lg:pt-20 max-md:w-11/12 mt-20 flex text-white home-banner min-h-[70vh] rounded-2xl lg:p-10 max-md:flex-col">
        <div className="space-y-2 gap-4 flex w-full  flex-col justify-center">
          <div className="flex text-[.65rem] px-5 text-blue-100 items-center gap-2 p-2 bg-gray-800 w-fit rounded-full border border-blue-900">
            <div className="bg-blue-500 border-blue-200 size-3 rounded-full animate-pulse border-2 " />
            <span>{t('components.stopPointForWinning')}</span>
          </div>
          <Section.Title className="text-white block lg:w-full ">
            {t('components.theNorthcoreTradingMission')}</Section.Title>
          <Section.Description className="text-white lg:w-4/5">
            {t('components.weAreALeadingCompany')}</Section.Description>
        </div>
        <motion.img
          src="/images/company.webp"
          alt={t('components.companyImage')}
          className="lg:w-1/2 w-full object-cover rounded-xl"
          width={600}
          height={400}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileTap={{ scale: 0.95 }}
          loading="lazy"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
        />
      </Section>
      <Section className="lg:pt-40 max-md:w-11/12 my-20 gap-10 flex    min-h-[70vh] rounded-2xl lg:p-10 max-md:flex-col bg-gray-50">
        <div className="space-y-2 gap-4 flex w-full flex-col    justify-center">
          <Section.Title className="">{t('components.howCanYouWin')}</Section.Title>
          <Section.Description className=" lg:w-4/5">
            {t('components.ourAdvancedTradingAlgorithmsAnalyze')}</Section.Description>
          <Button className="w-fit">{t('components.startTradingNow')}</Button>
        </div>
        <motion.img
          src="https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg"
          alt={t('components.companyImage')}
          className="lg:w-1/2 max-md:mt-10 w-full object-cover rounded-xl"
          width={600}
          height={400}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileTap={{ scale: 0.95 }}
          loading="lazy"
        />
      </Section>
      <Footer />
    </main>
  );
};

export default CompanyPage;
