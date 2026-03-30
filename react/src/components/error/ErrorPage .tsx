"use client";

import ButtonFlip from "@/components/elements/button/ButtonFlip";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ImageComponent from "../tools/ImageComponent";

type Props = {
  data: {
    image: {
      dark: string;
      light: string;
    };
    title: string;
    description: string;
    btn_text: string;
    shape: {
      dark: string;
      light: string;
    };
  };
};

const ErrorPage = ({ data }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const { image, title, description, btn_text, shape } = data;
  return (
    <section className="h-[100vh] pt-[70px] flex items-center justify-center">
      <div className="container2" ref={containerRef}>
        <div className="main-section-spacing">
          <div className="relative text-center">
            <div className=" hidden md:block absolute top-[calc(100%+13px)] start-[110px] ">
              <ImageComponent
                src={shape.dark}
                darkSrc={shape.light}
                width={38}
                height={38}
                className="inline-block max-w-full"
                alt="shape_dark"
              />
            </div>
            <div className="has_fade_anim flex justify-center" data-delay=".15">
              <ImageComponent
                src={image.dark}
                darkSrc={image.light}
                priority
                width={464}
                height={154}
                className="max-w-[200px] md:max-w-[264px] xl:max-w-[464px] h-auto"
                alt="error_img_dark"
              />
            </div>
            <div className="mt-8 xl:mt-[42px]">
              <div>
                <h1
                  className="has_fade_anim inner-section-title font-normal"
                  data-delay=".30"
                >
                  {title}
                </h1>
              </div>
            </div>
            <div className="mt-4">
              <p
                className="has_fade_anim mx-auto max-w-[340px]"
                data-delay=".45"
              >
                {description}
              </p>
            </div>
            <div
              className="has_fade_anim mt-[33px] xl:mt-[43px]"
              data-delay=".60"
            >
              <ButtonFlip
                btnText={btn_text}
                className="bg-background text-text"
                link="/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
