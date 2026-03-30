"use client";

import { ActionBtnType, TWorkType } from "@/types";
import MarketingWorkCard from "./MarketingWorkCard";
import ButtonSwap from "@/components/elements/button/ButtonSwap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  sub_title: string;
  action_btn: ActionBtnType;
  projects: TWorkType[];
};

const MarketingWork = ({ title, sub_title, action_btn, projects }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="section-spacing-bottom" ref={containerRef}>
      <div className="inner-container">
        <div className="pt-[95px] 2xl:pt-[125px]">
          <div className="text-center">
            <div className="has_fade_anim">
              <h2 className="text-[35px] md:text-[40px] lg:text-[50px] xl:text-[270px] leading-[.81] inline-block relative">
                <span className="text-[30px] xl:!font-normal static xl:absolute xl:text-[30px] top-0 start-0 mt-5 xl:after:content-[''] after:hidden after:xl:block after:absolute after:w-[300px] after:h-[1px] after:bg-text after:top-1/2 after:translate-y-[-50%] after:start-[calc(100%+30px)]">
                  {sub_title}
                </span>{" "}
                {title}
              </h2>
            </div>
          </div>
          <div className="mt-10 lg:mt-[50px] xl:mt-[60px] 2xl:mt-[90px]">
            <div className="grid gap-y-10 gap-x-[30px] xl:gap-y-[70px] xl:gap-x-[50px] 2xl:gap-y-[90px] grid-cols-1 sm:grid-cols-2">
              {projects.map((project, index) => (
                <MarketingWorkCard
                  key={`project-${project.data.id}-${index}`}
                  {...project}
                />
              ))}
            </div>
          </div>
          <div
            className="has_fade_anim mt-[58px] 2xl:mt-[88px] flex justify-center"
            data-fade-from="bottom"
          >
            <ButtonSwap
              link={action_btn.link}
              bgColor={"bg-theme"} textColor={"text-text-fixed-2 text-sm"}
              arrowWidthHeight="w-[40px] h-[40px]"
              textClassName="px-[22px] font-normal"
              rootClassName="wc-swap-btn-sm"
              buttonText={action_btn.label}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingWork;
