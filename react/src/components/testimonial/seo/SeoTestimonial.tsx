"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TSeoClientsFeedback } from "@/types";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

type Props = {
  clientFeedbackSection: TSeoClientsFeedback;
  testimonials: {
    icon: {
      light: string;
      dark: string;
    };
    content: string;
    author: {
      name: string;
      position: string;
    };
  }[];
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import SeoClientsFeedback from "@/components/testimonial/seo/SeoClientsFeedback";
import SeoTestimonialCard from "@/components/testimonial/seo/SeoTestimonialCard";

const SeoTestimonial = ({ clientFeedbackSection, testimonials }: Props) => {
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

  return (
    <div className="inner-container">
      <div className="main-section-spacing grid gap-y-10 gap-x-[60px] grid-cols-1 lg:grid-cols-[1fr_470px] xl:grid-cols-[1fr_740px]">
        <SeoClientsFeedback clientsFeedback={clientFeedbackSection} />
        <div className="has_fade_anim relative" data-fade-from="bottom">
          <div className="py-[30px] px-5 md:py-[50px] md:px-[60px] xl:py-20 xl:px-[100px] bg-background dark:bg-[#1C1C1C] shadow-[0px_30px_200px_0px_rgba(16,25,56,0.08)] rounded-[5px]">
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
                {testimonials.map((item, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <SeoTestimonialCard
                      testimonial={item}
                      iconClassName="w-[34px] h-[28px] xl:h-[28px]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="hidden lg:flex rtl:md:flex-row-reverse justify-between absolute top-1/2 -translate-y-1/2 w-[calc(100%+60px)] ms-[-30px] xl:w-[calc(100%+70px)] xl:ms-[-35px]">
            <Button
              onClick={handlePrevious}
              variant="circle"
              className="border-border text-text !h-[70px] !w-[70px] hover:bg-primary hover:text-text-fixed-2"
            >
              <FaArrowLeft />
            </Button>
            <Button
              onClick={handleNext}
              variant="circle"
              className="border-border text-text !h-[60px] !w-[60px] xl:!h-[70px] xl:!w-[70px] hover:bg-primary hover:text-text-fixed-2"
            >
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoTestimonial;
