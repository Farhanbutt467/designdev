"use client";

import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import ImageComponent from "./ImageComponent";
import { useDirection } from "@/context/app.context";

type Props = {
  slides: { image: { dark: string; light: string } }[];
  identity?: string;
  speed?: number;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
};

const ImageAutoSlider = ({
  slides,
  identity = "brand_logo",
  speed = 60,
  width = 72,
  height = 43,
  className,
  imageClassName,
}: Props) => {
  const { direction } = useDirection();

  return (
    <div dir="ltr">
      {slides && slides?.length && (
        <div>
          <Marquee
            speed={speed}
            direction={direction === "rtl" ? "right" : "left"}
          >
            {slides?.map((slide, i) => (
              <div
                className={cn(
                  "me-[140px]",
                  className
                )}
                key={`${identity}-${i}`}
              >
                <ImageComponent
                  width={width}
                  height={height}
                  className={cn("w-auto", imageClassName)}
                  customHeight={`${height}px`}
                  src={slide?.image?.dark}
                  darkSrc={slide?.image?.light}
                  alt="Brand Logo"
                />
              </div>
            ))}
          </Marquee>
        </div>
      )}
    </div>
  );
};

export default ImageAutoSlider;
