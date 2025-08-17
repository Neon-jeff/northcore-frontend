
import ReactQueryProvider from "@/components/providers/query-client";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Northcore Markets",
  description: "Northcore Markets - Copy trading, market data, and advanced trading tools for modern investors.",
  keywords: [
    "copy trading",
    "trading",
    "crypto",
    "stocks",
    "markets",
    "northcore",
    "social trading",
    "investment"
  ],
  authors: [{ name: "Northcore Markets", url: "https://northcoremarkets.com" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Northcore Markets",
    description: "Copy trading, market data, and advanced trading tools for modern investors.",
    url: "https://northcoremarkets.com",
    siteName: "Northcore Markets",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Northcore Markets Open Graph Image"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Northcore Markets",
    description: "Copy trading, market data, and advanced trading tools for modern investors.",
    images: ["/opengraph-image.png"]
  },
  icons: {
    icon: "/favicon.ico"
  },
  metadataBase: new URL("https://northcoremarkets.com")
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
        className={`${fkGrotesk.variable} ${willwaw.variable}  antialiased text-gray-400 bg-gray-100/60 font-sans`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default BaseLayout;
