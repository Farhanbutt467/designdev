"use client";

import AboutBoldTestimonialCard from "@/components/testimonial/AboutBoldTestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  testimonials: {
    quote: string;
    icon: string;
    author: string;
    designation: string;
    avatar: string;
  }[];
};

const AboutBoldTestimonial = ({ testimonials }: Props) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div ref={containerRef}>
      <div className="inner-container">
        <div className="section-spacing-top">
          <div className="has_fade_anim">
            <div className="max-w-[730px] mx-auto 2xl:max-w-[910px]">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "center",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <AboutBoldTestimonialCard {...testimonial} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      current === index
                        ? "w-[30px] bg-background-2"
                        : "bg-[#e7e7e7]"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBoldTestimonial;
