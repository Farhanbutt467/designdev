"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ActionBtnType } from "@/types";
import { FaPlay } from "react-icons/fa6";
import AiSectionTitle from "../sectionTitle/AiSectionTitle";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  description: string[];
  action_btn: ActionBtnType;
};

const AiAbout = ({ title, description, action_btn }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="main-section-spacing relative z-[2]">
          <div className="grid lg:grid-cols-[1fr,435px] xl:grid-cols-[1fr,575px] gap-y-5 gap-x-[60px]">
            <AiSectionTitle title={title} className="max-w-[545px]" />
            <div>
              <div className="flex flex-col gap-[25px]">
                {description?.map((para, index) => (
                  <p
                    key={`para-${index}`}
                    className="has_text_mov_anim text-text-3 !font-primary"
                    data-delay="0.30"
                  >
                    {para}
                  </p>
                ))}
              </div>
              <div
                className="has_fade_anim mt-[33px] xl:mt-[43px]"
                data-fade-from="top"
                data-fade-offset="70"
                data-ease="bounce"
              >
                <Link
                  className={cn(
                    buttonVariants({ variant: "Ai" }),
                    "bg-background text-text hover:text-text-2 hover:bg-background-2 border"
                  )}
                  href={action_btn.link}
                >
                  <span data-text={action_btn.label}>{action_btn.label}</span>
                  <FaPlay />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAbout;
