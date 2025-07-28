import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeConstants } from "../consts/home-constants";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* 배경 */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            className="mx-auto"
            src="/code-icon.png"
            alt="heading icon"
            width={120}
            height={100}
          />

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            {homeConstants.heroSection.title1}
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              {homeConstants.heroSection.title2}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium break-keep">
            {homeConstants.heroSection.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={homeConstants.heroSection.buttonLink}>
              <Button
                size="lg"
                className="text-lg px-8 py-4 h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
              >
                {homeConstants.heroSection.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
