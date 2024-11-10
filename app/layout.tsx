import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Toaster as Toasterr } from "@/components/ui/toaster"

import localFont from "next/font/local";
import "./globals.css";
import "../node_modules/flag-icons/css/flag-icons.min.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Morepay",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
        <Toasterr />
      </body>
    </html>
  );
}
