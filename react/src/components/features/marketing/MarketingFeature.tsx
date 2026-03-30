"use client";

import { useRef } from "react";
import MarketingFeatureCard from "./MarketingFeatureCard";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
};

const MarketingFeature = ({ features }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section
      className="pt-[90px] pb-[83px] 2xl:pt-[120px] 2xl:pb-[113px] bg-theme"
      ref={containerRef}
    >
      <div className="inner-container">
        <div>
          <div>
            <div className="grid gap-[60px] grid-cols-1 md:grid-cols-[repeat(2,310px)] lg:grid-cols-[repeat(3,240px] xl:grid-cols-[repeat(3,300px)] justify-between">
              {features.map((feature, index) => (
                <div
                  className="has_fade_anim"
                  data-fade-from="left"
                  data-delay={0.15 * (index + 1)}
                  key={`feature-${index}`}
                >
                  <MarketingFeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFeature;
