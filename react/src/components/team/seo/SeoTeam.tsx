"use client";

import MemberCard from "@/components/team/seo/MemberCard";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { TTeamMemberType } from "@/types";
import SeoSectionTitle from "@/components/sectionTitle/SeoSectionTitle";

type Props = {
  title: string;
  description: string;
  shape: string;
  teamMember: TTeamMemberType[];
};

const SeoTeam = ({ teamMember, title, description, shape }: Props) => {
  const firstFourMember = teamMember.slice(0, 4);

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="inner-container large" ref={containerRef}>
      <div className="inner-container">
        <div className="section-spacing-top px-5 md:px-10 pb-[235px] xl:pb-[285px] 2xl:pb-[485px] bg-background-3 rounded-[5px] relative z-[1]">
          <div className="absolute w-[230px] top-[84px] end-[65px] z-[-1]">
            <Image
              src="/assets/imgs/shape/img-s-56.png"
              alt="image"
              width={231}
              height={202}
            />
          </div>
          <div className="text-center">
            <SeoSectionTitle
              title={title}
              className="max-w-[635px] mx-auto text-text-fixed-2"
            />
            <div className="mt-[21px] md:mt-[31px]">
              <p
                className="has_fade_anim max-w-[600px] mx-auto text-text-fixed-3"
                data-fade-from="left"
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[-182px] xl:mt-[-212px] 2xl:mt-[-392px] relative z-[1]">
        <div
          className="has_fade_anim hidden lg:inline-block absolute w-[130px] 2xl:w-[200px] right-[-1%] 2xl:right-[9%] top-[-90px] 2xl:top-[-130px] z-[1]"
          data-fade-offset="0"
        >
          <Link href={"/career"}>
            <Image
              src={shape}
              alt="image shape"
              width={200}
              height={200}
              className="max-w-full h-auto"
            />
          </Link>
        </div>

        <div className="grid gap-y-10 gap-x-5 xl:gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {firstFourMember.map((profile, index) => (
            <div
              className="has_fade_anim"
              data-delay={(index + 1) * 0.15}
              key={profile.data.id}
            >
              <MemberCard profileData={profile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoTeam;
