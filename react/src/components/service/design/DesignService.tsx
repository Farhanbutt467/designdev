"use client";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { ActionBtnType, TServiceType } from "@/types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  description: string;
  sub_title: string;
  action_btn: ActionBtnType;
  services: TServiceType[];
};

const DesignService = ({
  title,
  description,
  sub_title,
  action_btn,
  services,
}: Props) => {
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
        <div className="main-section-spacing">
          <div className="grid gap-y-[35px] gap-x-[60px] xl:grid-cols-[auto_880px]">
            <div>
              <span className="text-[16px] uppercase block mt-[-3px]">
                {sub_title}
              </span>
            </div>
            <div>
              <DesignSectionTitle title={title} animation="has_fade_anim" />
              <div className="mt-[55px]">
                <div
                  className="has_fade_anim grid gap-x-20 md:grid-cols-2"
                  data-fade-from="left"
                >
                  {services.map((service, index) => (
                    <Link
                      href={`/service/design/${service.slug}`}
                      key={service.data.id}
                      className="border-b border-background-2 md:[&:nth-child(2)]:border-t first:border-t"
                    >
                      <div className="group service-box flex py-[15px] lg:py-[22px] justify-between items-center">
                        <h3 className="text-[18px] lg:text-[22px] font-normal leading-[1.07]">
                          {service.data.title}
                        </h3>
                        <span className="opacity-0 group-hover:opacity-100 -rotate-45 transition-all duration-300 rtl:-rotate-[135deg]">
                          <FaArrowRightLong />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-10 lg:mt-[60px] xl:mt-[100px] grid gap-y-[30px] gap-x-20 sm:grid-cols-[auto_1fr] items-center">
                <div className="btn-move has_fade_anim" data-ease="bounce">
                  <CircleFillButton
                    text={action_btn.label}
                    href={action_btn.link}
                    className="!font-normal"
                  />
                </div>
                <div>
                  <p className="text has_fade_anim max-w-[375px]">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignService;
