"use client";
import Marquee from "react-fast-marquee";
import { useDirection } from "@/context/app.context";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  text_links: {
    text: string;
    link: string;
  }[];
};

const VideoTextSlider = ({ text_links }: Props) => {
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
      <div className="inner-container large2 has_fade_anim">
        <div className="pt-[23px] pb-[21px] border-b border-t">
          <Marquee
            direction={direction === "rtl" ? "right" : "left"}
            autoFill
            speed={50}
            className="overflow-hidden"
          >
            <div className="me-[60px]">
              {text_links.map((item, index) => (
                <h2
                  className="text-[20px] 2xl:text-[24px] leading-none uppercase"
                  key={index}
                >
                  <Link href={item.link}>{item.text}</Link>
                </h2>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default VideoTextSlider;
