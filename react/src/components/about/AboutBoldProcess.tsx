"use client";

import AboutProcessCard from "@/components/about/AboutProcessCard";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  process_list: {
    icon: {
      light: string;
      dark: string;
    };
    title: string;
    description: string;
  }[];
};

const AboutBoldProcess = ({ process_list }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="main-section-spacing">
          <div className="grid gap-y-[50px] gap-x-[55px] xl:gap-x-[95px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {process_list.map((item, index) => (
              <AboutProcessCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBoldProcess;
