"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import MarketingTestimonialCard from "./MarketingTestimonialCard";
import MarketingSectionTitle from "@/components/sectionTitle/MarketingSectionTitle";
import { useRef } from "react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

type Props = {
  title: string;
  testimonials: {
    text: string;
    icon: {
      light: string;
      dark: string;
    };
    author: {
      name: string;
      post: string;
      avatar: string;
    };
  }[];
};

const MarketingTestimonial = ({ title, testimonials }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="py-[60px] md:py-[100px] 2xl:py-[130px]">
          <div className="mb-[94px]">
            <MarketingSectionTitle
              title={title}
              className="has_fade_anim max-w-[581px]"
            />
          </div>
          <div className="has_fade_anim">
            <Swiper
              modules={[Navigation, Scrollbar]}
              loop={false}
              speed={1800}
              watchSlidesProgress={true}
              spaceBetween={105}
              navigation={{
                nextEl: ".testimonial-button-next",
                prevEl: ".testimonial-button-prev",
              }}
              scrollbar={{ el: ".testimonial-scrollbar", hide: false }}
              breakpoints={{
                576: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                992: { slidesPerView: 2 },
                1201: { slidesPerView: 3 },
                1367: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={`testimonial-${index}`}>
                  <MarketingTestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="testimonial-scrollbar h-[1px] bg-border-2 mt-[48px] md:mt-[68px] xl:mt-[98px] mb-[1px] "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingTestimonial;
