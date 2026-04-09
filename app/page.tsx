import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Method from "@/components/Method";
import Pizze from "@/components/Pizze";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import DeliveryBanner from "@/components/DeliveryBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Story />
      <Method />
      <Pizze />
      <Gallery />
      <Contact />
      <DeliveryBanner />
      <Footer />
    </main>
  );
}
