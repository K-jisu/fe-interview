import HeroSection from "../widgets/home/ui/hero-section";
import FeaturesSection from "../widgets/home/ui/features-section";
import CtaSection from "../widgets/home/ui/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
}
