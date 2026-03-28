"use client";
import React from 'react'
import { useTranslation } from "react-i18next";

const ReachUsPage = () => {
    const { t } = useTranslation();
  return (
    <div>{t('components.reachuspage')}</div>
  )
}

export default ReachUsPage