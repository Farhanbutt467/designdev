"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import hasPinContent2 from "@/lib/animation/hasPinContent2";
import WorkCard from "@/components/work/WorkCard";
import ImageComponent from "../tools/ImageComponent";
import { TWorkType } from "@/types";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  description: string;
  icon: {
    dark: string;
    light: string;
  };
  projects: TWorkType[];
};

const WorkInner = ({ title, description, icon, projects }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);
  const pinArea = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
      hasPinContent2(pinElement.current, pinArea.current, "top top", 1024);
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div
        className="section-spacing-bottom grid lg:grid-cols-[1fr_570px] xl:grid-cols-[1fr_880px] gap-y-[30px] gap-x-[60px] pt-[127px] xl:pt-[147px] 2xl:pt-[217px]"
        ref={pinArea}
      >
        <div ref={pinElement}>
          <InnerSectionTitle
            title={title}
            className="large"
            heading1
            animation="has_text_mov_anim"
          />
          <p className="has_fade_anim max-w-full lg:max-w-[330px] lg:indent-[60px] mt-[10px]">
            {description}
          </p>
          <div className="has_fade_anim mt-[54px] hidden lg:block">
            <ImageComponent
              className="max-w-full"
              src={icon.dark}
              darkSrc={icon.light}
              width={40}
              height={80}
              alt="dark"
            />
          </div>
        </div>
        <div className="grid gap-12 xl:gap-[68px] ">
          {projects.map((project) => (
            <WorkCard key={project.data.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkInner;
