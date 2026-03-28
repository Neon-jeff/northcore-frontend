"use client";
import React from 'react'
import { useTranslation } from "react-i18next";

const ExpertDetails = () => {
    const { t } = useTranslation();
  return (
    <div>{t('components.expertdetails')}</div>
  )
}

export default ExpertDetails