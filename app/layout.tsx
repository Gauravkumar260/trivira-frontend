import React from 'react';
// 1. Import all three fonts
import { Rubik, DM_Sans, Montserrat } from "next/font/google"; 
import "./globals.css";

// ... existing imports ...
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop"; 
import ScrollToTopButton from "@/components/ScrollToTopButton";
import type { Metadata } from "next";

// 2. Configure them with variables
const rubik = Rubik({ 
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "700"]
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"]
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"] // Loading the weights used in Figma
});

export const metadata: Metadata = {
  title: "Trivira - Frontend",
  description: "Nutraceuticals and Plant-Based Products",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* 3. Add variables to the body class so Tailwind can see them */}
      <body className={`${rubik.variable} ${dmSans.variable} ${montserrat.variable} font-sans`}>
        <ScrollToTop /> 
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}