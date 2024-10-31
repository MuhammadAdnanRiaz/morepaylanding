'use client'
import Footer from "./components/Footer";
import OpenAccountCTA from "./components/OpenAccountCTA";
import Banner from "./components/Banner";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import HowP2PSection from "./components/Howp2pworks";
import OpenAccountSection from "./components/OpenAccountSection";
import PaymentPartnerSection from "./components/PaymentPartnerSection";
import MoneyTransferSection from "./components/MoneyTransferSection";
import CurrencyConversionSection from "./components/CurrencyConversionSection";
import CustomerReviewSection from "./components/CustomerReviewSection";
import AvailableinCountrySection from "./components/AvailableCountrySection";
import { useEffect } from "react";
import { Observer } from 'tailwindcss-intersect';

export default function Home() {

  useEffect(() => {
    Observer.start()
  }, [])

  return (
    <main className="font-display grid  items-center justify-items-center min-h-screen">
      <Banner />
      <Header />
      <LandingSection />
      <PaymentPartnerSection />
      <HowP2PSection />
      <OpenAccountSection />
      <MoneyTransferSection />
      <CurrencyConversionSection />
      <OpenAccountCTA />
      <CustomerReviewSection />
      <AvailableinCountrySection />
      <Footer />
    </main>
  );
}
