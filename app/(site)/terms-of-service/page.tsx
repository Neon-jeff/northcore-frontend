"use client";

import Section from "@/components/layout/sections";
import React from "react";
import Footer from "@/components/ui/footer";
import { useTranslation } from "react-i18next";

const TermsOfServicePage = () => {
    const { t } = useTranslation();
  return (
    <main className="bg-white">
      <Section className="lg:pt-20 max-md:w-11/12 mt-20 flex max-md:justify-center text-white home-banner min-h-[70vh] rounded-2xl lg:p-10 max-md:flex-col">
        <div className="space-y-2 gap-4 flex lg:w-1/2 flex-col justify-center">
          <div className="flex text-[.65rem] px-5 text-blue-100 items-center gap-2 p-2 bg-gray-800 w-fit rounded-full border border-blue-900">
            <div className="bg-blue-500 border-blue-200 size-3 rounded-full animate-pulse border-2 " />
            <span>{t('components.northcoreMarketsTerms')}</span>
          </div>
          <Section.Title className="text-white block lg:w-full ">
            {t('components.termsOfService')}</Section.Title>
          <Section.Description className="text-white lg:w-4/5">
            {t('components.byAccessingOrUsingNorthcore1')}</Section.Description>
        </div>
      </Section>
      <Section className="mt-10 mx-auto bg-white rounded-2xl py-10 p-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.1AcceptanceOfTerms')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t('components.byAccessingOrUsingNorthcore')}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.2UserResponsibilities')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t('components.youAreResponsibleForMaintaining')}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.3InvestmentDisclaimer')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t('components.allInformationProvidedOnNorthcore')}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.4ProhibitedActivities')}</h2>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed">
            <li>{t('components.engagingInFraudulentOrIllegal')}</li>
            <li>{t('components.attemptingToGainUnauthorizedAccess')}</li>
            <li>{t('components.disruptingOrInterferingWithThe')}</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.5IntellectualProperty')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t('components.allContentTrademarksAndData')}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.6Modifications')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t('components.northcoreMarketsReservesTheRight')}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.7Contact')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t('components.ifYouHaveAnyQuestions1')}<a href="mailto:support@northcoremarkets.com" className="text-blue-600 underline">{t('components.supportnorthcoremarketscom')}</a>.
          </p>
        </section>
        <footer className="text-center text-gray-400 text-xs mt-10">
          {t('components.copy')}{new Date().getFullYear()} {t('components.northcoreMarketsAllRightsReserved')}</footer>
      </Section>
      <Footer />
    </main>
  );
};

export default TermsOfServicePage;
