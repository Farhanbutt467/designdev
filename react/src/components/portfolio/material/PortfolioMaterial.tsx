"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SliderNav from "@/components/portfolio/SliderNav";
import { EffectMaterial } from "@/lib/plugins";
import MaterialCard from "@/components/portfolio/material/MaterialCard";

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
import MaterialSkeletonCard from "@/components/portfolio/material/MaterialSkeletonCard";
import { cn } from "@/lib/utils";

const PortfolioMaterial = ({ data }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="container !max-w-[1850px]">
      <div className="py-20 2xl:py-[100px]">
        <div className="portfolio-slider relative z-[1] h-[calc(100vh-160px)] 2xl:h-[calc(100vh-200px)]">
          {isLoading && (
            <div className="h-full w-full !mx-auto pos-center ">
              <MaterialSkeletonCard />
            </div>
          )}
          <Swiper
            className={cn(
              "h-full !mx-auto relative !overflow-hidden list-none p-0 z-[1] opacity-100",
              isLoading && "opacity-0"
            )}
            modules={[Navigation, Pagination, EffectMaterial]}
            dir="ltr"
            effect="material"
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={30}
            speed={600}
            navigation={{
              nextEl: ".portfolio-button-next",
              prevEl: ".portfolio-button-prev",
            }}
            pagination={{
              el: ".portfolio-pagination",
              type: "bullets",
              clickable: true,
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              992: { slidesPerView: 2 },
              1201: { slidesPerView: 2 },
              1367: { slidesPerView: 2 },
            }}
            onInit={(swiper) => {
              setIsLoading(false);
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide"
                data-fade-from="left"
              >
                <div className="swiper-material-wrapper">
                  <div className="swiper-material-content">
                    <MaterialCard {...item} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderNav position="top" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioMaterial;
