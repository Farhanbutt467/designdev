"use client";

import { useState, useEffect, useCallback } from "react";
import { TWorkType } from "@/types";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import SeoWorkCard from "@/components/work/seo/SeoWorkCard";
import SeoSectionTitle from "@/components/sectionTitle/SeoSectionTitle";

type Props = {
  title: string;
  description: string;
  works: TWorkType[];
};

const SeoWork = ({ works, title, description }: Props) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);
  const handlePrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      className="inner-container large overflow-hidden"
      ref={containerRef}
    >
      <div className="inner-container ">
        <div className="section-spacing-top">
          <div className="grid gap-y-5 gap-x-10 lg:gap-x-[60px] items-center justify-between md:grid-cols-2 lg:grid-cols-[auto_auto_auto]">
            <SeoSectionTitle title={title} className="max-w-[330px]" />
            <div>
              <p className="has_fade_anim max-w-[450px]" data-delay="0.30">
                {description}
              </p>
            </div>
            <div
              className="hidden lg:flex rtl:md:flex-row-reverse gap-5 has_fade_anim"
              data-delay="0.45"
            >
              <Button
                onClick={handlePrevious}
                variant="circle"
                className="border-text/15 text-text !h-[60px] !w-[60px] 2xl:!h-[70px] 2xl:!w-[70px] hover:bg-primary hover:text-text-fixed-2"
              >
                <FaArrowLeft />
              </Button>
              <Button
                onClick={handleNext}
                variant="circle"
                className="border-text/15 text-text !h-[60px] !w-[60px] 2xl:!h-[70px] 2xl:!w-[70px] hover:bg-primary hover:text-text-fixed-2"
              >
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="projects_wrapper_box has_fade_anim mt-[50px] xl:mt-[70px] 2xl:mt-[90px]">
        <div className="projects_wrapper">
          <Carousel
            className="w-full lg:m-[-30px] lg:p-[30px] [&>.carousel-content-wrap]:!overflow-visible"
            dir="ltr"
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
          >
            <CarouselContent>
              {works.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 me-[40px]"
                >
                  <SeoWorkCard {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SeoWork;
