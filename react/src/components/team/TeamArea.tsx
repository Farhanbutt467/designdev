"use client";

import TeamProfileCard from "@/components/team/TeamProfileCard";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { TTeamMemberType } from "@/types";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  description: string;
  teamMembers: TTeamMemberType[];
};

const TeamArea = ({ title, description, teamMembers }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="container2" ref={containerRef}>
      <div className="main-section-spacing">
        <div className="grid gap-y-5 gap-x-[60px] lg:grid-cols-[1fr_auto] items-center">
          <InnerSectionTitle
            title={title}
            className="max-w-[630px] font-normal"
            animation="has_text_mov_anim"
          />
          <p className="has_fade_anim max-w-[420px]">{description}</p>
        </div>
        <div className="mt-[43px] xl:mt-[63px]">
          <div className="grid gap-y-10 gap-x-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((profile, index) => {
              const adjustedIndex = index % 4;
              return (
                <div
                  key={profile.data?.id}
                  className="has_fade_anim"
                  data-delay={(adjustedIndex + 1) * 0.15}
                >
                  <TeamProfileCard profileData={profile} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
