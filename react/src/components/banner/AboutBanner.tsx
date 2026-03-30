"use client";

import Image from "next/image";
import { useRef } from "react";
import ButtonFlip from "@/components/elements/button/ButtonFlip";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { convertWithBrSpan } from "@/lib/helper/converter";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  image: string;
  title: string;
  description: string;
  btn_text: string;
  bgImage: string;
};

const AboutBanner = ({
  image,
  title,
  description,
  btn_text,
  bgImage,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="max-w-[1920px]">
      <div
        ref={containerRef}
        className="grid lg:grid-cols-[1fr,47%] xl:grid-cols-[1fr,43%]"
      >
        <div className="thumb">
          <Image
            src={image}
            alt="gallery_image"
            width={1085}
            height={900}
            className="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative py-[60px] px-[30px] xl:py-[100px] xl:px-20 z-10">
          <div className="bg absolute h-full w-full top-0 start-0 -z-10">
            <Image
              src={bgImage}
              alt="bgImage"
              width={835}
              height={900}
              className="w-full h-full"
            />
            <div className="absolute w-full h-full bg-[#121212D8] top-0 start-0"></div>
          </div>

          <InnerSectionTitle
            title={title}
            className="max-w-[440px] text-text-fixed-2"
            animation="has_text_mov_anim"
          />
          <div className="mt-[33px] lg:mt-[43px] xl:mt-[123px] 2xl:mt-[323px]">
            <p
              className="text has_fade_anim leading-[1.35] text-[20px] xl:text-[24px] max-w-[440px] text-text-fixed-3 [&>span]:text-text-fixed-2"
              data-fade-from="left"
              dangerouslySetInnerHTML={convertWithBrSpan(description)}
            >
              {/* {start}
              <span className="text-text-fixed-2">{highlight}</span>
              {end} */}
            </p>
          </div>
          <div className="mt-8 lg:mt-[42px] has_fade_anim" data-ease="bounce">
            <ButtonFlip
              btnText={btn_text}
              link="/contact"
              className="bg-background-fixed-2 hover:bg-background-fixed-2 text-text-fixed hover:text-text-fixed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
