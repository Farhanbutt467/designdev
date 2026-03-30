"use client";

import Image from "next/image";
import { TServiceType } from "@/types";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import SeoServiceCard from "./SeoServiceCard";
import SeoSectionTitle from "@/components/sectionTitle/SeoSectionTitle";

type Props = {
  title: string;
  bg_image: string;
  services: TServiceType[];
};

const SeoService = ({ services, title, bg_image }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="inner-container large" ref={containerRef}>
      <div className="bg-[#121212] relative z-[1] px-[15px] lg:px-[45px]">
        <div className="main-section-spacing">
          <div className="bg absolute w-full h-full top-0 start-0 z-[-1]">
            <Image
              src={bg_image}
              alt="bg img"
              width={1779}
              height={1122}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="inner-container">
            <SeoSectionTitle
              title={title}
              className="max-w-[700px] text-text-fixed-2"
            />
            <div className="services_wrapper_box mt-[50px] xl:mt-[70px] 2xl:mt-[90px]">
              <div className="services_wrapper">
                {services.map((item, index) => (
                  <SeoServiceCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoService;
