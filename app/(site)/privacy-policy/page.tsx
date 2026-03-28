"use client";
import Section from "@/components/layout/sections";
import React from "react";
import Footer from "@/components/ui/footer";
import { useTranslation } from "react-i18next";

const PrivacyPolicyPage = () => {
    const { t } = useTranslation();
	return (
		<main className="bg-white">
			<Section className="lg:pt-20 max-md:w-11/12 mt-20 flex max-md:justify-center text-white home-banner min-h-[70vh] rounded-2xl lg:p-10 max-md:flex-col">
				<div className="space-y-2 gap-4 flex lg:w-1/2 flex-col justify-center">
					<div className="flex text-[.65rem] px-5 text-blue-100 items-center gap-2 p-2 bg-gray-800 w-fit rounded-full border border-blue-900">
						<div className="bg-blue-500 border-blue-200 size-3 rounded-full animate-pulse border-2 " />
						<span>{t('components.northcoreMarketsPrivacy')}</span>
					</div>
					<Section.Title className="text-white block lg:w-full ">
						{t('components.privacyPolicy')}</Section.Title>
					<Section.Description className="text-white lg:w-4/5">
						{t('components.yourPrivacyIsImportantTo')}</Section.Description>
				</div>
			</Section>
			<Section className="mt-10  py-10 bg-white rounded-2xl  p-8">
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.1InformationWeCollect')}</h2>
					<p className="text-gray-600 leading-relaxed">
						{t('components.weCollectInformationYouProvide')}</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.2HowWeUseYour')}</h2>
					<p className="text-gray-600 leading-relaxed">
						{t('components.weUseYourInformationTo')}</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.3DataSharingAndDisclosure')}</h2>
					<p className="text-gray-600 leading-relaxed">
						{t('components.weDoNotSellYour')}</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.4CookiesAndTrackingTechnologies')}</h2>
					<p className="text-gray-600 leading-relaxed">
						{t('components.weUseCookiesAndSimilar')}</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.5DataSecurity')}</h2>
					<p className="text-gray-600 leading-relaxed">
						{t('components.weImplementIndustrystandardSecurityMeasures')}</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.6YourRightsAndChoices')}</h2>
					<p className="text-gray-600 leading-relaxed">
						{t('components.youHaveTheRightTo')}</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.7ChangesToThisPolicy')}</h2>
					<p className="text-gray-600 leading-relaxed">
						{t('components.weMayUpdateThisPrivacy')}</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">{t('components.8ContactUs')}</h2>
					<p className="text-gray-600 leading-relaxed">
						{t('components.ifYouHaveAnyQuestions')}<a href="mailto:support@northcoremarkets.com" className="text-blue-600 underline">{t('components.supportnorthcoremarketscom')}</a>.
					</p>
				</section>
				<footer className="text-center text-gray-400 text-xs mt-10">
					{t('components.copy')}{new Date().getFullYear()} {t('components.northcoreMarketsAllRightsReserved')}</footer>
			</Section>
			<Footer />
		</main>
	);
};

export default PrivacyPolicyPage;
