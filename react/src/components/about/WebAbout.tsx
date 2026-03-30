"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ActionBtnType } from "@/types";
import ImageComponent from "@/components/tools/ImageComponent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import WebAboutTop from "@/components/about/WebAboutTop";

type Props = {
  data: {
    title: string;
    subTitle: string;
    description: string;
    shape1: {
      dark: string;
      light: string;
    };
    clients_thumb: {
      dark: string;
      light: string;
    };
    total_clients: string;
    action_btn: ActionBtnType;
    gallery: string[];
    icon: {
      dark: string;
      light: string;
    };
    service_box_text: string;
  };
};

const WebAbout = ({ data }: Props) => {
  const { gallery, icon, service_box_text } = data;
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="web-section-spacing relative">
          <WebAboutTop {...data} />
          <div className="flex gap-x-[60px] gap-y-[30px] flex-col md:flex-row mt-[40px] lg:mt-[-80px] xl:mt-[-170px] justify-between xl:ps-[90px]">
            <div className="has_fade_anim md:mt-[230px] lg:mt-[330px]">
              <ImageComponent
                src={gallery[0]}
                width={330}
                height={180}
                alt="gallery-1"
              />
            </div>
            <div className="sm:pt-[80px] sm:pe-[130px] relative">
              <ImageComponent
                src={gallery[1]}
                width={360}
                height={455}
                alt="gallery-2"
                dataFadeOffset="50"
                dataDelay=".45"
                dataFadeFrom="right"
                className="has_fade_anim"
              />

              <div
                className="has_fade_anim bg-[#f9f9f9] dark:bg-[#1b1b1b] mt-[30px] sm:mt-0 static sm:absolute px-[40px] pt-[40px] pb-[35px] lg:px-[60px] lg:pt-[60px] lg:pb-[55px] top-0 end-0 w-[260px] lg:w-[300px]"
                data-fade-from="top"
                data-fade-offset="0"
                data-delay="0.90"
              >
                <div className="">
                  <ImageComponent
                    src={icon.light}
                    darkSrc={icon.dark}
                    width={28}
                    height={25}
                    // className="inline-block"
                    alt="clients-thumb"
                  />
                </div>
                <p className=" mt-[23px]">{service_box_text}</p>
                <div className="mt-[39px] font-semibold">
                  <span className="text-[120px] font-teko  leading-[0.8] inline-block">
                    1.8
                  </span>
                  <span className="text-[48px] leading-[.8] inline-block">
                    x
                  </span>
                  <span className="text-[21px] leading-[24px] font-teko uppercase block mt-[-3px]">
                    Faster Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAbout;
