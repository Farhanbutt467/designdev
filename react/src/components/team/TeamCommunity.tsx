"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  description: string;
  gallery: string[];
};

const TeamCommunity = ({ title, description, gallery }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="container2" ref={containerRef}>
      <div className="main-section-spacing">
        <InnerSectionTitle
          title={title}
          className="max-w-[750px] mt-[-10px] mx-auto text-center lg:text-[36px]"
        />
        <div className="mt-[23px]">
          <p className="has_fade_anim xl:text-[24px] leading-[1.27] max-w-[850px] mx-auto text-center">
            {description}
          </p>
        </div>
        <div className="mt-[43px] xl:mt-[63px]">
          <div className="has_fade_anim grid gap-[30px] grid-cols-[auto_auto_auto]">
            <div className="mt-[30px] xl:mt-[140px]">
              <div className="thumb">
                <Image
                  src={gallery[0]}
                  alt="thumb_1"
                  width={300}
                  height={450}
                />
              </div>
            </div>
            <div className="mt-[10px] md:mt-[30px]">
              <div className="thumb">
                <Image
                  src={gallery[1] || gallery[0]}
                  alt="thumb_2"
                  width={520}
                  height={700}
                />
              </div>
            </div>
            <div className="mt-[70px]">
              <div className="thumb">
                <Image
                  src={gallery[2] || gallery[0]}
                  alt="thumb_3"
                  width={230}
                  height={140}
                />
              </div>
              <div className="thumb mt-[10px] md:mt-[30px]">
                <Image
                  src={gallery[3] || gallery[0]}
                  alt="thum_4"
                  width={410}
                  height={330}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCommunity;
