"use client";

import Marquee from "react-fast-marquee";
import Link from "next/link";
import { useDirection } from "@/context/app.context";
import ImageComponent from "@/components/tools/ImageComponent";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  sliderItems: {
    title: string;
    icon: string;
    link: string;
  }[];
};

const DesignTextSlider = ({ sliderItems }: Props) => {
  const { direction } = useDirection();
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef}>
      <div
        className="has_fade_anim py-6 2xl:py-[34px] bg-theme"
        data-delay="0.15"
        data-fade-from="bottom"
      >
        <Marquee
          direction={direction === "rtl" ? "right" : "left"}
          autoFill
          speed={50}
        >
          {sliderItems.map((item, index) => (
            <div className="me-[30px]" key={index}>
              <h2 className="text-[20px] text-black uppercase leading-none 2xl:text-[24px]">
                <Link href={`/${item.link}`}>
                  <ImageComponent
                    src={item.icon}
                    width={18}
                    height={18}
                    alt="star icon"
                    className="me-[30px] inline-block"
                  />
                  {item.title}
                </Link>
              </h2>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default DesignTextSlider;
