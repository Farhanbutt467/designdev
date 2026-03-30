"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import hasPinContent from "@/lib/animation/hasPinContent";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { ActionBtnType, TWorkType } from "@/types";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import BranWorkCard from "./BranWorkCard";
import BranWorkFooter from "@/components/work/branding/BranWorkFooter";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

type TBrandingWorks = {
  works: TWorkType[];
  title: string;
  description: string;
  action_btn: ActionBtnType;
};

const BrandingWork = ({
  works,
  title,
  description,
  action_btn,
}: TBrandingWorks) => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);
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
      className="work-area section-item bg-background mb-[130px] mt-[-130px] rounded-[30px_30px_0_0] lg:rounded-[50px_50px_0_0] xl:rounded-[80px_80px_0_0] relative z-10 overflow-hidden "
    >
      <div ref={containerRef} className="container">
        <div className="main-section-spacing">
          <div className="flex flex-col md:grid gap-y-[30px] gap-x-15 md:grid-cols-[1fr_auto] items-center">
            <SectionTitle
              title={title}
              className="max-w-[300px] text-[28px] mt-[-5px] sm:text-[30px] sm:-mt-2 md:text-[36px] md:mt-[-10px] lg:text-[40px] lg:-mt-3 xl:text-[60px] xl:-mt-5 2xl:text-[70px] 2xl:-mt-6 font-instrument font-semibold leading-[1]"
            />
            <div
              className="has_fade_anim link-meta flex gap-y-[10px] gap-x-10"
              data-fade-from="left"
            >
              <div className="flex items-center gap-3">
                <div className="icon border border-border w-10 h-10 rounded-[10px]  flex justify-center items-center text-[18px]">
                  <FaDribbble className="text-text" />
                </div>
                <div className="leading-[1]">
                  <span className="text-[10px] uppercase leading-[1] inline-block font-medium text-text-4">
                    Follow
                  </span>
                  <h2 className="name text-[18px] leading-[1] font-medium mt-[5px]">
                    Dribbble
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon border border-border w-10 h-10 rounded-[10px] flex justify-center items-center text-[18px]">
                  <FaBehance className="text-text" />
                </div>
                <div className="leading-[1]">
                  <span className="text-[10px] uppercase leading-[1] inline-block font-medium text-text-4">
                    Follow
                  </span>
                  <h2 className="name text-[18px] leading-[1] font-medium mt-[5px]">
                    Behance
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="works-wrapper-box mt-10 xl:mt-[60px]">
            <div className="works-wrapper grid gap-y-10 gap-x-[30px] grid-cols-1 md:grid-cols-2 xl:gap-y-[90px] xl:gap-x-[30px]">
              {works.map((work) => (
                <BranWorkCard key={work.data.id} {...work} />
              ))}
            </div>
          </div>
          <BranWorkFooter action_btn={action_btn} description={description} />
        </div>
      </div>
    </section>
  );
};

export default BrandingWork;
