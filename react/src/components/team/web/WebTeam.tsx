"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { TTeamMemberType } from "@/types";
import TeamProfileCard from "@/components/team/TeamProfileCard";
import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  description: string;
  teamMembers: TTeamMemberType[];
};

const WebTeam = ({ title, description, teamMembers }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-background-fixed" ref={containerRef}>
      <div className="inner-container">
        <div className="py-[60px] xl:py-[140px]">
          <div className="relative">
            <WebSectionTItle
              title={title}
              className="has_text_move_anim max-w-[460px] lg:max-w-[460px] xl:max-w-[730px] lg:mx-auto text-text-fixed-2"
            />
          </div>
          <div className="mt-[12px] xl:mt-[22px]">
            <p className="has_fade_anim max-w-[460px] lg:ms-[430px] xl:ms-[520px] 2xl:ms-[580px] lg:max-w-[300px] text-text-fixed-3">
              {description}
            </p>
          </div>
          <div className="mt-[43px] xl:mt-[73px]">
            <div className="grid gap-y-10 gap-x-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-teko">
              {teamMembers.slice(0, 4).map((profile, index) => (
                <div
                  key={profile.data.id}
                  className="odd:md:mt-[70px] has_fade_anim [&_p]:text-text-fixed-3 "
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

export default WebTeam;
