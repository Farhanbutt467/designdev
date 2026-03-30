"use client";

import { buttonVariants } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ActionBtnType } from "@/types";
import { convertWithBrSpanImg } from "@/lib/helper/converter";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  sub_title: string;
  description: string;
  bg_image: string;
  image: string;
  action_btn: ActionBtnType;
  rating: number;
  reviews: number;
};

const SeoHero = ({
  title,
  sub_title,
  description,
  action_btn,
  rating,
  reviews,
  bg_image,
  image,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="container large " ref={containerRef}>
      <div className="grid xl:grid-cols-[55%_1fr] 2xl:grid-cols-[51%_1fr]">
        <div className="relative py-[50px] px-[30px] md:py-20 md:px-[60px] xl:py-[120px] 2xl:py-[170px] xl:!ps-[180px] 2xl:!ps-[200px] z-[1]">
          <div className="absolute w-full h-full top-0 start-0 z-[-1]">
            <Image
              src={bg_image}
              alt="bg-image"
              height={925}
              width={925}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="static xl:absolute start-12 xl:transform xl:-translate-y-1/2 xl:top-1/2 mb-5 xl:mb-0">
              <span className="text-base text-text-fixed xl:rotate-180 xl:[writing-mode:vertical-lr] xl:pe-[110px] relative after:hidden xl:after:absolute xl:after:inline-block after:content-[''] after:w-[1px] after:h-[90px] after:bottom-0 rtl:after:bottom-auto after:-translate-x-1/2 after:left-1/2 rtl:after:right-1/2 after:top-auto rtl:after:top-0 after:bg-current">
                {sub_title}
              </span>
            </div>
            <div>
              <h1
                className="text-[50px] sm:text-[70px] xl:text-[80px] 2xl:text-[100px] text-text-fixed mt-[-6px] leading-[.85] [&_img]:inline-block [&_img]:h-[42px] [&_img]:xs:h-[52px] [&_img]:xl:h-[62px] [&_img]:xxl:h-[72px] [&_img]:mt-[-10px] [&_img]:xs:mt-[-13px] [&_img]:xl:mt-[-18px] has_text_mov_anim"
                dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
              />
            </div>
          </div>
          <div className="mt-[32px] lg:mt-[42px]">
            <p
              className="has_fade_anim text-xl xl:text-2xl leading-[1.33] max-w-[490px] text-[#555555]"
              data-fade-from="left"
              data-delay="0.7"
            >
              {description}
            </p>
          </div>
          {action_btn?.enable && (
            <div
              className="has_fade_anim mt-[32px] lg:mt-[42px]"
              data-fade-from="left"
              data-delay="1.2"
            >
              <Link
                href={action_btn.link}
                className={cn(
                  buttonVariants({ variant: "Seo" }),
                  "bg-background-fixed text-text-fixed-2"
                )}
              >
                <span data-text={action_btn.label}>{action_btn.label}</span>
                <FaAngleRight className="!w-[10px] !h-[18px] rtl:rotate-180" />
              </Link>
            </div>
          )}
          <div
            className="has_fade_anim mt-10 border-t border-text-fixed inline-flex"
            data-delay="1.2"
            data-on-scroll="0"
          >
            <div>
              <h2 className="text-[50px] leading-none mt-[13px] text-text-fixed">
                {rating}
              </h2>
              <span className="text-[14px] leading-none inline-block text-[#555555]">
                {`(${reviews} reviews)`}
              </span>
            </div>
            <div className="border-s border-text-fixed ps-5 ms-[15px]">
              <span className="text-[18px] leading-none inline-block mt-[17px] text-text-fixed">
                Average Rating
              </span>
              <div className="flex gap-1 mt-[15px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src="/assets/imgs/icon/star-2.png"
                    alt="star"
                    width={25}
                    height={25}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="thumb">
          <Image
            src={image}
            alt="image"
            width={895}
            height={925}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SeoHero;
