"use client";

import { TAiAgencyHero } from "@/types";
import ImageComponent from "../../tools/ImageComponent";
import AiSectionTitle from "../../sectionTitle/AiSectionTitle";
import AiInfoCard from "./AiInfoCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

const AiHero = ({
  title,
  shape,
  client_img,
  customers,
  info,
  image,
  feature_text,
}: TAiAgencyHero) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="container large" ref={containerRef}>
      <div className="inner-container">
        <div className="pt-[60px] lg:pt-[80px] pb-[39px] 2xl:pb-[59px] relative z-[1]">
          <div className="hidden lg:block absolute top-[-80px] 2xl:top-[-100px] start-[-24%] w-[62%] z-[-1]">
            <ImageComponent
              src={shape.light}
              darkSrc={shape.dark}
              width={800}
              height={512}
              alt="shape img"
              className="opacity-[.12]"
            />
          </div>
          <div className="grid gap-y-10 gap-x-[60px] grid-cols-[auto] md:grid-cols-[auto_auto] justify-between mt-8">
            <div>
              <div className="img_anim_reveal">
                <ImageComponent
                  src={client_img.light}
                  darkSrc={client_img.dark}
                  width={160}
                  height={55}
                  alt="client img"
                  className="object-cover"
                />
              </div>
              <p
                className="has_fade_anim text-[18px] mt-[15px] leading-[1.22] text-text-3 !font-primary"
                data-fade-from="left"
              >
                <span className="underline text-text underline-offset-4">
                  We have {customers}
                </span>{" "}
                customers <br />
                word-wide
              </p>
            </div>
            <div
              className="has_fade_anim"
              data-fade-from="left"
              data-duration="0.75"
              data-delay="0.30"
            >
              <AiSectionTitle title={title} heading1 />
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-[310px,1fr] 2xl:grid-cols-[400px_1fr]">
        <AiInfoCard {...info} />
        <div className="bg-primary rounded-[20px] overflow-hidden relative z-[1] pt-[30px] pb-[150px] px-[30px]">
          <div className="absolute w-full h-full top-0 start-0 z-[-1] overflow-hidden">
            <ImageComponent
              src={image}
              width={1400}
              height={500}
              alt="image"
              dataSpeed={0.9}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[300px]">
            <div className="flex items-center gap-[14px] bg-[rgba(255,255,255,0.15)] [backdrop-filter:blur(7.5px)] p-5 rounded-[20px]">
              <span className="icon w-[50px] h-[50px] bg-[rgba(255,255,255,0.8)] inline-flex rounded-[12px] justify-center items-center min-w-[50px]">
                <ImageComponent
                  src="/assets/imgs/icon/check-3.png"
                  width={14}
                  height={11}
                  alt="icon image"
                />
              </span>
              <p className="text-[18px] leading-[1.11] text-text-fixed-2">
                {feature_text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiHero;
