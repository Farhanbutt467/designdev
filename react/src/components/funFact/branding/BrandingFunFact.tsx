"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasImageReveal from "@/lib/animation/hasImageReveal";
import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ImageComponent from "@/components/tools/ImageComponent";
import MainSectionTitle from "@/components/sectionTitle/MainSectionTitle";

type Props = {
  title: string;
  shape1: string;
  shape2: string;
  value: number;
};

const BrandingFunFact = ({ title, shape1, shape2, value }: Props) => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasImageReveal();
      hasCountAnim();
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={pinElement}
      className="main-section-style bg-[#d9dced] dark:bg-[#252525]"
    >
      <div ref={containerRef} className="container">
        <div className="main-section-spacing">
          <MainSectionTitle title={title} className="max-w-[840px]" />
          <div className="mt-[50px] xl:mt-[90px]">
            <div className="ms-auto overflow-hidden max-w-[1310px] flex items-center gap-[50px] sm:gap-[80px] md:gap-[120px] xl:gap-[220px]">
              <div className="has_image_reveal">
                <ImageComponent
                  className="shape-1 h-[135px] sm:h-[215px] md:h-[265px] lg:h-[315px] xl:h-[415px] 2xl:h-[515px] w-auto"
                  src={shape1}
                  darkSrc={shape2}
                  width={266}
                  height={515}
                  alt="image"
                />
              </div>
              <p
                data-count={value}
                className="has_count_anim text-[120px] sm:text-[170px] md:text-[200px] lg:text-[250px] xl:text-[350px] 2xl:text-[450px]"
              >
                {value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingFunFact;
