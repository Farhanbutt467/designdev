"use client";

import { convertWithBrSpan } from "@/lib/helper/converter";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasCountAnim from "@/lib/animation/hasCountAnim";
import ImageComponent from "@/components/tools/ImageComponent";
import SeoSectionTitle from "@/components/sectionTitle/SeoSectionTitle";

type Props = {
  title: string;
  stats_image: {
    dark: string;
    light: string;
  };
  satisfaction: {
    percentage: number;
    info: string;
  };
};

const SeoReport = ({ title, stats_image, satisfaction }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasCountAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="inner-container" ref={containerRef}>
      <div className="section-spacing-top ">
        <SeoSectionTitle
          title={title}
          className="max-w-[580px] mx-auto text-center"
        />
        <div className="has_fade_anim mt-[52px] xl:mt-[72px] 2xl:mt-[82px]">
          <div className="grid gap-y-10 gap-x-[60px] lg:grid-cols-[1fr_270px] xl:grid-cols-[1fr_340px] justify-between">
            <div className="report_graph max-w-[860px]">
              <ImageComponent
                src={stats_image.dark}
                darkSrc={stats_image.light}
                className="max-w-full h-auto w-full object-cover"
                alt="gallery dark"
                width={850}
                height={280}
              />
            </div>
            <div>
              <h3 className="text-[100px] sm:text-[150px] md:text-[180px] xl:text-[250px] font-normal flex items-start leading-[.75]">
                <span
                  data-count={satisfaction.percentage}
                  className="has_count_anim"
                >
                  {satisfaction.percentage}
                </span>{" "}
                <span className="text-[20px] sm:text-[30px] ms-[2px] font-medium ">
                  %
                </span>
              </h3>
              <h3
                className="[&>span]:text-text text-lg xl:text-[22px] leading-[1.23] font-normal mt-[22px] xl:mt-[42px] text-text-3"
                dangerouslySetInnerHTML={convertWithBrSpan(satisfaction.info)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoReport;
