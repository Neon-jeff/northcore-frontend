import ReactQueryProvider from "@/components/providers/query-client";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

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
