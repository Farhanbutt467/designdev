import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import ButtonSwap from "@/components/elements/button/ButtonSwap";
import { useDirection } from "@/context/app.context";
import { ActionBtnType } from "@/types";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  aboutData: {
    sub_title: string;
    description: string;
    action_btn?: ActionBtnType;
  };
};

const BranAboutArea = ({ aboutData }: Props) => {
  const { sub_title, description } = aboutData;
  const containerRef = useRef<HTMLDivElement>(null!);

  const { direction } = useDirection();

  useGSAP(
    () => {
      hasTextMovAnim();
      hasFadeAnim();
    },
    { dependencies: [direction], scope: containerRef }
  );

  return (
    <div className="section-spacing-bottom" ref={containerRef}>
      <div
        className="grid gap-y-[30px] gap-x-[60px] 
        items-start lg:grid-cols-[auto,730px]
        2xl:grid-cols-[auto,930px]"
      >
        <div>
          <span className="text-[18px] leading-none inline-block font-medium text-text-fixed uppercase">
            {sub_title}
          </span>
        </div>
        <div>
          <p
            className="leading-none text-[24px] mt-0 md:text-[36px] lg:text-[40px] xl:text-[50px] xl:mt-[-17px]
              2xl:text-[70px] 2xl:-mt-6 text-text-fixed has_text_mov_anim"
          >
            {description}
          </p>
          {aboutData.action_btn && (
            <div
              className="mt-10 xl:mt-[50px] has_fade_anim"
              data-fade-from="left"
            >
              <ButtonSwap
                bgColor="bg-background-fixed"
                textColor="text-text-fixed-2"
                link={aboutData.action_btn.link}
                buttonText={aboutData.action_btn.label}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BranAboutArea;
