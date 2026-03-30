"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import VideoModal from "@/components/tools/VideoModal";
import { useGSAP } from "@gsap/react";
import hasPinContent from "@/lib/animation/hasPinContent";
import { ActionBtnType } from "@/types";
import hasCharAnim from "@/lib/animation/hasCharAnim";
import { convertWithBrSpan } from "@/lib/helper/converter";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useDirection, useLayout } from "@/context/app.context";
import { cn } from "@/lib/utils";
import BranAboutArea from "../about/BranAboutArea";

type Props = {
  title: string;
  sub_title: string;
  description: string;
  image: string;
  video: string;
  action_btn?: ActionBtnType;
};

const BrandingHero = ({
  title,
  sub_title,
  description,
  image,
  video,
  action_btn,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  const { layout } = useLayout();
  const { direction } = useDirection();

  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };
  const pinElement = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  useGSAP(
    () => {
      hasCharAnim();
    },
    { dependencies: [direction], scope: containerRef }
  );

  return (
    <section ref={pinElement} className="hero-area z-10 pb-[130px] relative">
      <div className="absolute w-full h-full -z-10 top-0 start-0">
        <Image
          src={image}
          alt="Hero image"
          className="w-full h-full"
          style={{ objectFit: "cover" }}
          height={2110}
          width={1920}
        />
      </div>
      <div className="container">
        <div
          ref={containerRef}
          className="pt-[120px] pb-[50px] md:pb-[80px] lg:pb-[120px] xl:pb-[150px] 2xl:pt-[200px] 2xl:pb-[200px]"
        >
          <div className="grid gap-y-[30px]  gap-x-[60px] grid-cols-auto items-end lg:grid-cols-[auto,335px] xl:grid-cols-[auto,435px]">
            <div>
              <h1
                className={cn(
                  "has_char_anim branding-hero-title !font-getaway text-text-fixed uppercase !leading-[0.83] !font-normal text-[80px] mt-0 mb-0 sm:text-[80px] sm:mt-[-2px] sm:mb-[-14px] md:text-[130px] md:mt-[-2px] md:mb-[-10px] md:tracking-[-0.04em] xl:text-[170px] xl:mb-[-14px] 2xl:text-[300px] 2xl:mt-[-3px] 2xl:mb-[-25px]",
                  layout === "box" &&
                    "xxl:text-[210px] 2xl:mt-0 2xl:mb-[-14px] 2xl:max-w-[900px]"
                )}
                dangerouslySetInnerHTML={convertWithBrSpan(title, "no-animate")}
              />
            </div>

            <div>
              <div className="relative rounded-[30px] overflow-hidden inline-block">
                <Image
                  src="/assets/imgs/hero/branding/img-s-32.jpg"
                  className="w-full h-full"
                  width={435}
                  height={260}
                  alt="image"
                />
                <span
                  onClick={() => setIsOpen(!isOpen)}
                  className="h-[80px] w-[80px] border-[2px] text-[18px] rounded-full flex items-center justify-center pos-center cursor-pointer"
                >
                  <FaPlay className="text-text-fixed-2" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <BranAboutArea aboutData={{ sub_title, description, action_btn }} />
      </div>
      <VideoModal link={video} isOpen={isOpen} close={closeDialog} />
    </section>
  );
};

export default BrandingHero;
