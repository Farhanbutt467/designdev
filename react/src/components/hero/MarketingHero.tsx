"use client";

import { ActionBtnType } from "@/types";
import ButtonSwap from "../elements/button/ButtonSwap";
import ImageComponent from "../tools/ImageComponent";
import MarketingSectionTitle from "../sectionTitle/MarketingSectionTitle";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  sub_title: string;
  shape_1: {
    light: string;
    dark: string;
  };
  shape_2: {
    light: string;
    dark: string;
  };
  info: {
    customers: string;
    client_img: {
      light: string;
      dark: string;
    };
    description: string;
    action_btn: ActionBtnType;
  };
};

const MarketingHero = ({ title, sub_title, shape_1, shape_2, info }: Props) => {
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
        <div className="pb-11 pt-[67px] 2xl:pb-[94px] 2xl:pt-[97px] relative z-[1]">
          <div className="absolute top-[100px] end-[calc(100%+133px)] w-[132px] z-[-1]">
            <ImageComponent
              src={shape_1.light}
              darkSrc={shape_1.dark}
              width={132}
              height={132}
              alt="shape-1 img"
              className="inline-block max-w-full"
            />
          </div>
          <div className="absolute bottom-0 start-[calc(100%-180px)] hidden md:block w-[314px] 2xl:w-[494px] z-[-1]">
            <ImageComponent
              width={494}
              height={495}
              src={shape_2.light}
              darkSrc={shape_2.dark}
              alt="shape-1 img"
              className="inline-block max-w-full"
            />
          </div>
          <div className="grid gap-y-[30px] gap-x-[60px] grid-cols-[auto] md:grid-cols-[auto_340px] lg:grid-cols-[auto_380px]">
            <div>
              <div className="has_fade_anim" data-fade-from="left">
                <span className="text-[16px] xl:text-[20px] uppercase font-plusjakartasans font-medium inline-flex gap-[15px] items-center">
                  <ImageComponent
                    src="/assets/imgs/shape/img-s-29.png"
                    darkSrc="/assets/imgs/shape/img-s-29-light.png"
                    width={60}
                    height={15}
                    alt="subtitle-shape img"
                    className="h-[10px] xl:h-auto"
                  />
                  {sub_title}
                </span>
              </div>
              <div className="mt-[33px]">
                <MarketingSectionTitle
                  title={title}
                  heading1
                  className="!font-light"
                />
              </div>
            </div>
            <div>
              <div
                className="has_fade_anim"
                data-fade-from="left"
                data-delay="0.45"
              >
                <div>
                  <ImageComponent
                    src={info.client_img.light}
                    darkSrc={info.client_img.dark}
                    width={160}
                    height={55}
                    alt="client img"
                  />
                </div>
                <p className="leading-[1.22] max-w-[193px] mt-[15px]">
                  <span className="underline [text-decoration-thickness:1px] underline-offset-4 text-text">
                    We have {info.customers}
                  </span>{" "}
                  customers word-wide
                </p>
              </div>
              <div className="mt-[39px] 2xl:mt-[59px]">
                <p
                  className="has_fade_anim"
                  data-delay="0.60"
                  data-fade-from="left"
                >
                  {info.description}
                </p>
              </div>
              <div
                className="has_fade_anim mt-[33px]"
                data-delay="0.75"
                data-fade-from="bottom"
              >
                <ButtonSwap
                  link="/contact"
                  bgColor={"bg-theme"} textColor={"text-text-fixed-2 text-sm"}
                  arrowWidthHeight="w-[40px] h-[40px]"
                  textClassName="px-[22px] font-normal"
                  rootClassName="wc-swap-btn-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingHero;
