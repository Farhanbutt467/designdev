"use client";

import { ActionBtnType } from "@/types";
import VideoPricingCard from "./VideoPricingCard";
import ImageComponent from "@/components/tools/ImageComponent";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title_img: {
    light: string;
    dark: string;
  };
  plans: {
    title: string;
    tag: string;
    description: string;
    features: string[];
    price: string;
    action_btn: ActionBtnType;
  }[];
};

const VideoPricing = ({ title_img, plans }: Props) => {
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
        <div className="section-spacing-top 2xl:!pt-[200px]">
          <div
            className="has_fade_anim  flex justify-center"
            data-fade-from="bottom"
            data-fade-offset="50"
          >
            <ImageComponent
              src={title_img.light}
              darkSrc={title_img.dark}
              width={1290}
              height={430}
              alt="title img"
            />
          </div>
          <div className="mt-[50px] md:mt-[70px] xl:mt-[100px]">
            <div className="grid gap-y-5 gap-x-[50px] md:grid-cols-2">
              {plans.map((item, index) => (
                <VideoPricingCard key={`videoPricing-${index}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPricing;
