"use client";
import ImageComponent from "@/components/tools/ImageComponent";
import { TServiceType } from "@/types";
import VideoServiceCard from "./VideoServiceCard";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title_img: {
    light: string;
    dark: string;
  };
  services: TServiceType[];
};

const VideoService = ({ title_img, services }: Props) => {
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
        <div className="main-section-spacing">
          <div
            className="has_fade_anim flex justify-center"
            data-fade-from="bottom"
            data-fade-offset="50"
          >
            <ImageComponent
              src={title_img.light}
              darkSrc={title_img.dark}
              width={1290}
              height={430}
              alt="title img"
              className="inline-block max-w-full"
            />
          </div>
          <div className="mt-[50px] md:mt-[70px] xl:mt-[100px] 2xl:mt-[130px]">
            <div className="grid gap-x-[60px] lg:gap-x-[90px] md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  className={cn(
                    "has_fade_anim border-b border-text first:border-t",
                    index === 1 && "md:border-t"
                  )}
                  data-delay={index % 2 === 0 ? ".15" : ".30"}
                  key={service.data.id}
                >
                  <VideoServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoService;
