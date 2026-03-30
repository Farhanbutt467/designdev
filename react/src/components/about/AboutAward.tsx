"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import AboutAwardCard from "@/components/about/AboutAwardCard";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  sub_title: string;
  description: string;
  images: string[];
  awards_list: {
    icon: {
      dark: string;
      light: string;
    };
    count: number;
    description: string;
  }[];
};

const AboutAward = ({
  title,
  sub_title,
  description,
  images,
  awards_list,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="inner-container" ref={containerRef}>
      <div className="main-section-spacing relative z-10">
        <div className="grid lg:items-end gap-5 lg:gap-[50px] lg:grid-cols-[330px_1fr] 2xl:grid-cols-[390px_1fr]">
          <div className="mb-[10px] lg:-mb-10 xl:-mb-[50px]">
            <span className="text-[16px] inline-block uppercase ps-[140px] relative">
              <span className="absolute w-20 h-[2px] bg-text-3 top-1/2 -translate-y-1/2 start-0"></span>
              {sub_title}
              <span className="absolute hidden lg:inline-block w-[1px] h-[75px] bg-current start-[57px] bottom-[-15px]"></span>
            </span>
          </div>

          <InnerSectionTitle title={title} />
        </div>
        <div className="md:ms-[378px] 2xl:ms-[438px] mt-[22px] xl:mt-[27px]">
          <p className="has_fade_anim max-w-[630px]" data-fade-from="left">
            {description}
          </p>
          <div className="mt-[33px] lg:mt-[43px] has_fade_anim">
            <div className="flex gap-y-5 gap-x-10 max-w-[460px] justify-between">
              {awards_list.map((item, index) => (
                <AboutAwardCard cardData={item} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-y-5 gap-x-5 md:gap-x-[50px] justify-end mt-[43px] xl:mt-[63px]">
          <div className="has_fade_anim" data-fade-from="right">
            <Image src={images[0]} alt="image_1" width={350} height={210} />
          </div>
          <div className="max-w-[570px] xl:max-w-[670px] flex-1 basis-auto grow">
            <Image
              src={images[1]}
              alt="image_2"
              width={330}
              height={460}
              className="has_fade_anim"
              data-fade-from="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAward;
