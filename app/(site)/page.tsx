import { Attributes, FundingOptions } from "@/components/home";
import { Hero, Section } from "@/components/layout";
import { BentoGrid } from "@/components/ui";
import Footer from "@/components/ui/footer";
import Globe from "@/components/ui/globe";
import { IconDevicesCog, IconGraph } from "@tabler/icons-react";
import { Globe2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans lg:space-y-20  space-y-10 relative bg-white text-gray-500 lg:text-gray-300">
      <Section className="  max-md:w-[96vw] mx-auto  px-2 max-md:translate-y-5 max-md:rounded-2xl  pt-10 lg:pt-32  relative overflow-clip z-0">
        {/* shader gradeint */}

        {/* Hero section */}
        <Hero.Root className="flex max-lg:flex-col gap-5 w-full justify-center lg:h-[75vh]  overflow-clip lg:gap-10 relative max-x">
          <Hero.TextContent
            className="  text-zinc-700 bg-zinc-50 lg:p-10 py-16 lg:pt-20 lg:w-1/2  rounded-3xl  px-2 max-md:mt-10 h-full  z-50 relative"
            title="Guiding ambitious earners to profits options"
            description="   Join our community of traders and elevate your trading game with advanced tools and insights."
            ctaPrimaryTitle="Get started"
            ctaPrimaryLink="/auth/signup"
            ctaSecondaryTitle={"Learn more"}
            ctaSecondaryLink="/learn-more"
          ></Hero.TextContent>
          <Hero.SecondaryContent className="lg:w-1/2  z-50 ">
            <div className="text-sm relative overflow-clip w-full h-full rounded-2xl ">
              <Image
                src={"/images/hero.jpg"}
                alt="Neural trades image hero background"
                className="w-full h-full max-md:h-[400px]  object-cover "
                width={400}
                height={400}
              />
            </div>
          </Hero.SecondaryContent>
        </Hero.Root>
        <div className="absolute max-md:hidden hidden left-0 right-0 h-[100px] rounded-full lg:h-1/3 blur-[200px]  bg-gray-300/50 lg:left-1/10 lg:right-1/10 lg:-bottom-10 -bottom-10 max-lg:z-[-1]  "></div>
      </Section>

      <Section className=" flex-col gap-10 ">
        <Section.DescriptionContainer className="space-y-10">
          <div className="space-y-5">
            <Section.Title className="lg:w-2/3">
              Build your portfolio from a single app, designed for the
              forward-thinking investor.
            </Section.Title>
          </div>
          <Attributes />
        </Section.DescriptionContainer>
        <Section.Content className="space-y-5 mt-20 w-full ">
          <div className="home-banner lg:min-h-[600px]  items-center max-md:flex-col gap-5 rounded-3xl flex justify-between lg:p-10 py-10 p-5">
            <div>
              <h1 className="text-4xl text-white">
                Trade Anywhere, <br /> Win Anytime
              </h1>
              <p className="text-white/80 mt-4 max-w-md">
                Access global markets and trade with confidence using our
                powerful, intuitive platform designed for success.
              </p>

              <div className="space-y-4 mt-10">
                <p className="border bg-white/10 border-gray-700 backdrop-filter backdrop-blur-md text-xs flex items-center gap-2  p-5 rounded-md">
                  <Globe2 /> Globally Accessible
                </p>
                <p className="border bg-white/10 border-gray-700 backdrop-filter backdrop-blur-md text-xs flex items-center gap-2  p-5  rounded-md">
                  <IconGraph /> Diverse experts with sound experience
                </p>
              </div>
            </div>
            <Globe />
          </div>
        </Section.Content>
      </Section>

      <Section className=" flex-col gap-10 ">
        <Section.DescriptionContainer className="space-y-10">
          <div className="space-y-5">
            <Section.Title className="lg:w-1/2">
              How to start with us
            </Section.Title>
          </div>
          <FundingOptions />
        </Section.DescriptionContainer>
        <Section.Content className="space-y-5 mt-20 w-full ">
          <div className="home-banner2 min-h-[400px] h-full rounded-3xl"></div>
        </Section.Content>
      </Section>

      <Section className="lg:w-3/4">
        <Section.DescriptionContainer>
          <Section.Title>
            Market centered solutions found nowhere else
          </Section.Title>
        </Section.DescriptionContainer>
        <Section.Content className="mt-10">
          <BentoGrid>
            <BentoGrid.Item
              title="Advanced Trading Tools"
              description="Utilize cutting-edge tools for informed trading decisions."
              Icon={IconDevicesCog}
              className="h-96 lg:col-span-2"
              image="https://images.pexels.com/photos/7172830/pexels-photo-7172830.jpeg"
            ></BentoGrid.Item>

            <BentoGrid.Item
              title="Demo Trading"
              description="Practice trading strategies with our demo accounts."
              Icon={IconDevicesCog}
              className="h-96"
              image="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg"
            ></BentoGrid.Item>

            <BentoGrid.Item
              title="Community Support"
              description="Join a community of traders for shared insights and strategies."
              Icon={IconDevicesCog}
              className="h-96"
              image="/images/what-is-neural.jpeg"
            ></BentoGrid.Item>

            <BentoGrid.Item
              title="Trade Anywhere"
              description="Trade on the go with our mobile-friendly platform."
              Icon={IconDevicesCog}
              className="h-96 lg:col-span-2"
              image="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg"
            ></BentoGrid.Item>
          </BentoGrid>
        </Section.Content>
      </Section>
      <Footer/>
    </main>
  );
}
