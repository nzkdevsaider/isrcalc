import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/Layout";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import InfoISR from "@/components/sections/InfoISR";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISRCalc",
  description: "Calculadora de impuesto sobre la renta de Panamá.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Header />
          <aside className="flex flex-col justify-center">
            <InfoISR />
          </aside>
          {children}
          <aside/>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
