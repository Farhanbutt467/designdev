"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import WebSkillCard from "@/components/skill/web/WebSkillCard";
import ImageComponent from "@/components/tools/ImageComponent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  description: string;
  skills: {
    title: string;
    description: string;
    icon: {
      light: string;
      dark: string;
    };
    img_small: string;
    img_main: string;
  }[];
};

const WebSkill = ({ title, description, skills }: Props) => {
  const [active, setActive] = useState(0);
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
        <div className="pt-[60px] xl:pt-[140px]">
          <div className="grid grid-cols-[auto] lg:grid-cols-[auto,auto] justify-between gap-y-[20px] gap-x-[60px]">
            <WebSectionTItle
              title={title}
              className="has_text-move_anim max-w-[660px]"
            />
            <p className="has_fade_anim max-w-[300px]">{description}</p>
          </div>
          <div className="mt-[59px]">
            <div className="grid gap-y-10 gap-x-[60px] grid-cols-[auto] lg:grid-cols-[420px,auto] justify-between">
              <ul className="border-s border-border ps-[18px] ms-[1px]">
                {skills.map((skill, index) => (
                  <li
                    className="has_fade_anim first:mt-0 mt-5"
                    key={index}
                    onClick={() => setActive(index)}
                  >
                    <WebSkillCard {...skill} active={index === active} />
                  </li>
                ))}
              </ul>
              <div
                className="has_fade_anim pt-[45px] ps-20 relative"
                data-fade-offset="0"
                data-delay="0.45"
              >
                <ImageComponent
                  src={skills[active].img_main}
                  width={660}
                  height={465}
                  alt="img-main"
                />
                <ImageComponent
                  src={skills[active].img_small}
                  width={330}
                  height={230}
                  alt="img-small"
                  className="absolute top-0 start-0 max-w-[740px] ms-[auto]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebSkill;
