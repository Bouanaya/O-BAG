import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Promotion from "@/components/Promotion";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "O-BAG ",
  description: "Online Bag Store ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}`}
      >
        
        <Promotion />
        <Header />
        <main className="flex-1">{children}</main>
        <footer />
      </body>
    </html>
  );
}
