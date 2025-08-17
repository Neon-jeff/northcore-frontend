'use client'

"use client";
import Section from "@/components/layout/sections";
import React from "react";
import Footer from "@/components/ui/footer";

const TermsOfServicePage = () => {
  return (
    <main className="bg-white">
      <Section className="lg:pt-20 max-md:w-11/12 mt-20 flex max-md:justify-center text-white home-banner min-h-[70vh] rounded-2xl lg:p-10 max-md:flex-col">
        <div className="space-y-2 gap-4 flex lg:w-1/2 flex-col justify-center">
          <div className="flex text-[.65rem] px-5 text-blue-100 items-center gap-2 p-2 bg-gray-800 w-fit rounded-full border border-blue-900">
            <div className="bg-blue-500 border-blue-200 size-3 rounded-full animate-pulse border-2 " />
            <span>Northcore Markets Terms</span>
          </div>
          <Section.Title className="text-white block lg:w-full ">
            Terms of Service
          </Section.Title>
          <Section.Description className="text-white lg:w-4/5">
            By accessing or using Northcore Markets, you agree to these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our platform.
          </Section.Description>
        </div>
      </Section>
      <Section className="mt-10 mx-auto bg-white rounded-2xl py-10 p-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using Northcore Markets, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our platform.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. User Responsibilities</h2>
          <p className="text-gray-600 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to provide accurate and complete information and to update it as necessary.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Investment Disclaimer</h2>
          <p className="text-gray-600 leading-relaxed">
            All information provided on Northcore Markets is for informational purposes only and does not constitute financial advice. Trading and investing in financial markets involves risk. You are solely responsible for your investment decisions.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Prohibited Activities</h2>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed">
            <li>Engaging in fraudulent or illegal activities</li>
            <li>Attempting to gain unauthorized access to the platform</li>
            <li>Disrupting or interfering with the security or operation of the platform</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content, trademarks, and data on Northcore Markets are the property of their respective owners and protected by intellectual property laws. You may not use, reproduce, or distribute any content without permission.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Modifications</h2>
          <p className="text-gray-600 leading-relaxed">
            Northcore Markets reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of the platform constitutes acceptance of the revised terms.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@northcoremarkets.com" className="text-blue-600 underline">support@northcoremarkets.com</a>.
          </p>
        </section>
        <footer className="text-center text-gray-400 text-xs mt-10">
          &copy; {new Date().getFullYear()} Northcore Markets. All rights reserved.
        </footer>
      </Section>
      <Footer />
    </main>
  );
};

export default TermsOfServicePage;
