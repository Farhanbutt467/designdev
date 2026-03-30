"use client";

import ImageComponent from "@/components/tools/ImageComponent";
import VideoWorkCard from "./VideoWorkCard";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  title_img: {
    light: string;
    dark: string;
  };
  projects: {
    id: number;
    title: string;
    date: string;
    thumb: string;
    video_src: string;
  }[];
};

const VideoWork = ({ title_img, projects }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef}>
      <div className="inner-container large2">
        <div className="py-[60px] xl:py-[100px] 2xl:py-[200px]">
          <div
            className="has_fade_anim flex justify-center"
            data-fade-from="bottom"
            data-fade-offset="50"
          >
            <ImageComponent
              src={title_img.light}
              darkSrc={title_img.dark}
              width={991}
              height={430}
              alt="title-img"
            />
          </div>
          <div className="mt-[50px] md:mt-[70px] xl:mt-[100px]">
            <div className="grid gap-5">
              {projects.map((project, index) => (
                <VideoWorkCard
                  key={`project-${project.id}-${index}`}
                  {...project}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWork;
