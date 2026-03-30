"use client";

import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import ImageComponent from "@/components/tools/ImageComponent";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  sub_title: string;
  description: string;
  bg_image: string;
  award_list: string[];
};

const AboutBoldAward = ({
  title,
  sub_title,
  description,
  bg_image,
  award_list,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="awards-area" ref={containerRef}>
      <div className="inner-container large">
        <div className="relative z-[1] pt-[44px] px-[25px] pb-[49px] sm:pt-[54px] sm:px-[45px] sm:pb-[59px] lg:pt-[74px] lg:px-[65px] lg:pb-[79px] xl:pt-[94px] xl:px-[95px] xl:pb-[99px] 2xl:pt-[124px] 2xl:px-[115px] 2xl:pb-[129px]">
          <div className="absolute w-full h-full top-0 start-0 z-[-1] before:content-[''] before:absolute before:w-full before:h-full before:bg-[rgba(18,18,18,0.85)] before:top-0 before:start-0">
            <ImageComponent
              src={bg_image}
              width={1520}
              height={719}
              alt="gallery image"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-start flex-col lg:flex-row lg:items-end  gap-[20px] lg:gap-[160px] 2xl:gap-[340px]">
              <div className="mb-[10px]">
                <span className="has_fade_anim font-teko text-[24px] font-medium text-text-fixed-2 uppercase leading-none inline-block">
                  {sub_title}
                </span>
              </div>
              <WebSectionTItle
                title={title}
                className="has_fade_anim text-text-fixed-2"
              />
            </div>
          </div>
          <div className="ms-0 lg:ms-[228px] mt-[22px] xl:ms-[378px] xl:mt-[52px] 2xl:mt-[72px] 2xl:ms-[678px]">
            <p className="text has_fade_anim max-w-[480px] text-text-fixed-3">
              {description}
            </p>
            <div className="has_fade_anim mt-[33px] lg:mt-[63px]">
              <ul className="flex gap-y-5 gap-x-[50px] max-w-[480px]">
                {award_list.map((item, index) => (
                  <li key={index}>
                    <ImageComponent
                      src={item}
                      alt="award img"
                      width={211}
                      height={79}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBoldAward;
