import Image from "next/image";
import Hero from "@/components/Hero";
import PlansSection from "@/components/PlaneSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import LightBoxImages from "@/components/LightBoxImages";
export default function Home() {
  return (
      <div className="overflow-x-hidden font-poppins">
        <Hero />
        <PlansSection />
        <FeaturesSection />
        <LightBoxImages />
        <Footer />
      </div>
  );
}
