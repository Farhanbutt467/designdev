"use client";

import { useState } from "react";
import CarouselCard from "@/components/portfolio/carousel/CarouselCard";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CarouselSkeletonCard } from "@/components/portfolio/carousel/CarouselSkeletonCard";
import SliderNav from "@/components/portfolio/SliderNav";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCarousel } from "@/lib/plugins";

import "@/styles/swiper-slider.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { cn } from "@/lib/utils";

type Props = {
  data: {
    image: string;
    title: string;
    tag: string;
  }[];
};

const PortfolioCarousel = ({ data }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="container !max-w-[1850px]">
      <div className=" pt-[100px] pb-[100px] h-[100vh]">
        <div
          id="app"
          className="relative z-10 h-full flex items-center justify-center"
        >
          {isLoading && (
            <div className=" !mx-auto pos-center">
              <CarouselSkeletonCard />
            </div>
          )}
          <Swiper
            className={cn(
              "swiper-carousel !max-w-[1400px] relative !mx-auto !overflow-hidden opacity-100",
              isLoading && "opacity-0"
            )}
            modules={[EffectCarousel, Navigation, Pagination, Autoplay]}
            dir="ltr"
            effect="carousel"
            grabCursor={true}
            loop={true}
            loopAdditionalSlides={1}
            slidesPerView="auto"
            navigation={{
              nextEl: ".portfolio-button-next",
              prevEl: ".portfolio-button-prev",
            }}
            pagination={{
              el: ".portfolio-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
            }}
            onInit={(swiper) => {
              setIsLoading(false);
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide !h-[310px] sm:!h-[360px] !w-[600px] xl:!h-[450px] xl:!w-[700px] 2xl:!h-[550px] 2xl:!w-[800px] !max-w-[calc(100%-48px)]"
              >
                <CarouselCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderNav position="top" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
