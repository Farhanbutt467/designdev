"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import ImageAutoSlider from "@/components/tools/ImageAutoSlider";
import { useGSAP } from "@gsap/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import TestimonialSliderNav from "@/components/testimonial/TestimonialSliderNav";
import BranTestimonialCard from "@/components/testimonial/branding/BranTestimonialCard";
import BranTestimonialInfo from "@/components/testimonial/branding/BranTestimonialInfo";
import { TTestimonialList } from "@/types";
import MainSectionTitle from "@/components/sectionTitle/MainSectionTitle";

type Props = {
  title: string;
  info: {
    rating: number;
    reviews: number;
    text: string;
  };
  testimonial_list: TTestimonialList[];
  brands: {
    image: {
      dark: string;
      light: string;
    };
  }[];
};

const BrandingTestimonial = ({
  title,
  info,
  testimonial_list,
  brands,
}: Props) => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const handlePrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <div
      ref={pinElement}
      className="bg-[#F9F3EE] dark:bg-[#121212] main-section-style"
    >
      <div ref={containerRef} className="container">
        <div className="main-section-spacing">
          <MainSectionTitle title={title} className="max-w-[480px]" />

          <div className="grid gap-5 relative mt-[50px] md:grid-cols-[1fr,54%] lg:grid-cols-[1fr,65%] xl:grid-cols-[1fr,71%] xl:mt-[90px]">
            <BranTestimonialInfo {...info} />
            <div className="bg-[#FDFAF8] dark:bg-[#1B1B1B] overflow-hidden rounded-[20px] cursor-grab">
              <Carousel
                className="w-full"
                dir="ltr"
                opts={{
                  align: "start",
                  loop: true,
                }}
                setApi={setApi}
              >
                <CarouselContent>
                  {testimonial_list.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full xl:basis-1/2 me-[50px]"
                    >
                      <BranTestimonialCard {...item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <TestimonialSliderNav
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          </div>
          <div className="clients_area_inner py-[29px] mt-[60px] xl:py-[49px] border-t border-b xl:mt-20 2xl:mt-[100px]">
            <ImageAutoSlider
              slides={brands || []}
              imageClassName="opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingTestimonial;
