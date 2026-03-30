"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  sub_title: string;
  description: string;
};

const AboutHero = ({ title, sub_title, description }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef} className="container">
      <div className="pb-[53px] xl:pb-[83px] 2xl:pb-[133px] pt-[128px] xl:pt-[178px] 2xl:pt-[218px]">
        <InnerSectionTitle
          title={title}
          className="large md:text-center font-normal"
          heading1
        />
        <div className="grid gap-y-5 gap-x-10 lg:grid-cols-[auto_auto] md:justify-center mt-6 xl:mt-11">
          <div className="has_fade_anim mt-1" data-fade-from="right">
            <span className="text-[16px] leading-none inline-block uppercase pe-[100px] relative">
              {sub_title}
              <span className="absolute w-20 h-[2px] bg-text top-1/2 -translate-y-1/2 end-0"></span>
            </span>
          </div>
          <div>
            <p className="has_fade_anim max-w-[440px]" data-fade-from="left">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
