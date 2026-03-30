"use client";

import InnerSectionTitle from "@/components/sectionTitle/InnerSectionTitle";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  title: string;
  description: string;
};

const IntroSection = ({ title, description }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasTextMovAnim();
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <InnerSectionTitle
        title={title}
        className="large"
        heading1
        animation="has_text_mov_anim"
      />
      <div className="mt-6 xl:ms-[220px]">
        <p className="max-w-[410px] has_fade_anim" data-fade-from="left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
