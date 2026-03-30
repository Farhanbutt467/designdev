"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import PricingCard from "./PricingCard";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type pricingProps = {
  title: string;
  cards: {
    tag: string;
    price: string;
    feature_list: {
      text: string;
    }[];
    btn_title: string;
  }[];
};

const PricingArea = ({ title, cards }: pricingProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="container2" ref={containerRef}>
      <div className="main-section-spacing">
        <InnerSectionTitle
          title={title}
          className="font-normal text-center max-w-[680px] mx-auto"
          animation="has_text_mov_anim"
        />
        <div className="mt-[37px] xl:mt-[57px]">
          <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                className="has_fade_anim"
                key={index}
                data-fade-from="left"
                data-delay={(index + 1) * 0.15}
              >
                <PricingCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingArea;
