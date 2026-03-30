"use client";

import { useRef } from "react";
import ImageAutoSlider from "@/components/tools/ImageAutoSlider";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

type Props = {
  clients: {
    image: {
      dark: string;
      light: string;
    };
  }[];
  shapeImage?: string;
};

const ClientSlider = ({
  clients,
  shapeImage = "/assets/imgs/shape/img-s-83.png",
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <div className="has_fade_anim" ref={containerRef}>
      <div className="bg-background-3 dark:bg-[#1B1B1B]">
        <div className="container2">
          <div className="relative py-[35px] lg:px-20 xl:py-[55px] xl:px-[120px] lg:me-[calc((100vw-1140px)/-2)] xl:me-[calc((100vw-1320px)/-2)]">
            <div className="hidden lg:block w-max h-full absolute top-0 end-[calc(100%)] overflow-hidden">
              <Image
                alt="shape_1"
                src={shapeImage}
                width={315}
                height={157}
                className="w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <ImageAutoSlider slides={clients || []} width={123} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
