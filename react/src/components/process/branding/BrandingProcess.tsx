"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BranProcessCard from "./BranProcessCard";
import ImageComponent from "@/components/tools/ImageComponent";
import MainSectionTitle from "@/components/sectionTitle/MainSectionTitle";

type Props = {
  title: string;
  shape: {
    light: string;
    dark: string;
  };
  process_list: {
    serial_no: number;
    icon: {
      light: string;
      dark: string;
    };
    title: string;
  }[];
};

const BrandingProcess = ({ title, shape, process_list }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={pinElement}
      className="bg-[#D8E9E4] dark:bg-[#252525] main-section-style"
    >
      <div ref={containerRef} className="container">
        <div className=" main-section-spacing relative">
          <div className="hidden lg:block absolute start-[59%] top-[4%] xl:top-[10%]">
            <ImageComponent
              className="w-auto h-[169px] xl:h-[269px] 2xl:h-[319px]"
              src={shape.dark}
              darkSrc={shape.light}
              width={372}
              height={320}
              alt="shape-1"
            />
          </div>

          <MainSectionTitle title={title} className="max-w-[520px]" />
          <div className=" mt-[50px] xl:mt-[90px]">
            <div>
              <Carousel className="w-full" dir="ltr">
                <CarouselContent>
                  {process_list?.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="has_fade_anim basis-[86%] md:basis-[46%] lg:basis-[40%] xl:basis-[33%] 2xl:basis-[28%]"
                      data-delay={item.serial_no ? item.serial_no * 0.15 : 0}
                      data-ease="bounce"
                    >
                      <BranProcessCard {...item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingProcess;
