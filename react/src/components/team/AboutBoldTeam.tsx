"use client";
import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import { TTeamMemberType } from "@/types";
import TeamProfileCard from "@/components/team/TeamProfileCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ImageComponent from "../tools/ImageComponent";

type Props = {
  title: string;
  description: string;
  shape: string;
  teamMembers: TTeamMemberType[];
};

const AboutBoldTeam = ({ title, shape, description, teamMembers }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef}>
      <div className="inner-container pt-[22px] xl:pt-[42px] 2xl:pt-[62px]">
        <div className="main-section-spacing">
          <div className="relative">
            <span
              className="has_fade_anim absolute w-[93px] top-[-32px] xl:top-[-60px] start-[43%] 2xl:start-[50%] z-[99] max-w-[60px] xl:max-w-full hidden lg:block"
              data-delay=".8"
            >
              <ImageComponent src={shape} width={93} height={98} alt="icon" />
            </span>
            <WebSectionTItle
              title={title}
              className="has_text_move_anim max-w-[365px] xl:max-w-[565px] lg:mx-auto"
            />
          </div>
          <div className="mt-[12px] xl:mt-[22px]">
            <p className="has_fade_anim max-w-full lg:ms-[430px] xl:ms-[520px] 2xl:ms-[580px] md:max-w-[300px]">
              {description}
            </p>
          </div>
          <div className="mt-[43px] xl:mt-[73px]">
            <div className="grid gap-y-10 gap-x-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-teko">
              {teamMembers.slice(0, 4).map((profile, index) => (
                <div
                  key={profile.data.id}
                  className="odd:md:mt-[70px] has_fade_anim "
                  data-fade-from="left"
                  data-delay={(index + 1) * 0.15}
                >
                  <TeamProfileCard
                    profileData={profile}
                    className="uppercase"
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

export default AboutBoldTeam;
