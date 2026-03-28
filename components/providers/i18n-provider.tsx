"use client";

import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { detectLanguageFromIP } from "@/utils/i18n/geoip";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleDetection = async () => {
      // Check if language was already set manually or by other detectors
      const savedLng = localStorage.getItem("i18nextLng");
      if (!savedLng) {
        const detectedLng = await detectLanguageFromIP();
        if (detectedLng && detectedLng !== i18n.language) {
          i18n.changeLanguage(detectedLng);
        }
      }
    };

    handleDetection();
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
