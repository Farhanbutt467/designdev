"use client";

import { convertWithBrSpan } from "@/lib/helper/converter";
import MarketingServiceCard from "./MarketingServiceCard";
import MarketingSectionTitle from "@/components/sectionTitle/MarketingSectionTitle";
import { TServiceType } from "@/types";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasWordAnim from "@/lib/animation/hasWordAnim";

type Props = {
  title: string;
  subtitle: string;
  meta_text: string;
  description: string;
  services: TServiceType[];
};

const MarketingService = ({
  title,
  subtitle,
  meta_text,
  description,
  services,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasWordAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div>
          <div className="pt-[100px] pb-[93px] 2xl:pt-[130px] 2xl:pb-[123px] grid gap-y-5 gap-x-[60px] grid-col-[auto] lg:grid-cols-[auto_700px] xl:grid-cols-[auto_850px]">
            <div>
              <span className="text-[16px] uppercase text-text-3">
                {subtitle}
              </span>
            </div>
            <div>
              <MarketingSectionTitle title={title} animation="has_word_anim" />
              <div className="mt-[33px] md:mt-[53px] grid gap-5 grid-cols-[auto] md:grid-cols-[auto_410px]">
                <h4
                  className="has_fade_anim text-[20px] leading-none !font-primary"
                  data-delay="0.15"
                  dangerouslySetInnerHTML={convertWithBrSpan(meta_text)}
                />
                <p className="text has_fade_anim" data-delay="0.30">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <div>
            {services.map((item, index) => (
              <MarketingServiceCard
                key={`service-${item.data.id}-${index}`}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingService;
