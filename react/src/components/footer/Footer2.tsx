"use client";

import Image from "next/image";
import { useRef } from "react";
import siteConfig from "@/config/siteConfig.json";
import EmailInput2 from "@/components/elements/input/EmailInput2";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBrSpan } from "@/lib/helper/converter";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { cn } from "@/lib/utils";

type Props = {
  data: {
    title: string;
    subtitle: string;
    locationData: {
      id: number;
      city: string;
      address: string;
    }[];

    navData: {
      id: number;
      name: string;
      path: string;
    }[];
  };
  TitleclassName?: string;
};

const Footer2 = ({ data, TitleclassName }: Props) => {
  const { title, subtitle, locationData, navData } = data;
  const { copyright } = siteConfig.footer_info;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <footer className="bg-background-3 overflow-hidden">
      <div className="container2" ref={containerRef}>
        <div className="relative z-10 section-spacing-top">
          <div className="hidden md:block absolute top-0 start-[calc(100%-235px)] -z-10 w-[350px] xl:w-[550px]">
            <Image
              src="/assets/imgs/shape/img-s-33.png"
              width={550}
              height={508}
              alt="shape_1"
              className="h-auto max-w-full inline-block"
            />
          </div>

          <div>
            <div>
              <h2
                className={cn(
                  "leading-none text-text-fixed-2 text-[35px] md:text-[40px] lg:text-[70px] xl:text-[100px] -mt-2 md:-mt-[9px] lg:-mt-[17px] xl:-mt-[25px] has_text_mov_anim",
                  TitleclassName
                )}
                dangerouslySetInnerHTML={convertWithBrSpan(title)}
              />
            </div>
            <div className="mt-[18px]">
              <p className="has_fade_anim text-[18px] md:text-[26px] xl:text-[32px] 2xl:text-[30px] max-w-[850px] text-text-fixed-3 font-light">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="border-t border-[#ffffff14] mt-10 md:mt-[50px] 2xl:mt-[60px] py-[39px] md:py-[59px] 2xl:pb-[79px] grid gap-y-[30px] gap-x-10 xl:gap-x-[120px] md:grid-cols-[150px_150px_1fr] lg:grid-cols-[190px_190px_1fr]">
            {locationData.map((item, i) => (
              <div key={item.id}>
                <h2 className="text-[20px] text-text-fixed-2 leading-[1.5]">
                  {item.city}
                </h2>
                <ul className=" mt-[11px]">
                  <li className="text-[16px] leading-[1.46] text-text-fixed-3">
                    {item.address}
                  </li>
                </ul>
              </div>
            ))}

            <EmailInput2 />
          </div>
        </div>
      </div>

      <div className="bg-background-3">
        <div className="container2">
          <div className="border-t border-[#ffffff14] flex flex-col xl:flex-row justify-between items-center py-[35px] gap-y-5 gap-x-[60px]">
            <div className="">
              <p className="text text-[16px] leading-[1.37] text-text-fixed-3">
                {copyright.label} | {copyright.label_2}{" "}
                <a
                  href={copyright.link}
                  target="_blank"
                  className="text-text-fixed-2 hover:text-text-fixed-3 transition-all duration-300"
                >
                  {copyright.company}
                </a>
              </p>
            </div>
            <ul className=" flex flex-wrap gap-y-[10px] gap-x-[38px] md:gap-x-[78px]">
              {navData.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className="text-[16px] text-text-fixed-2 hover:text-text-fixed-3 transition-all duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
