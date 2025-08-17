'use client'
import { Section } from '@/components/layout'
import dynamic from 'next/dynamic';
import React from 'react'
const SymbolOverviewNoSSR = dynamic(
    () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
    {
        ssr: false,
    }
);

const MarketPage = () => {
  return (
   <main className='bg-white min-h-screen pb-20'>
    <Section className='lg:pt-40 pt-20 bg-white'>
      <div className='flex justify-between max-md:flex-col gap-4'>
           <Section.Title>The Market Today</Section.Title>
      <Section.Description className='max-md:text-xs ml-4'>
        Stay updated with latest market trends, insights, analytics, comprehensive data, real-time indicators, economic forecasts, sector performance, global influences, trading opportunities, financial news and expert analysis for informed decisions.
      </Section.Description>
      </div>
    </Section>
    <Section className='lg:pt-10 bg-white h-[600px] rounded-2xl overflow-clip'>
       <SymbolOverviewNoSSR dateFormat='dd-MM-yyyy' autosize scaleMode='Normal' symbols={[['BTC'], ['AAPL'], ['ETH'], ['AUD'], ['USDT'],['TESLA'],['NEXO'],['PI']]} />
    </Section>
   </main>
  )
}

export default MarketPage