import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeConstants } from "../consts/home-constants";

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 타이틀 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 break-keep">
              {homeConstants.featuresSection.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto break-keep">
              {homeConstants.featuresSection.description}
            </p>
          </div>

          {/* 카드 목록 */}
          <div className="grid md:grid-cols-3 gap-8">
            {homeConstants.featuresSection.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.title} href={feature.href} className="group">
                  <Card className="h-full border-0 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                      </div>

                      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed mb-4 break-keep">
                        {feature.description}
                      </p>

                      <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-200">
                        Get started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
