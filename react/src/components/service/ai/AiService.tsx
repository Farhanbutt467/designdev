"use client";

import AiSectionTitle from "@/components/sectionTitle/AiSectionTitle";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { TServiceType } from "@/types";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  title: string;
  services: TServiceType[];
};

const AiService = ({ title, services }: Props) => {
  const formatSerial = (serial: number) =>
    serial < 10 ? `0${serial}` : `${serial}`;
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
        <div className="main-section-spacing 2xl:!py-[130px]">
          <div
            className="has_fade_anim"
            data-fade-from="bottom"
            data-fade-offset="70"
          >
            <AiSectionTitle title={title} className="max-w-[460px]" />
          </div>
          <div className="mt-[31px] xl:mt-[41px] 2xl:mt-[51px]">
            <div>
              {services.map((service, index) => (
                <div
                  className="mt-3 first:mt-0 flex gap-x-5 sm:gap-x-[30px] xl:gap-x-10 2xl:gap-x-[55px] items-center"
                  key={`service-${service.data?.id}-${index}`}
                >
                  <span className="text-[14px] sm:text-[16px] xl:text-[20px] 2xl:text-[24px] leading-none inline-block font-normal font-instrument">
                    {formatSerial(service.data.id)}
                  </span>
                  <div>
                    <h3
                      className="has_fade_anim text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] leading-[.95] hover:text-theme transition-colors duration-300"
                      data-fade-from="left"
                      data-fade-offset="50"
                    >
                      <Link href={`/service/ai/${service.slug}`}>
                        {service.data.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiService;
