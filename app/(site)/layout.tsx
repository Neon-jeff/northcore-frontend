import type { Metadata } from "next";
import "../globals.css";
import Nav from "@/components/ui/nav";


export const metadata: Metadata = {
  title: "North Core Markets",
  description: "Copy trading broker for ambitious winners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
    >
      <Nav />
      {children}
    </main>
  );
}
