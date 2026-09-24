import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "sonner";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0b0c0f] text-white antialiased">
        <Navbar />

        {children}

        <Footer />

        <Toaster
          position="bottom-right"
          theme="dark"
          richColors
        />
      </body>
    </html>
  );
}