import { useEffect, useRef, useState } from "react";
import { QualifierProvider } from "../components/qualifier/QualifierProvider";
import QualifierModal from "../components/qualifier/QualifierModal";
import UrgencyBand from "../components/landing/UrgencyBand";
import Hero from "../components/landing/Hero";
import Marquee from "../components/landing/Marquee";
import FitSection from "../components/landing/FitSection";
import GapSection from "../components/landing/GapSection";
import CalculatorSection from "../components/landing/CalculatorSection";
import ProductSection from "../components/landing/ProductSection";
import HowSection from "../components/landing/HowSection";
import CompareSection from "../components/landing/CompareSection";
import ProofSection from "../components/landing/ProofSection";
import PromiseSection from "../components/landing/PromiseSection";
import FaqSection from "../components/landing/FaqSection";
import FinalSection from "../components/landing/FinalSection";
import StickyBar from "../components/landing/StickyBar";
import ProofTicker from "../components/landing/ProofTicker";
import Footer from "../components/ui/Footer";

export default function LandingPage() {
  /* the sticky bar shows after the hero CTA leaves view */
  const heroCta = useRef(null);
  const [barVisible, setBarVisible] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setBarVisible(true);
      return undefined;
    }
    const io = new IntersectionObserver((entries) => setBarVisible(!entries[0].isIntersecting), { threshold: 0 });
    io.observe(heroCta.current);
    return () => io.disconnect();
  }, []);

  return (
    <QualifierProvider>
      <UrgencyBand />
      <Hero ctaRef={heroCta} />
      <Marquee />
      <FitSection />
      <GapSection />
      <CalculatorSection />
      <ProductSection />
      <HowSection />
      <CompareSection />
      <ProofSection />
      <PromiseSection />
      <FaqSection />
      <FinalSection />
      <Footer />
      <StickyBar visible={barVisible} />
      <QualifierModal />
      <ProofTicker />
    </QualifierProvider>
  );
}
