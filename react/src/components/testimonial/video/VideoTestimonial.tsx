"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/thumbs";
import VideoTestimonialAvatarCard from "./VideoTestimonialAvatarCard";
import TestimonialQuoteCard from "./TestimonialQuoteCard";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type TestimonialProps = {
  testimonials: {
    text: string;
    author: { name: string; post: string; avatar: string };
  }[];
};

const VideoTestimonial = ({ testimonials }: TestimonialProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="inner-container has_fade_anim">
        <div>
          <div className="max-w-[1070px] mx-auto">
            <div>
              <Swiper
                modules={[Thumbs]}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                spaceBetween={30}
              >
                {testimonials.map((item, idx) => (
                  <SwiperSlide key={`main-test-${idx}`}>
                    <TestimonialQuoteCard text={item.text} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView={1}
                freeMode
                watchSlidesProgress
                breakpoints={{
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 3 },
                }}
                className="testimonial-slide-thumb mt-[37px] xl:mt-[67px] 2xl:mt-[87px] border-b max-w-[700px]"
              >
                {testimonials.map((item, idx) => (
                  <SwiperSlide
                    key={`thumbs-${idx}`}
                    className="border-b border-opacity-50 border-transparent opacity-50"
                  >
                    <VideoTestimonialAvatarCard {...item.author} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;
