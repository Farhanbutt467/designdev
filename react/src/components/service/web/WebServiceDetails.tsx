"use client";

import { useRef } from "react";
import { TServiceType } from "@/types";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import ImageComponent from "@/components/tools/ImageComponent";

const WebServiceDetails = ({ data }: TServiceType) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { title, description, image, features, frameworks } = data;

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="pt-[117px] xl:pt-[167px] 2xl:pt-[207px]">
          <div className="grid gap-y-[10px] gap-x-[60px] md:grid-cols-[1fr,330px] lg:grid-cols-[1fr,410px]">
            <WebSectionTItle
              heading1={true}
              title={title}
              className="2xl:!text-[120px] max-w-[630px]"
            />
            <div className="has_fade_anim" data-delay="0.30">
              <div className="pb-[10px] xl:pb-[10px]">
                <p className="text">{description}</p>
              </div>
              <div className="mt-[19px] ps-[25px] relative before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-background-2 before:rounded-full before:top-[5px] before:start-0">
                <h4 className="text-[24px] leading-[1.06] !font-semibold uppercase">
                  Service Tag
                </h4>
                <ul className="mt-[9px]">
                  {features.map((item, index) => (
                    <li
                      className="text-[16px] leading-[1.62] text-text-3"
                      key={index}
                    >
                      + {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-[19px] ps-[25px] relative before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-background-2 before:rounded-full before:top-[5px] before:start-0">
                <h4 className="text-[24px] leading-[1.06] !font-semibold uppercase">
                  Framework
                </h4>
                <ul className="mt-[9px]">
                  {frameworks?.map((item, index) => (
                    <li
                      className="text-[16px] leading-[1.62] text-text-3"
                      key={index}
                    >
                      + {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden has_fade_anim mt-[33px] xl:mt-[53px] 2xl:mt-[63px]"
            data-fade-offset="0"
            data-delay="0.45"
          >
            <ImageComponent
              src={image}
              width={1290}
              height={630}
              dataSpeed={0.8}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebServiceDetails;
