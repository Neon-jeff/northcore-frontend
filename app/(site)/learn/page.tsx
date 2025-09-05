/* eslint-disable @next/next/no-img-element */
"use client";
import Section from "@/components/layout/sections";
import React from "react";
import Footer from "@/components/ui/footer";
import { FundingOptions } from "@/components/home";
import { Button } from "@/components/ui";
import Globe from "@/components/ui/globe";
import Link from "next/link";

const CompanyPage = () => {
  return (
    <main className="bg-white">
      <Section className="lg:pt-20 lg:w-full justify-between  pt-20 flex max-md:justify-center text-white bg-black min-h-screen lg:p-10  max-md:flex-col">
        <div className="space-y-2  gap-4 flex lg:w-1/2 lg:pl-40  flex-col justify-center">
          <div className="flex text-[.65rem] px-5 text-blue-100 items-center gap-2 p-2 bg-gray-800 w-fit rounded-full border border-blue-900">
            <div className="bg-blue-500 border-blue-200 size-3 rounded-full animate-pulse border-2 " />
            <span>A new winning strategy</span>
          </div>
          <Section.Title className="text-white block lg:text-6xl lg:w-full ">
            How to leverage copy trading in today&apos;s market
          </Section.Title>
          <Section.Description className="text-white lg:w-4/5">
            Copy trading allows you to replicate the trades of experienced
            investors, making it easier to navigate the complexities of the
            market. By following successful traders, you can learn their
            strategies and gain insights into their decision-making processes.
            This approach not only saves time but also helps you avoid common
            pitfalls. With our platform, you can easily find and follow top
            traders, giving you the opportunity to benefit from their expertise
            and improve your own trading skills.
          </Section.Description>
          <Button className="w-fit">Start Trading</Button>
        </div>
   
            <img
          src="/images/learn.png"
          alt="learn copy trading"
          className="lg:w-1/3 lg:h-1/2 lg:mt-20 mt-10 max-md:w-full"
        />

      </Section>
      <Section className="mt-10">
           <Section.Title className=" block py-10  ">
            How to start copy trading with Northcore
          </Section.Title>
         <FundingOptions />
         <div className="flex flex-col items-center lg:mt-20 mt-5">
          <div className="flex flex-col items-center text-center">
            <Section.Title className=" block py-10  ">
             Start your copy trading journey from anywhere
            </Section.Title>
            <Section.Description className="lg:w-1/2 text-gray-600">
              Neural Trades is a leading copy trading platform that connects you
              with top traders and provides the tools you need to succeed in the
              market. With our user-friendly interface, you can easily browse
              through a list of experienced traders, view their performance
              metrics, and choose the ones that align with your investment goals.
              Our platform also offers advanced risk management features,
              allowing you to set stop-loss limits and diversify your portfolio.
              Whether you&apos;re a beginner or an experienced trader, Neural Trades
              provides the resources and support you need to make informed
              decisions and achieve your financial goals.
            </Section.Description>
            <Link href={'/auth/signup'}>
            <Button className="mt-10">Get Started</Button>
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
