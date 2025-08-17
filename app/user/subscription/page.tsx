
'use client'
import ExpertCard from '@/components/experts/expert-card'
import { useUserExperts } from '@/hooks/subscriptions'
import React from 'react'

const SubScriptionPage = () => {
  const experts = useUserExperts()
  return (
    <div className='lg:w-11/12 w-full py-10 p-2 space-y-5 lg:min-h-5/6 max-md:min-h-screen rounded-2xl bg-white lg:p-10 '>
        <h1 className='text-2xl font-bold text-black'>Your Subscriptions</h1>
        <p className='text-sm text-gray-600'>Manage your expert subscriptions</p>
      <div className='grid lg:grid-cols-3'>
        {experts.map(expert => (
          <ExpertCard key={expert.id} {...expert} showProfitGained />
        ))}
      </div>
    </div>
  )
}

export default SubScriptionPage