"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasCountAnim from "@/lib/animation/hasCountAnim";

type Props = {
  experience: string;
  customers: string;
  projects: string;
  team_members: string;
};

const AboutCounter = ({
  experience,
  customers,
  projects,
  team_members,
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
    <div
      className="has_fade_anim pt-[71px] pb-[41px] xl:pt-[91px] xl:pb-[61px] 2xl:pt-[131px] 2xl:pb-[101px]"
      ref={containerRef}
    >
      <div className="inner-container">
        <div>
          <div className="flex gap-y-[30px] gap-x-[30px] sm:gap-y-[50px] justify-between flex-wrap">
            <div className="flex-[0_1_auto] sm:flex-[0_1_150px] md:flex-[0_1_230px] lg:flex-[0_1_150px] xl:flex-[0_1_230px]">
              <div className="flex gap-[10px] xl:gap-5 items-end">
                <h2
                  data-count={experience}
                  className="has_count_anim text-[70px] lg:text-[90px] xl:text-[120px] 2xl:text-[190px] leading-none"
                >
                  {experience}
                </h2>
                <p className="text-[18px] xl:text-[20px] mb-[19px] xl:mb-[25px] 2xl:mb-[43px] font-teko font-medium leading-none uppercase text-text">
                  Years of <br />
                  experience
                </p>
              </div>
            </div>
            <div className="flex-[0_1_auto] sm:flex-[0_1_150px] md:flex-[0_1_230px] lg:flex-[0_1_150px] xl:flex-[0_1_230px]">
              <div className="flex gap-[10px] xl:gap-5 items-end">
                <h2 className="text-[70px] lg:text-[90px] xl:text-[120px] 2xl:text-[190px] leading-none">
                  {customers}
                </h2>
                <p className="text-[18px] xl:text-[20px] mb-[19px] xl:mb-[25px] 2xl:mb-[43px] font-teko font-medium leading-none uppercase text-text">
                  <span className="block leading-none text-[30px] xl:text-[40px] 2xl:text-[50px] mb-[-2px] 2xl:mb-[-7px]">
                    +
                  </span>
                  Happy <br />
                  customers
                </p>
              </div>
            </div>
            <div className="flex-[0_1_auto] sm:flex-[0_1_150px] md:flex-[0_1_230px] lg:flex-[0_1_150px] xl:flex-[0_1_230px]">
              <div className="flex gap-[10px] xl:gap-5 items-end">
                <h2 className="text-[70px] lg:text-[90px] xl:text-[120px] 2xl:text-[190px] leading-none">
                  {projects}
                </h2>
                <p className="text-[18px] xl:text-[20px] mb-[19px] xl:mb-[25px] 2xl:mb-[43px] font-teko font-medium leading-none uppercase text-text">
                  Projects <br />
                  completed
                </p>
              </div>
            </div>
            <div className="flex-[0_1_auto] sm:flex-[0_1_150px] md:flex-[0_1_230px] lg:flex-[0_1_150px] xl:flex-[0_1_230px]">
              <div className="flex gap-[10px] xl:gap-5 items-end">
                <h2
                  data-count={team_members}
                  className="has_count_anim text-[70px] lg:text-[90px] xl:text-[120px] 2xl:text-[190px] leading-none"
                >
                  {team_members}
                </h2>
                <p className="text-[18px] xl:text-[20px] mb-[19px] xl:mb-[25px] 2xl:mb-[43px] font-teko font-medium leading-none uppercase text-text">
                  Team <br />
                  Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCounter;
