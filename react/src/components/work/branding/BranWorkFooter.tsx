import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import ButtonSwap from "@/components/elements/button/ButtonSwap";
import { ActionBtnType } from "@/types";

type Props = {
  description: string;
  action_btn: ActionBtnType;
};

const BranWorkFooter = ({ action_btn, description }: Props) => {
  const containerRef = useRef<HTMLParagraphElement>(null!);

  useGSAP(
    () => {
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <div
      className="grid lg:grid-cols-2 gap-x-[30px] justify-end pt-[60px] xl:pt-[120px] 2xl:pt-[150px]"
      ref={containerRef}
    >
      <div></div>
      <div>
        <p className="text text-[20px] text-text-3 mt-[-9px] max-w-[520px] leading-[1.33] xl:text-[24px] xl:mt-[-11px] has_text_mov_anim">
          {description}
        </p>
        {action_btn?.enable && (
          <div
            className="mt-[33px] xl:mt-[43px] has_fade_anim"
            data-fade-from="left"
          >
            <ButtonSwap buttonText={action_btn.label} link={action_btn.link} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BranWorkFooter;
