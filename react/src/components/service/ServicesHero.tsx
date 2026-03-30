"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import ImageComponent from "../tools/ImageComponent";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  description: string;
  image: string;
};

const ServicesHero = ({ title, description, image }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasTextMovAnim();
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="container2" ref={containerRef}>
      <div className="pt-[137px] 2xl:pt-[187px] grid justify-between gap-y-10 gap-x-[60px] md:grid-cols-[1fr_330px] lg:grid-cols-[1fr_430px] xl:grid-cols-[1fr_630px]">
        <div>
          <InnerSectionTitle
            title={title}
            className="md:mt-10 large"
            heading1
            animation="has_text_mov_anim"
          />
          <div className="mt-6 lg:mt-[14px] lg:ms-[140px]">
            <p className="has_fade_anim max-w-full lg:indent-[60px] lg:max-w-[300px]">
              {description}
            </p>
          </div>
          <div className="has_fade_anim hidden lg:block ms-[140px] mt-[54px]">
            <ImageComponent
              src="/assets/imgs/shape/img-s-82.png"
              darkSrc="/assets/imgs/shape/img-s-82-light.png"
              width={40}
              height={80}
              alt="icon"
            />
          </div>
        </div>
        <div>
          <Image src={image} width={630} height={820} alt="service_thumb" />
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
