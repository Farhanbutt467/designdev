"use client";

import { ActionBtnType } from "@/types";
import { TWorkType } from "@/types";
import WorkCard from "@/components/work/WorkCard";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  sub_title: string;
  action_btn: ActionBtnType;
  projects: TWorkType[];
};

const DesignWork = ({ title, sub_title, action_btn, projects }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="section-spacing-bottom pt-5 lg:pt-[50px]">
          <div>
            <div className="pb-[18px] border-b">
              <div>
                <h2 className="has_text_mov_anim text-[35px] md:text-[40px] lg:text-[300px] xl:text-[350px] 2xl:text-[450px] leading-[.83] capitalize lg:uppercase text-start lg:text-center lg:mx-[-100px]">
                  {title}
                </h2>
              </div>
              <div className="mt-[32px] xl:mt-[52px]">
                <span className="text-[16px] uppercase text-text block mt-[-3px]">
                  {sub_title}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[50px] grid justify-start xl:justify-end xl:grid-cols-[880px]">
            <div className="grid gap-[68px]">
              {projects.map((project) => (
                <WorkCard key={project.data.id} project={project} />
              ))}
            </div>
          </div>
          <div className="mt-[58px]  2xl:mt-[98px] grid justify-start xl:justify-end xl:grid-cols-[880px]">
            <div
              className="has_fade_anim"
              data-fade-from="top"
              data-fade-offset="100"
              data-ease="bounce"
            >
              <span className="btn-move inline-block">
                <CircleFillButton
                  text={action_btn.label}
                  href={action_btn.link}
                  className="!font-normal"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignWork;
