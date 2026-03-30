"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative } from "swiper/modules";
import SpringCard from "@/components/portfolio/spring/SpringCard";
import SliderNav from "@/components/portfolio/SliderNav";
import { SpringSLiderEffect } from "@/lib/swiper-modules/SpringSlider";
import { SpringSkeletonCard } from "@/components/portfolio/spring/SpringSkeletonCard";

type Props = {
  data: {
    image: string;
    title: string;
    tag: string;
  }[];
};

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/swiper-slider.css";
import { cn } from "@/lib/utils";

const PortfolioSpring = ({ data }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const resetDelay = (swiper: any) => {
    swiper.slides.forEach((slideEl: any) => {
      slideEl.style.transitionDelay = "0ms";
    });
  };

  return (
    <section className="portfolio-area">
      <div className="container !max-w-[1850px]">
        <div className="portfolio-area-inner pt-20 pb-20 2xl:pt-[100px] 2xl:pb-[100px]">
          <div className=" h-[calc(100vh-160px)] 2xl:h-[calc(100vh-200px)] flex items-center relative">
            {isLoading && (
              <div className="h-full w-full !mx-auto pos-center !-translate-y-[25%]">
                <SpringSkeletonCard />
              </div>
            )}
            <Swiper
              className={cn(
                "portfolio-slider w-full px-5 box-border opacity-100",
                isLoading && "opacity-0"
              )}
              modules={[Navigation, Pagination, EffectCreative]}
              dir="ltr"
              effect="creative"
              speed={720}
              onProgress={(swiper) => {
                SpringSLiderEffect(swiper);
              }}
              followFinger={false}
              creativeEffect={{
                limitProgress: 100,
                prev: {
                  translate: ["-100%", 0, 0],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              slidesPerView={1}
              spaceBetween={40}
              navigation={{
                prevEl: ".portfolio-button-prev",
                nextEl: ".portfolio-button-next",
              }}
              pagination={{
                el: ".portfolio-pagination",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                800: {
                  slidesPerView: 3,
                },
                1100: {
                  slidesPerView: 4,
                },
              }}
              onInit={(swiper) => {
                resetDelay(swiper);
                setIsLoading(false);
              }}
              onTransitionEnd={(swiper) => {
                resetDelay(swiper);
              }}
              onTouchStart={(swiper) => {
                resetDelay(swiper);
              }}
              onResize={(swiper) => {
                resetDelay(swiper);
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="swiper-slide box-border px-5"
                >
                  <SpringCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <SliderNav position="top" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSpring;
