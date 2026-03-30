"use client";

import Image from "next/image";
import MarketingSectionTitle from "../sectionTitle/MarketingSectionTitle";
import ImageComponent from "../tools/ImageComponent";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  description: string;
  image: string;
  companies: string[];
  shape: {
    light: string;
    dark: string;
  };
};

const MarketingReport = ({
  title,
  description,
  image,
  companies,
  shape,
}: Props) => {

  const containerRef = useRef<HTMLDivElement>(null!);
  
    useGSAP(
      () => {
        hasFadeAnim();
      },
      { scope: containerRef }
    );

  return (
    <section className="bg-[#F9EFF1] dark:bg-[#1B1B1B] section-spacing-bottom" ref={containerRef}>
      <div className="container2">
        <div className="pt-[101px] xl:pt-[181px] 2xl:pt-[211px] grid grid-cols-1 lg:grid-cols-2 gap-x-[60px] gap-y-[40px] flex-col md:flex-row">
          <div className="max-w-[557px]">
            <MarketingSectionTitle title={title} className="has_fade_anim" />

            <div className="md:ms-[110px] mt-[34px] md:mt-[54px]">
              <p className="max-w-[360px] has_fade_anim" data-fade-from="left">
                {description}
              </p>
            </div>
            <div className="mt-[34px] xl:mt-[50px] 2xl:mt-[120px] 2xl:ms-[110px] has_fade_anim">
              <ul className="flex gap-2.5 [&>li]:text-sm [&>li]:font-medium [&>li]:uppercase [&>li]:inline-block [&>li]:border [&>li]:px-[18px] [&>li]:py-1.5 [&>li]:rounded-full [&>li]:border-text [&>li]:leading-none">
                {companies.map((company, index) => (
                  <li key={`company-${index}`}>{company}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="xl:-mt-[61px] overflow-hidden">
            <Image
              width={630}
              height={570}
              src={image}
              className="has_fade_anim w-full h-full object-cover"
              data-fade-from="left"
              alt="gallery image"
            />
          </div>
        </div>

        <div
          className="has_fade_anim hidden xl:inline-block transform translate-x-[-100%] translate-y-[-40px] rtl:translate-x-[100%]"
          data-fade-offset="0"
        >
          <ImageComponent
            src={shape?.light}
            darkSrc={shape?.dark}
            width={121}
            height={121}
            alt="shape-image"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingReport;
