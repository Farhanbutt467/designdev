"use client";

import ImageComponent from "@/components/tools/ImageComponent";
import { convertWithBr } from "@/lib/helper/converter";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  mask_image: string;
  sticker: {
    light: string;
    dark: string;
  };
  bg_video: string;
};

const VideoHero = ({ title, mask_image, sticker, bg_video }: Props) => {
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
        <div className="pt-[16px] pb-[53px] lg:pt-[56px] lg:pb-[73px]">
          <div className="relative">
            <video
              src={bg_video}
              autoPlay
              muted
              loop
              style={{
                maskImage: `url(${mask_image})`,
                WebkitMaskImage: `url(${mask_image})`,
                maskSize: "100% 100%",
              }}
              className="aspect-[100/40] h-h-full object-cover w-full"
            ></video>
            <div
              className="has_fade_anim rounded-[120px] bg-background-2 flex mx-auto justify-center mt-[5px] py-[10px] px-[24px] lg:py-[13px] lg:px-[28px] xl:py-[22px] xl:px-[38px] 2xl:py-[32px] 2xl:px-[38px] md:border-border-3 border-[4px] lg:border-[6px] xl:border-[10px] 2xl:border-[18px] items-center gap-[15px] lg:gap-[21px] md:absolute md:top-[-16px] lg:top-[-26px] xl:top-[-36px] md:start-[34%] md:rotate-[15deg] rtl:rotate-[345deg]"
              data-fade-from="top"
              data-ease="bounce"
              data-fade-offset="100"
            >
              <ImageComponent
                src={sticker.light}
                darkSrc={sticker.dark}
                width={122}
                height={121}
                alt="shape"
                className="h-[35px] md:h-[50px] lg:h-[70px] xl:h-[100px] 2xl:h-[120px] w-auto"
              />
              <h1
                className="text-[22px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] text-text-2 leading-none uppercase !font-bold"
                dangerouslySetInnerHTML={convertWithBr(title)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
