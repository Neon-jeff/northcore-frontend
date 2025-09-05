import ReactQueryProvider from "@/components/providers/query-client";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Northcore Markets",
  description:
    "Northcore Markets - Copy trading, market data, and advanced trading tools for modern investors.",
  keywords: [
    "copy trading",
    "trading",
    "crypto",
    "stocks",
    "markets",
    "northcore",
    "social trading",
    "investment",
  ],
  authors: [
    { name: "Northcore Markets", url: "https://www.northcoremarket.com" },
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Northcore Markets",
    description:
      "Copy trading, market data, and advanced trading tools for modern investors.",
    url: "https://www.northcoremarket.com",
    siteName: "Northcore Markets",
    images: ["/images/home-desktop.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northcore Markets",
    description:
      "Copy trading, market data, and advanced trading tools for modern investors.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://www.northcoremarket.com"),
};

const fkGrotesk = localFont({
  src: [
    {
      path: "./fonts/fk-grotesk-light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/fk-grotesk-regular.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fk-grotesk",
});

const jarkaTa = localFont({
  src: [
    {
      path: "./fonts/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
      style: "semi-bold",
    },
  ],
  variable: "--font-fk-jakarta",
});

const willwaw = localFont({
  src: [
    {
      path: "./fonts/Williwaw-Book.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-willwaw",
});

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${fkGrotesk.variable} ${willwaw.variable} ${jarkaTa.variable}  antialiased text-gray-400 bg-gray-100/60 font-sans`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster />

        <Script
          id="zohosalesiq"
          dangerouslySetInnerHTML={{
            __html: `window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}</script><script id="zsiqscript" src="https://salesiq.zohopublic.com/widget?wc=siq0e7a4c7669e9a5b2c89003d86813686da8739f24f86187cd1d45cda894dcff95" defer>`
          }}
        ></Script>
      </body>
    </html>
  );
};

export default BaseLayout;
