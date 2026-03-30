"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import DesignTestimonialCard from "./DesignTestimonialCard";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type TestimonialProps = {
  title: string;
  sub_title: string;
  description: string;
  count: string;
  testimonial_list: {
    video: string;
    author: {
      name: string;
      designation: string;
    };
  }[];
};

const DesignTestimonial = ({
  title,
  description,
  sub_title,
  count,
  testimonial_list,
}: TestimonialProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="bg-background-fixed" ref={containerRef}>
      <div className="inner-container">
        <div className="main-section-spacing">
          <div className="grid gap-y-[35px] gap-x-[60px] grid-cols-1 md:grid-cols-[600px] xl:grid-cols-[auto_880px]">
            <div>
              <span className=" text-white text-[16px] uppercase block mt-[-3px]">
                {sub_title}
              </span>
            </div>
            <div>
              <DesignSectionTitle
                title={title}
                className="text-white max-w-[553px]"
              />
              <div
                className="has_fade_anim relative mt-[85px] overflow-hidden"
                data-fade-from="bottom"
              >
                <div className="md:absolute top-0 w-full md:w-[235px] xl:w-[315px] 2xl:w-[405px] xl:pe-10 2xl:pe-[90px] md:border-b border-b-[rgba(255,255,255,0.08)] pb-[10px] z-[2] lg:after:content-[''] after:absolute after:w-[1px] after:h-[1000px] after:bg-[#FFFFFF2B] after:end-[-1px] after:top-[-150px]">
                  <h3 className="wc-counter text-[70px] md:text-[100px] 2xl:text-[120px] text-white mb-[35px] leading-[.87]">
                    {count}
                  </h3>
                  <p className="text-[18px] leading-[1.44] mb-[43px] text-text-fixed-3">
                    {description}
                  </p>
                </div>

                <Swiper
                  modules={[EffectFade, Autoplay, Pagination]}
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={30}
                  autoplay={{ delay: 3000 }}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  pagination={{
                    el: ".b-ts-pagination",
                    type: "fraction",
                    renderFraction: (currentClass, totalClass) => {
                      return `<span class="${currentClass}"></span> <span class="dash inline-block bg-white w-[100px] h-[1px]"></span> <span class="${totalClass}"></span>`;
                    },
                    formatFractionCurrent: (number) => ("0" + number).slice(-2),
                    formatFractionTotal: (number) => ("0" + number).slice(-2),
                  }}
                >
                  {testimonial_list.map((item, index) => (
                    <SwiperSlide key={index}>
                      <DesignTestimonialCard {...item} />
                    </SwiperSlide>
                  ))}
                  <div className="b-ts-pagination absolute start-0 bottom-0 !text-white text-[14px] flex gap-[10px] items-center"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignTestimonial;
