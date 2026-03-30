"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import FaqSection from "@/components/faq/branding/FaqSection";
import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { TServiceType } from "@/types";

const WebServiceDetailsFaq = ({ data }: TServiceType) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { faq_title, faq_description, faqs } = data;

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="py-[60px] xl:py-[140px] grid gap-y-[30px] gap-x-[60px] grid-cols-1 lg:grid-cols-[1fr,540px] xl:grid-cols-[1fr,740px]">
          <div>
            <WebSectionTItle
              title={faq_title}
              className="has_text_move_anim max-w-[410px]"
            />
          </div>
          <div className="has_fade_anim" data-delay="0.45">
            <p className="">{faq_description}</p>
            <div className="mt-[34px] xl:mt-[44px]">
              <FaqSection faqs={faqs} className="font-teko !font-semibold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebServiceDetailsFaq;
