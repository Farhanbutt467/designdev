"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ButtonSwap from "../elements/button/ButtonSwap";
import { ActionBtnType } from "@/types";

type Props = {
  title: string;
  sub_title: string;
  action_btn: ActionBtnType;
};

const Cta1 = ({ title, sub_title, action_btn }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={pinElement}
      className="cta_area main-section-style bg-[#D8E9E4] dark:bg-[#252525]"
    >
      <div ref={containerRef} className="container">
        <div className="main-section-spacing">
          <div className="text-center">
            <div>
              <div>
                <span className="has_fade_anim text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[30px] uppercase !font-getaway !leading-none font-normal">
                  {sub_title}
                </span>
              </div>
              <div className="mt-5 xl:mt-[30px]">
                <h2 className="has_fade_anim text-[60px] sm:text-[70px] lg:text-[100px] xl:text-[120px] 2xl:text-[150px] !font-normal !font-getaway uppercase max-w-[900px] mx-auto">
                  {title}
                </h2>
              </div>
            </div>
            {action_btn?.enable && (
              <div className="has_fade_anim flex justify-center mt-[35px] xl:mt-[45px]">
                <ButtonSwap
                  buttonText={action_btn.label}
                  link={action_btn.link}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta1;
