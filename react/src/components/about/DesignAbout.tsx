"use client";

import { ActionBtnType } from "@/types";
import CircleFillButton from "../elements/button/CircleFillButton";
import DesignSectionTitle from "../sectionTitle/DesignSectionTitle";
import { useRef } from "react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import hasCharAnim from "@/lib/animation/hasCharAnim";

type Props = {
  title: string;
  sub_title: string;
  action_btn: ActionBtnType;
  funding: number;
  funding_title: string;
  description: string;
};

const DesignAbout = ({
  title,
  sub_title,
  action_btn,
  funding,
  funding_title,
  description,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
      hasCharAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="section-spacing-top pb-[60px] xl:pb-[100px]">
          <div className="grid gap-y-[35px] gap-x-[60px] xl:grid-cols-[auto_880px]">
            <div>
              <span className="has_char_anim text-[16px] uppercase block mt-[-3px]">
                {sub_title}
              </span>
            </div>
            <div>
              <div>
                  <DesignSectionTitle title={title} />
              </div>
              <div className="mt-20 grid sm:grid-cols-[44%_56%]">
                <div
                  className="has_fade_anim"
                  data-fade-from="bottom"
                  data-duration="0.75"
                  data-delay="0.15"
                >
                  <h3 className="text-[120px] lg:text-[200px] xl:text-[250px] leading-[.84] flex">
                    {funding}
                    <span className="text-[40px]">M</span>
                  </h3>
                  <p className="text-[20px] max-w-[260px] lg:max-w-[303px] leading-[1.37] mt-[5px]">
                    {funding_title}
                  </p>
                </div>
                <div className="mt-[30px] sm:mt-0 sm:ps-[33px] md:ps-[83px] md:border-s border-border">
                  <div className="has_fade_anim" data-delay="0.15">
                    <p>{description}</p>
                  </div>
                  <div
                    className="btn-move has_fade_anim mt-[33px] md:mt-[53px]"
                    data-fade-from="top"
                    data-fade-offset="50"
                    data-ease="bounce"
                  >
                    <CircleFillButton
                      text={action_btn.label}
                      href={action_btn.link}
                      className="bg-theme design-btn-hover text-text-fixed-2 hover:text-text-2 !font-normal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignAbout;
