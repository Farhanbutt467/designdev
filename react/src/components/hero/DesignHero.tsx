"use client";

import Link from "next/link";
import ImageComponent from "@/components/tools/ImageComponent";
import { ActionBtnType } from "@/types";
import { convertWithBr } from "@/lib/helper/converter";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasCharAnim from "@/lib/animation/hasCharAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasWordAnim from "@/lib/animation/hasWordAnim";

type Props = {
  title: string;
  description: string;
  address: string;
  bg_video: string;
  action_btn: ActionBtnType;
};

const DesignHero = ({
  title,
  description,
  address,
  bg_video,
  action_btn,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasCharAnim();
      hasWordAnim();
    },
    { scope: containerRef }
  );
  return (
    <section
      className="bg-background-fixed  relative pt-[100px]"
      ref={containerRef}
    >
      <div className="absolute w-full h-full top-0 start-0">
        <video
          className="w-full h-full object-cover"
          src={bg_video}
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute w-full h-full bg-black top-0 start-0 opacity-80 mix-blend-multiply"></div>
      </div>
      <div className="inner-container">
        <div className="section-spacing-bottom relative">
          <div>
            <div
              className="has_fade_anim"
              data-fade-from="top"
              data-ease="bounce"
              data-fade-offset="150"
              data-duration="2"
              data-delay="0.15"
            >
              <Link
                href={action_btn.link}
                className="group wc-btn-underline w-[230px] sm:w-[350px] !pb-0 !pt-[19px] justify-between text-white before:top-0 before:!h-[1px]"
              >
                <ImageComponent
                  src={action_btn.label}
                  alt="btn"
                  width={65}
                  height={14}
                />
                <FaArrowRightLong className="-rotate-45 group-hover:rotate-0 transition-all duration-300" />
              </Link>
              <p
                className="text-[18px] leading-6 text-white mt-4"
                dangerouslySetInnerHTML={convertWithBr(address)}
              />
            </div>
            <div className="mt-[104px] 2xl:mt-[154px]">
              <div className="title-wrapper relative">
                <ImageComponent
                  src="/assets/imgs/shape/img-s-34.png"
                  width={28}
                  height={28}
                  dataDelay="1.2"
                  dataFadeOffset="0"
                  dataFadeFrom="bottom"
                  alt="shape"
                  className="absolute top-0 start-0 rtl:rotate-180 rtl:start-[-30px] hidden xl:block"
                />
                <h1
                  className="has_char_anim text-[55px] sm:text-[80px] md:text-[130px] xl:text-[160px] 2xl:text-[250px] leading-[.9] text-white uppercase"
                  data-translateX="150"
                  data-delay=".45"
                >
                  {title}
                  <img
                    className="inline-block has_fade_anim h-10 sm:h-[60px] md:h-[93px] xl:h-[113px] 2xl:h-[183px] mt-[-9px] sm:mt-[-13px] md:mt-[-20px] xl:mt-[-30px] 2xl:mt-[-40px] rtl:rotate-180"
                    data-fade-from="left"
                    data-delay="1.3"
                    src="/assets/imgs/shape/o-switch.png"
                    alt="shape"
                  />
                </h1>
              </div>
            </div>
            <div className="mt-5 lg:mt-0 lg:absolute end-0 top-0 ">
              <p
                className="has_word_anim text-white font-beatricetrial text-[18px] xl:text-[20px] leading-[1.38] max-w-[400px]"
                data-duration="1"
                data-translateX="50"
                data-delay=".30"
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignHero;
