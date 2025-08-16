import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "North Core Platform Account",
  description: "Seamlessly create and manage your account with Neural trades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
}
