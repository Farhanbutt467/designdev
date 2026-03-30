"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { TTeamMemberType } from "@/types";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import BranProfileCard from "@/components/team/branding/BranProfileCard";
import MainSectionTitle from "@/components/sectionTitle/MainSectionTitle";

type teamProps = {
  title: string;
  text: string;
  teamMembers: TTeamMemberType[];
};

const BrandingTeam = ({ title, text, teamMembers }: teamProps) => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={pinElement}
      className="team_area main-section-style bg-[#F4E0E0] dark:bg-[#252525]"
    >
      <div ref={containerRef} className="container">
        <div className="main-section-spacing ">
          <div className="grid gap-x-10 gap-y-[30px] md:grid-cols-2 items-center">
            <MainSectionTitle title={title} />
            <p className="has_fade_anim max-w-[380px] leading-[1.41] text-[18px] text-text-3">
              {text}
            </p>
          </div>
          <div className="mt-[50px] xl:mt-[90px]">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 lg:gap-x-[60px] xl:gap-x-20">
              {teamMembers?.slice(0, 6)?.map((profile, index) => (
                <div
                  key={profile.data.id}
                  className={`
                  border-[#1C1C1C] dark:border-[#FFFFFF]
                  ${index === 0 ? "border-t" : ""} 
                  ${index === 1 ? "border-t-0 md:border-t" : ""} 
                  ${index === 2 ? "border-t-0 xl:border-t" : ""}
                `}
                >
                  <BranProfileCard {...profile} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingTeam;
