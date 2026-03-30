"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import FaqSection from "@/components/faq/branding/FaqSection";
import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  description: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

const WebFaq = ({ title, description, faqs }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

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
              title={title}
              className="has_text_move_anim max-w-[390px]"
            />
            <div className="mt-[22px]">
              <p className="has_fade_anim max-w-[266px]">{description}</p>
            </div>
          </div>
          <div className="has_fade_anim" data-delay="0.45">
            <FaqSection faqs={faqs} className="font-teko" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebFaq;
