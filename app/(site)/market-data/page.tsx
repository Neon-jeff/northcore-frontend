'use client'
import MarketItem from '@/components/home/markets';
import { Section } from '@/components/layout'
import { homeSymbols } from '@/mock';
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
    <Section className='lg:pt-10 bg-white min-h-[650px] '>
         <div className="grid grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {
              homeSymbols.map((symbol, index) => (
                <MarketItem key={index} symbol={symbol} />
              ))
            }
          </div>
          <div className='h-[600px] mt-10'>
                   <SymbolOverviewNoSSR height={600} dateFormat='dd-MM-yyyy' autosize scaleMode='Normal' symbols={[['BTC'], ['AAPL'], ['ETH'], ['AUD'], ['USDT'],['TESLA'],['NEXO'],['PI']]} />

          </div>
    </Section>
   </main>
  )
}

export default MarketPage