"use client";
import Section from "@/components/layout/sections";
import React from "react";
import {motion} from "motion/react";
import { Button } from "@/components/ui";
import Footer from "@/components/ui/footer";

const CompanyPage = () => {
  return (
  <main className="bg-white">
          <Section className="lg:pt-40 max-md:w-11/12 mt-20 flex  min-h-[70vh] rounded-2xl lg:p-10 max-md:flex-col">
      <div className="space-y-2 gap-4 flex w-full flex-col justify-center">
        <Section.Title className="">Our Operation</Section.Title>
        <Section.Description className=" lg:w-4/5">
          We leverage cutting-edge technology and expert insights to optimize trading strategies and maximize returns for our clients.
          Our team of experienced traders and analysts work around the clock to identify market opportunities and trends. With a focus on risk management and sustainable growth, we&apos;ve developed proprietary algorithms that provide an edge in today&apos;s competitive markets. We believe in transparency and education, empowering our clients with the knowledge they need to make informed decisions about their investments.
        </Section.Description>
        <Button className="w-fit">
          Start Trading Now
        </Button>
      </div>
      <motion.img
        src="/images/what-is-neural.jpeg"
        alt="Company Image"
        className="lg:w-1/2 max-md:mt-10 w-full object-cover rounded-xl"
        width={600}
        height={400}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8,delay: 0.5 }}
        whileTap={{ scale: 0.95 }}
        loading="lazy"
      />
    </Section>
      <Section className="lg:pt-20 max-md:w-11/12 mt-20 flex text-white home-banner min-h-[70vh] rounded-2xl lg:p-10 max-md:flex-col">
      <div className="space-y-2 gap-4 flex w-full  flex-col justify-center">
        <div className="flex text-[.65rem] px-5 text-blue-100 items-center gap-2 p-2 bg-gray-800 w-fit rounded-full border border-blue-900">
          <div className="bg-blue-500 border-blue-200 size-3 rounded-full animate-pulse border-2 " />
          <span>Stop point for winning</span>
        </div>
        <Section.Title className="text-white block lg:w-full ">The Northcore Trading Mission</Section.Title>
        <Section.Description className="text-white lg:w-4/5">
          We are a leading company in the trading industry, committed to
          providing our clients with the best tools and resources for success.
        </Section.Description>
      </div>
      <motion.img
        src="/images/company.webp"
        alt="Company Image"
        className="lg:w-1/2 w-full object-cover rounded-xl"
        width={600}
        height={400}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8,delay: 0.5 }}
        whileTap={{ scale: 0.95 }}
        loading="lazy"
        initial={{  opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1,delay:1 } }}
      />
    </Section>
<Section className="lg:pt-40 max-md:w-11/12 my-20 gap-10 flex    min-h-[70vh] rounded-2xl lg:p-10 max-md:flex-col bg-gray-50">
      <div className="space-y-2 gap-4 flex w-full flex-col    justify-center">
        <Section.Title className="">How can you win</Section.Title>
        <Section.Description className=" lg:w-4/5">
          Our advanced trading algorithms analyze market trends and execute trades with precision, ensuring you never miss an opportunity. We provide real-time insights and analytics to help you make informed decisions. With our user-friendly platform, you can easily track your investments and manage your portfolio from anywhere, at any time.
        </Section.Description>
        <Button className="w-fit">
          Start Trading Now
        </Button>
      </div>
      <motion.img
        src="https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg"
        alt="Company Image"
        className="lg:w-1/2 max-md:mt-10 w-full object-cover rounded-xl"
        width={600}
        height={400}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8,delay: 0.5 }}
        whileTap={{ scale: 0.95 }}
        loading="lazy"
      />
    </Section>
    <Footer/>
  </main>
  );
};

export default CompanyPage;
