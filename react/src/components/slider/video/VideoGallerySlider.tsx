"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  images: string[];
};

const VideoGallerySlider = ({ images }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef}>
      <div className="has_fade_anim mt-[30px]">
        <div className="inner-container large2">
          <div>
            <Swiper
              modules={[Navigation, Pagination]}
              loop={false}
              slidesPerView="auto"
              spaceBetween={30}
              speed={1800}
              watchSlidesProgress={true}
              navigation={{
                nextEl: ".gallery-button-next",
                prevEl: ".gallery-button-prev",
              }}
              pagination={{
                el: ".gallery-pagination",
                clickable: true,
              }}
            >
              {images.map((item, index) => (
                <SwiperSlide key={index} className="!w-auto !max-w-full">
                  <div>
                    <ImageComponent
                      src={item}
                      width={index % 2 === 0 ? 375 : 910}
                      height={index % 2 === 0 ? 470 : 600}
                      alt="slider img"
                      className="max-w-full"
                    />
                  </div>
                </SwiperSlide>
              ))}

              <div className="gallery-pagination pagination-dot flex justify-center mt-10 xl:mt-[50px] 2xl:mt-[70px] gap-[5px]"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallerySlider;
