"use client";

import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  title: string;
  sub_title: string;
  description: string;
  projects: string;
  customers: string;
  experiences: number;
  awards: number;
};

const MarketingFunFact = ({
  title,
  sub_title,
  description,
  projects,
  customers,
  experiences,
  awards,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasCountAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="section-spacing-bottom" ref={containerRef}>
      <div className="inner-container">
        <div>
          <div className="grid gap-y-5 gap-x-[70px] justify-center sm:justify-end  md:me-[50px] 2xl:me-20 mb-[39px] md:mb-[59px] 2xl:mb-[89px] grid-cols-[auto] lg:grid-cols-[auto_690px] xl:grid-cols-[auto_770px]">
            <div className="mt-[20px]">
              <span
                className="has_fade_anim subtitle_bold text-[18px] font-plusjakartasans text-text"
                dangerouslySetInnerHTML={convertWithBrSpan(sub_title)}
              />
            </div>
            <div className="flex items-start sm:items-center flex-col sm:flex-row gap-y-5 gap-x-[110px]">
              <h2
                className="has_fade_anim text-[35px] md:text-[40px] lg:text-[46px] xl:text-[100px] 2xl:text-[120px] max-w-[416px]"
                data-delay="0.30"
                dangerouslySetInnerHTML={convertWithBrSpan(title)}
              />

              <div className="mt-5">
                <p className="has_fade_anim max-w-[251px]" data-delay="0.45">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <div className="has_fade_anim">
            <div className="grid md:flex justify-center grid-cols-[auto] sm:grid-cols-[auto_auto]">
              <div
                className="has_fade_anim h-[260px] w-[260px] xl:w-[340px] xl:h-[340px] 2xl:w-[380px] 2xl:h-[380px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[30px] text-center"
                data-fade-from="right"
              >
                <h3 className="text-[60px] xl:text-[80px] 2xl:text-[100px]">
                  {projects}
                </h3>
                <p className="text-[20px] font-plusjakartasans text-text mt-[15px]">
                  <span className="font-bold">Project</span> <br />
                  completed
                </p>
              </div>
              <div
                className="has_fade_anim md:ms-[-30px] lg:ms-[-70px] h-[260px] w-[260px] xl:w-[340px] xl:h-[340px] 2xl:w-[380px] 2xl:h-[380px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[30px] text-center"
                data-fade-from="right"
              >
                <h3 className="text-[60px] xl:text-[80px] 2xl:text-[100px]">
                  {customers}
                </h3>
                <p className="text-[20px] font-plusjakartasans text-text mt-[15px]">
                  <span className="font-bold">Happy</span> <br />
                  customers
                </p>
              </div>
              <div
                className="has_fade_anim md:ms-[-30px] lg:ms-[-70px] h-[260px] w-[260px] xl:w-[340px] xl:h-[340px] 2xl:w-[380px] 2xl:h-[380px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[30px] text-center"
                data-fade-from="left"
              >
                <h3
                  data-count={experiences}
                  className="has_count_anim text-[60px] xl:text-[80px] 2xl:text-[100px]"
                >
                  {experiences}
                </h3>
                <p className="text-[20px] font-plusjakartasans text-text mt-[15px]">
                  <span className="font-bold">Years</span> <br />
                  experiences
                </p>
              </div>
              <div
                className="has_fade_anim md:ms-[-30px] lg:ms-[-70px] h-[260px] w-[260px] xl:w-[340px] xl:h-[340px] 2xl:w-[380px] 2xl:h-[380px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[30px] text-center"
                data-fade-from="left"
              >
                <h3
                  data-count={experiences}
                  className="has_count_anim text-[60px] xl:text-[80px] 2xl:text-[100px]"
                >
                  {awards}
                </h3>
                <p className="text-[20px] font-plusjakartasans text-text mt-[15px]">
                  <span className="font-bold">Awards</span> <br />
                  achievement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFunFact;
