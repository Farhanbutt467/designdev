"use client";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ActionBtnType, TServiceType } from "@/types";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import BranServiceCard from "@/components/service/branding/BranServiceCard";
import Link from "next/link";
import MainSectionTitle from "@/components/sectionTitle/MainSectionTitle";

type Props = {
  title: string;
  info: string;
  action_btn: ActionBtnType;
  services: TServiceType[];
};

const BrandingService = ({ title, info, action_btn, services }: Props) => {
  const pinContent = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinContent.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section
      ref={pinContent}
      className="main-section-style bg-background-fixed"
    >
      <div ref={containerRef} className="container">
        <div className="main-section-spacing">
          <MainSectionTitle
            title={title}
            className="max-w-[845px] text-text-fixed-2"
          />
          <div className="mt-[50px] xl:mt-[90px]">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {services.map((item, index) => (
                <BranServiceCard key={index} {...item} />
              ))}
            </div>
          </div>
          <div
            className="has_fade_anim text-center mt-[50px] xl:mt-[70px] "
            data-fade-from="left"
          >
            <p className="bg-[#1C1C1C] max-w-[500px] leading-[1.41] text-[18px] inline-block text-center rounded-[100px] py-[19px] px-[41px] text-text-fixed-2">
              {info}
              <br />
              {action_btn?.enable && (
                <Link
                  href={action_btn.link}
                  className="wc-btn-underline font-normal tracking-normal relative inline-flex items-center gap-[10px] whitespace-nowrap"
                >
                  {action_btn.label}
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingService;
