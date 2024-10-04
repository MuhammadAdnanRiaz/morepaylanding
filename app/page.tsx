import Footer from "./components/Footer";
import OpenAccountCTA from "./components/OpenAccountCTA";
import Banner from "./components/Banner";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import HowP2PSection from "./components/Howp2pworks";

export default function Home() {
  return (
    <main className="font-display grid  items-center justify-items-center min-h-screen">
      <Banner />
      <Header />
      <LandingSection />
      <HowP2PSection />
      <OpenAccountCTA />
      <Footer />
    </main>
  );
}
