"use client";

import { convertWithBrSpan } from "@/lib/helper/converter";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useDirection } from "@/context/app.context";

type Props = {
  text: string;
};

const SeoSlider = ({ text }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { direction } = useDirection();

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef}>
      <div className="inner-container large has_fade_anim">
        <div dir="ltr" className=" pt-[30px] xl:pt-[90px] 2xl:pt-[110px]">
          <Marquee
            direction={direction === "rtl" ? "right" : "left"}
            autoFill
            speed={100}
          >
            <div className="overflow-hidden ms-3">
              <h2
                className="seo-text-slider font-spacegrotesk text-[35px] sm:text-[45px] md:text-[75px] lg:text-[90px] xl:text-[140px] 2xl:text-[190px] font-medium leading-[1.10]"
                dangerouslySetInnerHTML={convertWithBrSpan(text)}
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SeoSlider;
