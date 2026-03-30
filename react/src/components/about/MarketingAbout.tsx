"use client";

import { useRef } from "react";
import MarketingSectionTitle from "../sectionTitle/MarketingSectionTitle";
import ImageComponent from "../tools/ImageComponent";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  sub_title: string;
  description: string;
  image: string;
};

const MarketingAbout = ({ title, sub_title, description, image }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="bg-background-3" ref={containerRef}>
      <div className="inner-container">
        <div className="pb-[63px] pt-[60px] md:pb-[113px] md:pt-[100px] 2xl:pb-[143px] 2xl:pt-[130px]">
          <div className="pb-[61px] 2xl:pb-[91px] grid gap-y-5 gap-x-[60px] grid-cols-[auto] lg:grid-cols-[auto_690px] xl:grid-cols-[auto_850px]">
            <div>
              <span className="has_fade_anim text-[16px] uppercase text-text-fixed-3">
                {sub_title}
              </span>
            </div>
            <MarketingSectionTitle
              title={title}
              animation="has_fade_anim"
              className="text-text-fixed-2"
            />
          </div>
          <div
            className="image-wrapper has_fade_anim"
            data-fade-from="top"
            data-fade-offset="0"
          >
            <ImageComponent
              width={1720}
              height={860}
              src={image}
              alt="about img"
              className="w-full max-w-full"
            />
          </div>
          <div className="mt-[59px]">
            <p className="has_fade_anim text-text-fixed-3 max-w-full md:max-w-[330px] md:ms-[62%]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingAbout;
