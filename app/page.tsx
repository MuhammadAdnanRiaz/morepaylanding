import Image from "next/image";
import Footer from "./components/Footer";
import OpenAccountCTA from "./components/OpenAccountCTA";

export default function Home() {
  return (
    <main className="font-display grid  items-center justify-items-center min-h-screen">
      <OpenAccountCTA />
      <Footer />
    </main>
  );
}
