"use client";

import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import ImageComponent from "@/components/tools/ImageComponent";
import { convertWithBr } from "@/lib/helper/converter";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  sub_title: string;
  shape: {
    light: string;
    dark: string;
  };
  award_list: {
    platform: string;
    achievement: string;
    result: string;
  }[];
};

const DesignAward = ({ title, sub_title, shape, award_list }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="main-section-spacing relative z-[1]">
          <div className="absolute bottom-[-40px] start-[33%] z-[-1] mt-[58px] max-w-[528px]">
            <ImageComponent
              src={shape.light}
              darkSrc={shape.dark}
              width={628}
              height={790}
              alt="shape"
              className="rtl:rotate-180"
            />
          </div>
          <div className="grid gap-y-[35px] gap-x-[60px] grid-cols-[auto] xl:grid-cols-[auto_880px]">
            <span
              className="text-[16px] uppercase block mt-[-3px]"
              dangerouslySetInnerHTML={convertWithBr(sub_title)}
            />
            <div>
              <DesignSectionTitle title={title} />
              <div className="mt-[85px]">
                <div className="has_fade_anim" data-fade-from="bottom">
                  {award_list.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-border-2 first:border-t grid gap-y-[5px] grid-cols-[auto] sm:grid-cols-[170px_1fr_150px] md:grid-cols-[300px_1fr_150px] py-4 font-beatricetrial "
                    >
                      <p className="text-text">{item.platform}</p>
                      <p className="text-text">{item.achievement}</p>
                      <p className="text-text text-start sm:text-end">
                        {item.result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignAward;
