"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ImageComponent from "../tools/ImageComponent";

type Props = {
  brands: {
    image: {
      dark: string;
      light: string;
    };
  }[];
};

const borderClassMap: Record<number, string | undefined> = {
  0: "md:border-b-0",
  1: "md:border-e-0",
  3: "md:border-s-0 md:border-e-0",
  4: "md:border-e-0",
  6: "md:border-t-0",
  7: "md:border-t-0 md:border-s-0 md:border-e-0",
  8: "md:border-t-0 md:border-e-0",
  9: "md:border-t-0",
  10: "md:border-s-0",
  11: "md:border-t-0",
};

const indexClassMap: Record<number, string | undefined> = {
  0: "md:col-start-2",
  1: "md:col-start-1",
  6: "md:col-start-2",
  11: "md:col-start-5",
};

const ClientArea = ({ brands }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="container2" ref={containerRef}>
      <div className="main-section-spacing">
        <div className="relative">
          <h2 className="has_fade_anim text-[18px] static text-center md:text-start mb-[10px] mx-auto leading-[1] start-[40%] md:absolute max-w-[230px] md:top-10 lg:text-[22px] lg:max-w-[280px] lg:top-[50px] xl:max-w-[370px] xl:top-[70px] xl:text-[30px]">
            We worked with largest global brands
          </h2>
        </div>
        <div>
          <div className="has_fade_anim grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 relative">
            {brands?.map((brand, index) => (
              <div
                key={index}
                className={cn(
                  "client-box flex justify-center md:border-[1px] items-center min-w-[100px] aspect-[2/1] md:aspect-[1] px-5 group",
                  indexClassMap[index],
                  brands.length > 9 && borderClassMap[index]
                )}
              >
                <ImageComponent
                  className="w-auto h-auto opacity-60 transition-all duration-500 group-hover:opacity-100"
                  src={brand.image.dark}
                  darkSrc={brand.image.light}
                  width={105}
                  height={45}
                  alt="brand-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientArea;
