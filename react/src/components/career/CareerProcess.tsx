"use client";

import CareerProcessCard from "@/components/career/CareerProcessCard";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  description: string;
  process_cards: {
    id: number;
    title: string;
    description: string;
    icon: {
      dark: string;
      light: string;
    };
  }[];
};

const CareerProcess = ({ title, description, process_cards }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="container2" ref={containerRef}>
      <div className="main-section-spacing">
        <div className="grid gap-y-5 gap-x-[60px] justify-between items-center xl:grid-cols-[auto_auto]">
          <InnerSectionTitle title={title} className="max-w-[630px]" />
          <p className="has_fade_anim max-w-[420px]">{description}</p>
        </div>
        <div className="mt-[57px] xl:mt-[87px]">
          <div className="grid gap-y-[63px] gap-x-[55px] xl:gap-y-[73px] xl:gap-x-[60px] justify-between sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[300px_300px_300px]">
            {process_cards.map((process, index) => {
              const adjustedIndex = index % 3;
              return (
                <div
                  key={process.id}
                  className="has_fade_anim"
                  data-delay={(adjustedIndex + 1) * 0.15}
                >
                  <CareerProcessCard process={process} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerProcess;
