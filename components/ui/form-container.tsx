"use client";
import { cn } from '@/lib/utils';
import React from 'react'
import { LogoSmall } from '../logo';
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from './language-switcher';


interface FormContainerProps {
    className?: string;
    children: React.ReactNode;
    title: string;
    description: string;
}
const FormContainer = ({ className, children, title, description }: FormContainerProps) => {
    const { t } = useTranslation();
  return (
    <div className={cn('bg-white relative place-items-center lg:w-1/2  rounded-2xl lg:p-10 p-3 py-10 min-h-96 mx-auto space-y-5', className)}>
      <LanguageSwitcher className="absolute top-4 right-4" />
      <Link href={'/'} className='flex flex-col items-center gap-2 text-primary font-bold '>

        <LogoSmall/>
        <p>{t('components.northcoreMarkets')}</p>
      </Link>
        <div className='place-self-start space-y-1 '>
            <h1 className="lg:text-xl text-xl text-zinc-800 font-bold">{title}</h1>
            <p className="lg:text-xs text-xs text-zinc-500">{description}</p>
        </div>
      {children}
    </div>
  )
}

export default FormContainer