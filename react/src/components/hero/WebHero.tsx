"use client";

import Link from "next/link";
import ImageComponent from "../tools/ImageComponent";
import { FaPlay } from "react-icons/fa6";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import VideoModal from "../tools/VideoModal";
import { Button } from "../ui/button";
import hasWordAnim from "@/lib/animation/hasWordAnim";

const WebHero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null!);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      hasFadeAnim();
      hasWordAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="inner-container large">
        <div className="relative pt-[50px] 2xl:pt-[100px] pb-[55px] lg:pb-[85px] xl:pb-[115px] me-0 2xl:me-[-140px] md:pe-[190px] 2xl:pe-[240px] z-[1]">
          <div className="absolute bottom-0 end-[calc(100%-200px)] w-[330px] 2xl:w-[410px] h-[410px] -z-[1]">
            <ImageComponent
              src="/assets/imgs/shape/img-s-64.png"
              darkSrc="/assets/imgs/shape/img-s-64-dark.png"
              width={410}
              height={410}
              className="w-full h-full rtl-rotate-y-180"
              alt="shape"
            />
          </div>

          <div
            className="has_word_anim absolute hidden lg:block border-s border-border end-0 top-0 w-[140px] h-full text-base leading-[1.8] ps-[30px] pt-[150px] 2xl:pt-[200px] text-text"
            data-delay="0.75"
          >
            BUILDING OUTSTANDING DESIGN & DEVELOPMENT
          </div>

          <div className="grid lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_370px] 2xl:grid-cols-[1fr_520px] gap-y-[50px] gap-x-[60px]">
            <div className="md:mt-[50px]">
              <h1 className="has_fade_anim uppercase text-[80px] xl:text-[110px] 2xl:text-[190px] leading-[0.76]">
                We are Skilled in{" "}
                <span className="text-[24px] 2xl:text-[42px] text-text leading-[0.83] font-semibold inline-block relative pb-2.5 2xl:pb-[27px] -translate-y-[17px] 2xl:-translate-y-[36px] before:absolute before:content-[''] before:w-full before:h-px before:bg-[var(--theme)] before:bottom-0 before:start-0 after:absolute after:content-[''] after:w-full after:h-px after:bg-[var(--theme)] after:bottom-1 after:start-0">
                  Web <br />
                  Design
                </span>{" "}
                and{" "}
                <span className="text-lg 2xl:text-[30px] text-text leading-[0.66] lowercase font-normal w-[70px] 2xl:w-[120px] h-[70px] 2xl:h-[120px] bg-theme inline-flex items-center pt-[9px] 2xl:pt-[19px] rounded-[24px] 2xl:rounded-[47px] rotate-180 [writing-mode:vertical-lr]">
                  development
                </span>
                <span
                  className="has_fade_anim relative inline-block -ms-5 2xl:-ms-[30px] h-[70px] 2xl:h-[120px]"
                  data-fade-offset="0"
                >
                  <ImageComponent
                    src="/assets/imgs/shape/img-s-60.png"
                    darkSrc="/assets/imgs/shape/img-s-60-light.png"
                    width={120}
                    height={120}
                    className="w-full h-full"
                    alt="shape"
                  />
                </span>
              </h1>

              <div className="relative ms-[110px] 2xl:ms-[315px] mt-[35px] 2xl:mt-[65px]">
                <div
                  className="has_fade_anim absolute top-0 end-[calc(100%+60px)] w-max"
                  data-fade-offset="0"
                  data-on-scroll="0"
                  data-delay="0.75"
                >
                  <ImageComponent
                    src="/assets/imgs/shape/img-s-61.png"
                    darkSrc="/assets/imgs/shape/img-s-61-light.png"
                    width={50}
                    height={80}
                    alt="scroll indicator"
                  />
                </div>

                <p
                  className="text-lg 2xl:text-[20px] leading-[1.37] max-w-[380px] has_fade_anim"
                  data-on-scroll="0"
                  data-delay="0.30"
                >
                  We are a full-service digital agency that builds fascinating
                  user experiences. Our team creates exceptional UI design and
                  functionality.
                </p>

                <div className="mt-[48px] has_fade_anim">
                  <Link
                    href="/contact-bold"
                    className="btn-text-flip wc-btn-underline text-sm uppercase inline-flex items-center gap-2.5"
                  >
                    <span data-text="get started now">get started now</span>
                    <ImageComponent
                      src="/assets/imgs/icon/arrow-right-half.png"
                      darkSrc="/assets/imgs/icon/arrow-right-half-light.png"
                      width={21}
                      height={7}
                      alt="arrow icon"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="has_fade_anim relative" data-fade-from="right">
                <div className="absolute top-[46px] start-[67px]">
                  <ImageComponent
                    src="/assets/imgs/shape/img-s-62.png"
                    darkSrc="/assets/imgs/shape/img-s-62-light.png"
                    className="rtl-rotate-y-180"
                    width={100}
                    height={60}
                    alt="shape"
                  />
                </div>
                <div className="absolute end-0 top-[66%] z-[1]">
                  <div className="flex items-center gap-3">
                    <Button
                      onClick={() => setIsOpen(!isOpen)}
                      className="wc-btn-circle !w-[100px] !h-[100px] !border-[5px] !border-background !bg-background-2 !text-text-2 "
                    >
                      <FaPlay />
                    </Button>
                    <span className="text-sm font-medium uppercase leading-[1.14] inline-block text-text">
                      Watch <br />
                      Video
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="mt-[160px] relative [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] rtl-rotate-y-180 after:absolute after:content-[''] after:w-full after:h-full after:bg-[#FF0000] after:top-0 after:start-0 after:mix-blend-multiply"
                    style={{
                      maskImage:
                        "url('/assets/imgs/shape/radius-half-left.png')",
                    }}
                  >
                    <ImageComponent
                      src="/assets/imgs/gallery/img-s-68.jpg"
                      width={210}
                      height={440}
                      alt="gallery image 1"
                    />
                  </div>
                  <div
                    className="[mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] rtl-rotate-y-180"
                    style={{
                      maskImage:
                        "url('/assets/imgs/shape/radius-half-right.png')",
                    }}
                  >
                    <ImageComponent
                      src="/assets/imgs/gallery/img-s-69.jpg"
                      width={251}
                      height={500}
                      alt="gallery image 2"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-[41px] flex justify-end">
                <div className="inline-block ms-auto">
                  <ImageComponent
                    src="/assets/imgs/shape/img-s-63.png"
                    darkSrc="/assets/imgs/shape/img-s-63-light.png"
                    width={80}
                    height={50}
                    className="rtl-rotate-y-180"
                    alt="shape"
                  />
                  <div className="mt-[30px]">
                    <ImageComponent
                      src="/assets/imgs/client/img-s-3.png"
                      darkSrc="/assets/imgs/client/img-s-3-light.png"
                      width={160}
                      height={55}
                      alt="customer"
                    />
                  </div>

                  <p className="text-lg mt-[15px] leading-tight">
                    <span className="underline text-text">We have 18k+</span>{" "}
                    customers <br />
                    world-wide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal
        link={
          "https://crowdytheme.com/assets/wp-content/uploads/2024/05/insurance-video.mp4"
        }
        isOpen={isOpen}
        close={closeDialog}
      />
    </section>
  );
};

export default WebHero;
