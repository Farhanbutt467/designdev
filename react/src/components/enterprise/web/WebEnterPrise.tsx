"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import WebTechnologyCard from "@/components/enterprise/web/WebTechnologyCard";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  technologies: {
    title: string;
    icon: {
      light: string;
      dark: string;
    };
  }[];
};

const WebEnterPrise = ({ title, technologies }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="inner-container" ref={containerRef}>
      <div className="py-[60px] xl:py-[140px]">
        <div className="section-header text-center">
          <div className="">
            <p className="text has_text_move_anim text-[21px]">{title}</p>
          </div>
        </div>
        <div className="mt-[34px] xl:mt-[44px] 2xl:mt-[64px]">
          <div className="flex justify-center flex-wrap md:flex-nowrap md:justify-between">
            {technologies.map((technology, index) => (
              <WebTechnologyCard key={index} {...technology} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebEnterPrise;
