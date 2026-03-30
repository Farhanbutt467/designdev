"use client";

import { convertWithBr } from "@/lib/helper/converter";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import Link from "next/link";

type Props = {
  title: string;
  direct_contact: {
    title: string;
    link: string;
  };
  images: string[];
};

const ContactHero = ({ title, direct_contact, images }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="inner-container" ref={containerRef}>
      <div className="pt-[127px] xl:pt-[147px] 2xl:pt-[217px] pb-[30px] md:me-[calc((100vw-var(--container-max-widths))/-2-3px)]">
        <div className="grid gap-y-10 gap-x-[60px] lg:grid-cols-[1fr_580px] xl:grid-cols-[1fr_840px] 2xl:grid-cols-[1fr_960px]">
          <h1
            className="inner-section-title large has_fade_anim 2xl:!text-[120px] !leading-[0.94]"
            dangerouslySetInnerHTML={convertWithBr(title)}
          />
          <div className="grid gap-[15px] md:gap-[30px] items-end sm:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr]">
            <div className="grid gap-[15px] md:gap-[30px]">
              <div className="image_box overflow_hidden !overflow-hidden">
                {images?.[0] && (
                  <Image
                    src={images?.[0]}
                    alt="image-1"
                    width={300}
                    height={380}
                    className="max-w-full"
                    priority
                  />
                )}
              </div>
              <div className="z-10 relative bg-background-3 px-[30px] pt-[85px] pb-[40px]">
                <div className="shape-1 absolute -z-10 top-[10px] end-[10px]">
                  <Image
                    src="/assets/imgs/shape/img-s-89.png"
                    width={77}
                    height={62}
                    alt="shape"
                  />
                </div>
                <span className="text-text-fixed-3">Direct contact: </span>
                <p className="link text-[24px] leading-none mt-3 text-text-fixed-2 hover:text-text-fixed-3 transition-all duration-300">
                  <Link href={direct_contact?.link}>
                    {direct_contact?.title}
                  </Link>
                </p>
              </div>
            </div>
            <div className="grid gap-[15px] md:gap-[30px]">
              <div className="image_box">
                {images?.[1] && (
                  <Image
                    src={images?.[1]}
                    alt="image-2"
                    width={630}
                    height={330}
                    className="max-w-full"
                  />
                )}
              </div>
              <div className="!overflow-hidden">
                {images?.[2] && (
                  <Image
                    src={images?.[2]}
                    alt="image-3"
                    width={630}
                    height={400}
                    className="max-w-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
