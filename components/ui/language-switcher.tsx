"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import { CircleFlag } from "react-circle-flags";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", name: "English", country: "us" },
  { code: "es", name: "Español", country: "es" },
  { code: "de", name: "Deutsch", country: "de" },
  { code: "ja", name: "日本語", country: "jp" },
  { code: "zh", name: "中文", country: "cn" },
  { code: "fr", name: "Français", country: "fr" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn("rounded-full flex items-center gap-2 px-3 hover:bg-zinc-100 transition-all duration-300", className)}
        >
          <CircleFlag countryCode={currentLanguage.country} height={18} width={18} className="rounded-full shadow-sm" />
          <span className="text-xs font-bold text-zinc-600 uppercase">
            {currentLanguage.code}
          </span>
          <span className="sr-only">{t('components.changeLanguage')}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] border-none shadow-2xl bg-white p-0 overflow-hidden rounded-[1rem]">
        <div className="p-5 pb-6 sm:p-7 sm:pb-8">
          <DialogHeader className="mb-5 sm:mb-6">
            <DialogTitle className="text-xl font-bold tracking-tight text-zinc-800">
              {t('components.selectLanguage')}
            </DialogTitle>
            <p className="text-[0.7rem] sm:text-xs text-zinc-500 font-medium">
                {t('components.chooseYourPreferredLanguageFor')}
            </p>
          </DialogHeader>
          
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            {languages.map((lang, index) => {
              const isActive = i18n.language === lang.code;
              return (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03, duration: 0.2 }}
                  onClick={() => changeLanguage(lang.code)}
                  className={cn(
                    "flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-200 group relative",
                    isActive 
                      ? "bg-primary text-white border-primary shadow-sm" 
                      : "bg-white hover:bg-zinc-50 border-zinc-100 hover:border-zinc-200 text-zinc-700"
                  )}
                >
                  <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                    <div className="relative flex-shrink-0">
                      <CircleFlag countryCode={lang.country} height={18} width={18} className="sm:h-5 sm:w-5 shadow-xs rounded-full" />
                    </div>
                    <span className="font-semibold text-[0.7rem] sm:text-[0.75rem] tracking-tight truncate">
                      {lang.name}
                    </span>
                  </div>
                  
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white/20 p-0.5 rounded-full relative z-10"
                    >
                      <Check className="h-3 w-3 text-white" />
                    </motion.div>
                  )}

                  {!isActive && (
                    <div className="opacity-0 group-hover:opacity-40 transition-opacity duration-200 text-zinc-400">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

