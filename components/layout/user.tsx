'use client'
import React, { useEffect } from 'react'
import SideBar from '../ui/side-bar';
import DashboardNav from '../ui/dashboard-nav';
import { useGetUser } from '@/hooks/authentication';
import { useUserStore } from '@/store/user';

interface UserLayoutProps {
  children: React.ReactNode;
}
const UserLayout = ({ children }: UserLayoutProps) => {
  const {data,isLoading,isError} = useGetUser()
  const {setUser} = useUserStore()
  useEffect(()=>{
    if(!isLoading && data){
      setUser(data)
    }
  },[isLoading,data])
  if(isLoading || isError){
    return null
  }
  return (
    <div className='flex max-lg:flex-col bg-gray-50 w-screen text-xs lg:px-5 lg:p-10 px-2 gap-8 relative '>
      <DashboardNav/>
      <SideBar/>
      <div className='lg:w-[96%] w-full   min-h-screen mt-20 lg:mt-16'>
        {children}
      </div>
    </div>
  )
}

export default UserLayout