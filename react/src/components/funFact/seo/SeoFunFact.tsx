"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import SeoSectionTitle from "@/components/sectionTitle/SeoSectionTitle";

type Props = {
  title: string;
  experience: {
    value: string;
    prefix: string;
  };
  projects: {
    value: string;
    prefix: string;
  };
  team_member: {
    value: string;
    prefix: string;
  };
  awards: {
    value: string;
    prefix: string;
  };
};

const SeoFunFact = ({
  title,
  experience,
  projects,
  team_member,
  awards,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
      hasCountAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="inner-container" ref={containerRef}>
      <div className="section-spacing-top">
        <SeoSectionTitle
          title={title}
          className="max-w-[520px] mx-auto text-center"
        />
        <div className="mt-[41px] xl:mt-[61px]">
          <div className="grid gap-y-[50px] gap-x-[30px] sm:grid-cols-2 lg:grid-cols-4">
            <div className="has_fade_anim text-center" data-delay="0.15">
              <h3
                className="number text-[50px] xl:text-[100px] font-semibold leading-[1.3] relative z-1 px-5 xl:px-[30px] inline-block"
                style={{
                  backgroundImage: `url(/assets/imgs/shape/img-s-55.png)`,
                  backgroundSize: "100% 100%",
                }}
              >
                <span data-count={experience.value} className="has_count_anim">
                  {experience.value}
                </span>
                {experience.prefix}
              </h3>
              <h3 className="text-[18px] xl:text-[24px] leading-none font-semibold mt-[10px]">
                Years <br className="hidden md:block" />
                experience
              </h3>
            </div>
            <div className="has_fade_anim text-center" data-delay="0.30">
              <h3
                className="number text-[50px] xl:text-[100px] font-semibold leading-[1.3] relative z-1 px-5 xl:px-[30px] inline-block"
                style={{
                  backgroundImage: `url(/assets/imgs/shape/img-s-55.png)`,
                  backgroundSize: "100% 100%",
                }}
              >
                <span data-count={projects.value} className="has_count_anim">
                  {projects.value}
                </span>
                {projects.prefix}
              </h3>
              <h3 className="text-[18px] xl:text-[24px] leading-none font-semibold mt-[10px]">
                Projects done <br className="hidden md:block" />
                successfully
              </h3>
            </div>
            <div className="has_fade_anim text-center" data-delay="0.45">
              <h3
                className="number text-[50px] xl:text-[100px] font-semibold leading-[1.3] relative z-1 px-5 xl:px-[30px] inline-block"
                style={{
                  backgroundImage: `url(/assets/imgs/shape/img-s-55.png)`,
                  backgroundSize: "100% 100%",
                }}
              >
                <span data-count={team_member.value} className="has_count_anim">
                  {team_member.value}
                </span>
                {team_member.prefix}
              </h3>
              <h3 className="text-[18px] xl:text-[24px] leading-none font-semibold mt-[10px]">
                Marketing <br className="hidden md:block" />
                team member
              </h3>
            </div>
            <div className="has_fade_anim text-center" data-delay="0.60">
              <h3
                className="number text-[50px] xl:text-[100px] font-semibold leading-[1.3] relative z-1 px-5 xl:px-[30px] inline-block"
                style={{
                  backgroundImage: `url(/assets/imgs/shape/img-s-55.png)`,
                  backgroundSize: "100% 100%",
                }}
              >
                <span data-count={awards.value} className="has_count_anim">
                  {awards.value}
                </span>
                {awards.prefix}
              </h3>
              <h3 className="text-[18px] xl:text-[24px] leading-none font-semibold mt-[10px]">
                We achieved <br className="hidden md:block" />
                awards
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoFunFact;
