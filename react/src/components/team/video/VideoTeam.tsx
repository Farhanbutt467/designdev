"use client";

import VideoSectionTitle from "@/components/sectionTitle/VideoSectionTitle";
import { ActionBtnType } from "@/types";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import hasCountAnim from "@/lib/animation/hasCountAnim";

type Props = {
  title: string;
  description: string;
  slogan: string[];
  experience: string;
  customers: string;
  projects: string;
  team_members: string;
  action_btn: ActionBtnType;
};

const VideoTeam = ({
  title,
  description,
  slogan,
  experience,
  customers,
  projects,
  team_members,
  action_btn,
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
    <section ref={containerRef}>
      <div className="inner-container large2">
        <div className="py-[60px] xl:py-[100px] 2xl:py-[200px] bg-background-3">
          <div className="inner-container">
            <VideoSectionTitle title={title} className="text-text-fixed-2" />
            <div className="grid gap-y-10 gap-x-[60px] grid-cols-[auto] md:grid-cols-[250px_auto] lg:grid-cols-[360px_auto] xl:grid-cols-[360px_460px] justify-start xl:justify-end mt-[50px] xl:mt-[60px] 2xl:mt-20">
              <div>
                <div className="has_fade_anim uppercase text-text-fixed-2 grid gap-y-[55px] gap-x-[30px] grid-cols-2">
                  <div>
                    <h3
                      data-count={experience}
                      className="has_count_anim text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px] leading-[.8] flex gap-[5px] !font-bold"
                    >
                      {experience}
                      <span className="inline-block leading-none  text-[22px] xl:text-[28px] mt-[-7px]">
                        +
                      </span>
                    </h3>
                    <h3 className="text-[20px] mt-2 leading-[.88]">
                      Years of <br />
                      experience
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px] leading-[.8] flex gap-[5px] !font-bold">
                      {customers}
                    </h3>
                    <h3 className="text-[20px] mt-2 leading-[.88]">
                      Happy <br />
                      customers
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px] leading-[.8] flex gap-[5px] !font-bold">
                      {projects}
                      <span className="inline-block leading-none text-[22px] xl:text-[28px] mt-[-7px]">
                        +
                      </span>
                    </h3>
                    <h3 className="text-[20px] mt-2 leading-[.88]">
                      Projects <br />
                      completed
                    </h3>
                  </div>
                  <div>
                    <h3
                      data-count={team_members}
                      className="has_count_anim text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px] leading-[.8] flex gap-[5px] !font-bold"
                    >
                      {team_members}
                    </h3>
                    <h3 className="text-[20px] mt-2 leading-[.88]">
                      Team <br />
                      Members
                    </h3>
                  </div>
                </div>
              </div>
              <div className="has_fade_anim">
                <h3 className="text-text-fixed-2">
                  {slogan.map((item, index) => (
                    <span
                      key={`slogan-${index}`}
                      className={cn(
                        "text-[18px] md:text-[24px] leading-[1.25] uppercase",
                        index !== 0 &&
                          "relative ps-[25px] before:content-[''] before:absolute before:w-[5px] before:h-[5px] before:bg-text-fixed-2 before:rounded-full before:start-[10px] before:top-1/2"
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </h3>
                <div className="mt-[15px]">
                  <p className="text-text-fixed-3">{description}</p>
                </div>
                <div className="mt-[33px] xl:mt-[53px]">
                  <Link
                    href={action_btn.link}
                    className={cn(
                      buttonVariants({ variant: "Video" }),
                      "text-[16px] bg-background-fixed-2 text-text-fixed"
                    )}
                  >
                    <span data-text={action_btn.label}>{action_btn.label}</span>
                    <FaPlay className="!h-[13px] !w-[13px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTeam;
