"use client";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { TTeamMemberType } from "@/types";
import DesignTeamCard from "@/components/team/design/DesignTeamCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  sub_title: string;
  teamMembers: TTeamMemberType[];
};

const DesignTeam = ({ title, sub_title, teamMembers }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="main-section-spacing relative z-[1]">
          <div className="grid gap-y-[35px] gap-x-[60px] grid-cols-[auto] xl:grid-cols-[auto_880px]">
            <span className="section-subtitle text-[16px] uppercase block mt-[-3px]">
              {sub_title}
            </span>
            <div>
              <DesignSectionTitle title={title} />
              <div className="mt-[45px] xl:mt-[55px] 2xl:mt-[85px]">
                <div className="grid gap-y-[68px] gap-x-[30px] lg:gap-x-[60px] justify-center sm:justify-between grid-cols-[repeat(1,210px)] sm:grid-cols-[repeat(2,210px)] md:grid-cols-[repeat(3,210px)]">
                  {teamMembers.map((member, index) => (
                    <DesignTeamCard {...member} key={member.data.id} />
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

export default DesignTeam;
