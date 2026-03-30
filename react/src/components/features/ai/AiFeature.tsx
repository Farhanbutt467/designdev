"use client";

import AiSectionTitle from "@/components/sectionTitle/AiSectionTitle";
import { convertWithBr } from "@/lib/helper/converter";
import Link from "next/link";
import AiFeatureCard from "./AiFeatureCard";
import ImageComponent from "@/components/tools/ImageComponent";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type FeatureSection = {
  title: string;
  image: string;
  sub_title: string;
  sub_icon: string;
  action_btn: {
    enable: boolean;
    label: string;
    link: string;
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
};

const AiFeature = ({
  title,
  image,
  sub_title,
  sub_icon,
  action_btn,
  features,
}: FeatureSection) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <div className="container large" ref={containerRef}>
      <section className="bg-background-5 rounded-[20px] px-4 md:px-[45px]">
        <div className="inner-container">
          <div className="main-section-spacing 2xl:!py-[130px]">
            <AiSectionTitle title={title} className="max-w-[820px]" />
            <div className="grid gap-y-10 gap-x-[60px] mt-[33px] xl:mt-[43px] 2xl:mt-[63px] grid-cols-[auto] xl:grid-cols-[auto_450px] 2xl:grid-cols-[auto_550px] items-start">
              <div className="relative rounded-[20px] overflow-hidden max-w-[660px]">
                <div>
                  <ImageComponent
                    src={image}
                    width={660}
                    height={567}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pos-center text-center flex flex-col items-center">
                  <ImageComponent
                    src={sub_icon}
                    width={90}
                    height={98}
                    alt="shape icon"
                    className="w-[60px] md:w-[90px] h-auto"
                  />
                  <p
                    className="text-[18px] md:text-[24px] leading-[1.08] mt-[11px] text-text-fixed-2 font-instrument font-medium"
                    dangerouslySetInnerHTML={convertWithBr(sub_title)}
                  />
                </div>
                <div className="rounded-t-[20px] bg-background-5 absolute py-[15px] px-[25px] md:pt-[25px] md:pb-[19px] md:px-[35px] start-[40px] md:start-[110px] bottom-0 before:content-[''] before:absolute before:w-10 before:h-10 before:bg-transparent before:rounded-full before:bottom-0 before:right-full before:[box-shadow:20px_20px_0_#F0F2F4] dark:before:[box-shadow:20px_20px_0_#252525] after:content-[''] after:absolute after:w-10 after:h-10 after:bg-transparent after:rounded-full after:bottom-0 after:left-full after:[box-shadow:-20px_20px_0_#F0F2F4] dark:after:[box-shadow:-20px_20px_0_#252525]">
                  <Link
                    href={action_btn.link}
                    className="wc-btn-underline btn-text-flip text-[18px] font-instrument font-medium pb-2 before:!h-[1px]"
                  >
                    <span data-text={action_btn.label}>{action_btn.label}</span>
                  </Link>
                </div>
              </div>
              <div>
                {features.map((feature, index) => (
                  <AiFeatureCard {...feature} key={`ai-feature-${index}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiFeature;
