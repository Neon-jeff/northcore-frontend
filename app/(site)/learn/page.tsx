"use client";
import Section from "@/components/layout/sections";
import React from "react";
import Footer from "@/components/ui/footer";
import { FundingOptions } from "@/components/home";
import { Button } from "@/components/ui";

const CompanyPage = () => {
  return (
    <main className="bg-white">
      <Section className="lg:pt-20 max-md:w-11/12 mt-20 flex max-md:justify-center text-white home-banner min-h-[70vh] rounded-2xl lg:p-10 max-md:flex-col">
        <div className="space-y-2 gap-4 flex lg:w-1/2  flex-col justify-center">
          <div className="flex text-[.65rem] px-5 text-blue-100 items-center gap-2 p-2 bg-gray-800 w-fit rounded-full border border-blue-900">
            <div className="bg-blue-500 border-blue-200 size-3 rounded-full animate-pulse border-2 " />
            <span>The art of copy trading</span>
          </div>
          <Section.Title className="text-white block lg:w-full ">
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
        </div>

      </Section>
      <Section className="mt-10">
           <Section.Title className=" block py-10  ">
            How to start copy trading with Northcore
          </Section.Title>
         <FundingOptions />
         <Button className="mt-20">Start Copy Trading</Button>
      </Section>
      <Footer />
    </main>
  );
};

export default CompanyPage;
