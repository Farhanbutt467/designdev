"use client";

import TopLineButton from "@/components/elements/button/TopLineButton";
import IntroSection from "@/components/elements/introSection/IntroSection";
import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { ActionBtnType } from "@/types";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  action_btn: ActionBtnType;
  title: string;
  description: string;
  total_client: number;
};

const TeamHero = ({ action_btn, title, description, total_client }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasCountAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="container" ref={containerRef}>
      <div className="pt-[127px] xl:pt-[147px] 2xl:pt-[217px] pb-[60px] xl:pb-[100px]">
        <div className="grid gap-y-[30px] gap-x-[60px] lg:grid-cols-[300px_1fr] xl:grid-cols-[400px_1fr] 2xl:grid-cols-[485px_960px]">
          <div className="has_fade_anim" data-fade-from="left">
            {action_btn?.enable && <TopLineButton action_btn={action_btn} />}
          </div>
          <div>
            <IntroSection title={title} description={description} />
            <div className="has_fade_anim inline-block py-[27px] px-[50px] border rounded-[100px] min-w-[260px] mt-[33px] xl:mt-[43px] xl:ms-[220px]">
              <span className="text-[30px] font-normal font-beatricetrial leading-none inline-block text-text">
                <span
                  data-count={total_client.toLocaleString()}
                  className="has_count_anim"
                >
                  {total_client.toLocaleString()}
                </span>{" "}
                +
              </span>
              <p className="max-w-[410px] mt-[9px] leading-none">
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
