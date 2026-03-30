"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { EffectSlicer } from "@/lib/plugins";
import SliderNav from "@/components/portfolio/SliderNav";
import SlicerCard from "@/components/portfolio/slicer/SlicerCard";
import SlicerSkeletonCard from "@/components/portfolio/slicer/SlicerSkeletonCard";

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

const PortfolioSlicer = ({ data }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="portfolio-area">
      <div className="portfolio-area-inner">
        <div
          id="app"
          className="h-[100vh] flex items-center justify-center relative z-[1]"
        >
          {isLoading && (
            <div className="h-full w-full !mx-auto pos-center ">
              <SlicerSkeletonCard />
            </div>
          )}
          <Swiper
            className={cn(
              "w-full h-full opacity-100",
              isLoading && "opacity-0"
            )}
            spaceBetween={50}
            slidesPerView={1}
            modules={[EffectSlicer, Navigation, Pagination, Autoplay]}
            dir="ltr"
            effect="slicer"
            direction="vertical"
            speed={600}
            grabCursor={true}
            pagination={{
              el: ".portfolio-pagination",
            }}
            navigation={{
              nextEl: ".portfolio-button-next",
              prevEl: ".portfolio-button-prev",
            }}
            onInit={(swiper) => {
              setIsLoading(false);
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <SlicerCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderNav
            position="bottom"
            className="container !max-w-[1850px]"
            paginationClassName="[&_.swiper-pagination-bullet]:!bg-background-fixed"
            buttonClassName="text-text-fixed"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlicer;
