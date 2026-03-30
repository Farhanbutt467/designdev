"use client";

import { convertWithBrSpan } from "@/lib/helper/converter";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import SeoFeatureCard from "./SeoFeatureCard";
import SeoSectionTitle from "@/components/sectionTitle/SeoSectionTitle";

type Props = {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: {
      light: string;
      dark: string;
    };
  }[];
};

const SeoFeatures = ({ title, description, features }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="inner-container" ref={containerRef}>
      <div className="section-spacing-top">
        <div className="grid items-center gap-y-5 gap-x-[60px] lg:grid-cols-[1fr,330px] xl:grid-cols-[1fr,430px]">
          <SeoSectionTitle title={title} className="max-w-[670px]" />
          <div>
            <p className="has_fade_anim">{description}</p>
          </div>
        </div>
        <div className="mt-[52px] xl:mt-[72px] 2xl:mt-[92px]">
          <div className="grid gap-y-10 gap-x-[30px] sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <SeoFeatureCard feature={feature} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoFeatures;
