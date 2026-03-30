"use client";

import { cn } from "@/lib/utils";
import ImageComponent from "../tools/ImageComponent";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  bg_img: string;
  shape_img: string;
  small_shape: {
    light: string;
    dark: string;
  };
  info: {
    title: string;
    description: string;
  }[];
  tags: string[];
};

const AiInfo = ({ bg_img, shape_img, small_shape, info, tags }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="lg:pt-[120px]" ref={containerRef}>
      <div className="inner-container">
        <div className="main-section-spacing 2xl:py-[130px] grid gap-y-10 gap-x-[60px] grid-cols-[auto] md:grid-cols-[auto_1fr] lg:grid-cols-[auto_560px] xl:grid-cols-[auto_700px] 2xl:grid-cols-[auto_860px] items-start relative z-[1]">
          <div
            className="has_fade_anim absolute w-[100vw] hidden lg:block top-[-270px] xl:top-[-320px] z-[-1] left-1/2 -translate-x-1/2"
            data-fade-from="left"
            data-duration="2"
            data-delay="0.3"
            data-fade-offset="80"
            data-ease="bounce"
          >
            <ImageComponent
              src={bg_img}
              width={1920}
              height={1032}
              alt="bg img"
              className="w-full "
            />
          </div>
          <div className="py-[164px] px-[30px] md:py-[214px] md:px-10 relative z-[1] inline-block w-[290px]">
            <div className="absolute w-[122px] top-1/2 end-full -translate-y-1/2">
              <ImageComponent
                src={small_shape.light}
                darkSrc={small_shape.dark}
                width={122}
                height={242}
                alt="shape-1 img"
              />
            </div>
            <div className="absolute w-full h-full top-0 start-0 z-[-1]">
              <ImageComponent
                src={shape_img}
                width={292}
                height={583}
                alt="shape bg"
                className="h-full w-auto"
              />
            </div>
            <div className="info-list">
              <ul>
                {tags.map((item, index) => (
                  <li
                    key={`info-tag-${index}`}
                    className="text-[18px] font-medium leading-[1.44] font-instrument text-text-fixed-2"
                  >
                    + {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="grid gap-y-10 md:gap-y-[110px]">
              {info.map((item, index) => (
                <div
                  className={cn(
                    "max-w-full md:max-w-[330px]",
                    index === 1 && "ms-auto"
                  )}
                  key={`info-${index}`}
                >
                  <div className="content">
                    <h2
                      className="has_fade_anim text-[24px] "
                      data-fade-from="left"
                    >
                      {item.title}
                    </h2>
                    <p className="has_text_mov_anim mt-[17px] max-w-full md:max-w-[305px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInfo;
