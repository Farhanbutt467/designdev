"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import SeoPricingCard from "./SeoPricingCard";
import SeoPricingFaqs from "./SeoPricingFaqs";
import SeoSectionTitle from "@/components/sectionTitle/SeoSectionTitle";

type TPricingProps = {
  title: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  pricing: {
    cards: {
      tag: string;
      price: string;
      feature_list: {
        text: string;
      }[];
      action_btn: {
        label: string;
        link: string;
      };
    }[];
  };
};

const SeoPricing = ({ pricing, title, faqs }: TPricingProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="pricing_area">
      <div className="inner-container" ref={containerRef}>
        <div className="main-section-spacing">
          <div className="grid gap-y-[30px] gap-x-[60px] lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_480px]">
            <SeoSectionTitle title={title} className="max-w-[610px]" />
            <div
              className="accordion_wrapper has_fade_anim"
              data-fade-from="left"
            >
              <SeoPricingFaqs faqs={faqs} />
            </div>
          </div>
          <div className="mt-[60px] xl:mt-20 2xl:mt-[100px]">
            <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
              {pricing.cards.map((item, index) => (
                <div
                  key={index}
                  className="has_fade_anim"
                  data-delay={(index + 1) * 0.15}
                >
                  <SeoPricingCard pricing={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoPricing;
