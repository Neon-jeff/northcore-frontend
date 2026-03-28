"use client";
/* eslint-disable @next/next/no-img-element */
import { Attributes } from "@/components/home";
import { Hero, Section } from "@/components/layout";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import { motion } from "motion/react";
import Reviews from "@/components/ui/reviews";
import Awards from "@/components/home/awards";
import StatsCount from "@/components/ui/statscount";
import { faqs, market_domains, strategies } from "@/mock";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
  return (
    <main className="font-sans lg:space-y-20  space-y-10 relative bg-white text-gray-500 lg:text-gray-300">
      <Section className="  max-md:w-full bg-black lg:w-full mx-auto pt-28 px-2 max-md:translate-y-5 max-md:rounded-2xl  min-h-screen   relative overflow-clip z-0">
        {/* shader gradeint */}

        {/* Hero section */}
        <Hero.Root className="flex max-lg:flex-col items-center  gap-5 w-full h-full  lg:gap-10 ">
          <Hero.TextContent
            className=" text-gray-200 font-bold lg:p-10 py-16 lg:pt-40 lg:w-2/3 lg:ml-32  rounded-3xl capitalize px-2 max-md:mt-10 h-full  z-50 relative"
            title={t('components.industryLeadingBrokerForReal')}
            description={t('components.leadingPlatformNoTimeLimits')}
            ctaPrimaryTitle={t('components.beginYourJourney')}
            ctaPrimaryLink="/auth/signup"
            ctaSecondaryTitle={t('components.learnHere')}
            ctaSecondaryLink="/learn"
          >
            <div className="text-gray-200"></div>
          </Hero.TextContent>
          <Hero.SecondaryContent className="lg:w-1/2 w-full">
            <div className="text-sm relative  w-full  rounded-2xl ">
              <Image
                src={"/images/home-desktop.webp"}
                alt={t('components.neuralTradesImageHeroBackground')}
                className="w-full  h-full object-contain max-md:object-cover "
                width={400}
                height={400}
              />
            </div>
          </Hero.SecondaryContent>
        </Hero.Root>
        <div className="absolute  left-0 right-0 h-[100px] rounded-full lg:h-1/3 opacity-80 blur-[1000px]  bg-sky-600/80 lg:left-0 lg:right-0 lg:-bottom-10 -bottom-10 max-lg:z-[-1]  "></div>
      </Section>

      <Section className="lg:mt-20">
        <Section.Title className="lg:w-2/3 ">
          {t('components.awardWinningPlatform')}<span className="text-sm lg:w-1/2  text-gray-700 block pt-3">
            {t('components.recognizedForExcellenceInInnovation')}</span>
        </Section.Title>
        <Section.Content className="mt-10">
          <Awards />
          <div className="text-gray-700">
             <StatsCount/>
          </div>
        </Section.Content>
      </Section>


      <Section className=" flex-col gap-10 max-md:-mt-10  ">
        <Section.DescriptionContainer className="space-y-10">
          <div className="space-y-5">
            <Section.Title className="lg:w-2/3 ">
              <span className="text-sm text-gray-400 block pb-2">
                {t('components.northcoreMarketSuite')}</span>
              {t('components.upgradeYourTradingExperience')}<span className="text-sm lg:w-1/2 text-gray-700 block pt-3">
                {t('components.exploreOurComprehensiveSuiteOf')}</span>
            </Section.Title>
          </div>
          <Attributes />
        </Section.DescriptionContainer>
     
      </Section>

        <Section className=" flex-col gap-10  ">
        <Section.DescriptionContainer className="space-y-10">
          <div className="space-y-5">
            <Section.Title className="lg:w-2/3 ">
              <span className="text-sm text-gray-400 block pb-2">
                {t('components.unlimitedMarketDomains')}</span>
              {t('components.winInMultipleMarketsPlatforms')}<span className="text-sm lg:w-1/2 text-gray-700 block pt-3">
                {t('components.tradeADiverseRangeOf')}</span>
            </Section.Title>
          </div>
        </Section.DescriptionContainer>
        <Section.Content className="flex gap-10 max-md:flex-col mt-20">
          {
            market_domains.map((item,index)=>(
              <motion.div 
              className="flex flex-col gap-8 lg:gap-5" 
              key={index}
              initial={{opacity:0,y:200}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:index*0.3}}
              viewport={{once:true}}
              >
             <Image
               src={item.image}
               alt={t('components.neuralTradesImageHeroBackground')}
               className=" w-full h-full max-md:mt-5 max-md:object-contain  object-cover rounded-lg"
               width={200}
               height={200}
             />
             <div className=" space-y-5 ">
               <h1 className="text-2xl font-bold text-black">{t(item.name)}</h1>
               <p className="text-sm text-gray-600">{t(item.description)}</p>
             </div>
           </motion.div>
            ))
          }
        </Section.Content>
      </Section>

      <Section className=" flex-col gap-10 bg-black py-20 lg:w-full text-white ">
        <Section.DescriptionContainer className="space-y-10">
          <div className="space-y-5">
            <Section.Title className="lg:w-1/2 text-center mx-auto text-white">
              {t('components.learnOurWinningStrategies')}</Section.Title>
            <Section.Description className="lg:w-1/2 text-center mx-auto text-gray-300">
              {t('components.discoverTheProvenTechniquesAnd')}</Section.Description>
          </div>

        </Section.DescriptionContainer>
        <Section.Content className="lg:space-y-20 mt-20 gap-5 w-full  lg:px-32 ">
         {
          strategies.map((item,index)=>(
               <motion.div 
               className={cn("flex max-md:flex-col lg:gap-20",index%2===0 && "flex-row-reverse")} 
               key={index}
               initial={{opacity:0,y:200}}
               whileInView={{opacity:1,y:0}}
               transition={{duration:0.5,delay:index*0.3}}
               viewport={{once:true}}
               >
              <img
                src={item.image}
                alt={t('components.neuralTradesImageHeroBackground')}
                className="lg:w-1/2 w-full h-full max-md:mt-5 max-md:h-[400px]  object-cover rounded-lg"
                width={200}
                height={200}
              />
               <div className="lg:w-1/2 space-y-5 mt-20">
                <h1 className="text-2xl font-bold text-white">{t(item.title)}</h1>
                <p className="text-sm">{t(item.description)}</p>
              </div>
            </motion.div>
          ))
         }
        </Section.Content>
      </Section>

      <Section className="lg:w-full">
        <Section.Content className="mt-10">
          <Reviews />
          <div className="text-black space-y-8 mt-20">
            <div className="text-center space-y-3">
              <h1 className="text-4xl font-bold">{t('components.frequentlyAskedQuestions')}</h1>
            <p>{t('components.ifYouHaveAnyOther')}</p>
            </div>
            <Accordion type="single" collapsible className="w-full lg:w-2/3 mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{t(faq.question)}</AccordionTrigger>
                  <AccordionContent>{t(faq.answer)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section.Content>
      </Section>
      <Footer />
    </main>
  );
}
