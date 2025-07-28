import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { homeConstants } from "../consts/home-constants";

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {homeConstants.ctaSection.title}
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed break-keep">
            {homeConstants.ctaSection.description}
          </p>

          <Link href={homeConstants.ctaSection.buttonLink}>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 h-auto bg-white text-slate-900 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 font-semibold"
            >
              {homeConstants.ctaSection.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            {homeConstants.ctaSection.trustIndicators.map((indicator) => (
              <div className="flex items-center gap-2" key={indicator.text}>
                <div className={`w-2 h-2 ${indicator.color} rounded-full`} />
                <span className="text-sm break-keep">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
