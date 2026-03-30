"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import TeamProfileCard from "@/components/team/TeamProfileCard";
import { TTeamMemberType } from "@/types";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  description: string;
  teamMembers: TTeamMemberType[];
};

const AboutTeam = ({ title, description, teamMembers }: Props) => {
  const firstFourMember = teamMembers.slice(0, 4);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-background-3">
      <div className="inner-container" ref={containerRef}>
        <div className="main-section-spacing">
          <div className="text-center">
            <InnerSectionTitle
              title={title}
              className="font-normal max-w-[540px] mx-auto text-text-fixed-2"
            />
            <div className=" mt-[12px] xl:mt-[22px]">
              <p className="has_fade_anim text-text-fixed-2 mx-auto max-w-[630px]">
                {description}
              </p>
            </div>
          </div>
          <div className=" mt-[43px] xl:mt-[63px]">
            <div className=" grid gap-y-10 gap-x-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {firstFourMember.map((profile, index) => (
                <div
                  key={profile.data.id}
                  className="odd:md:mt-[70px] has_fade_anim [&_p]:text-text-fixed-3"
                  data-fade-from="left"
                  data-delay={(index + 1) * 0.15}
                >
                  <TeamProfileCard
                    profileData={profile}
                    className="text-text-fixed-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
