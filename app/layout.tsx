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
        <Script id="smartsupp-chat" strategy="afterInteractive">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '5881a49d91019d77ed8a3e76e6ed22b4a4d0f2a4';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';
              s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
      </body>
    </html>
  );
};

export default BaseLayout;
