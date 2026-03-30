"use client";

import { useRef } from "react";
import ButtonFlip from "@/components/elements/button/ButtonFlip";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  slugs: string[];
  params: { title: string };
};

const WorkDetailNav = ({ slugs, params }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const { title } = params;
  const currentIndex = slugs.indexOf(title);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : slugs.length - 1;
  const nextIndex = currentIndex < slugs.length - 1 ? currentIndex + 1 : 0;
  const prevSlug = slugs[prevIndex];
  const nextSlug = slugs[nextIndex];
  return (
    <div className="btn-area" ref={containerRef}>
      <div className="container2 has_fade_anim">
        <div className="btn-area-inner pt-10 xl:pt-[60px] pb-[60] xl:pb-[120px] 2xl:pb-[150px]">
          <div className="btn-wrapper flex gap-[30px]">
            <ButtonFlip
              link={`/work/${prevSlug}`}
              btnText="Prev"
              className="px-[62px]"
            />
            <ButtonFlip
              link={`/work/${nextSlug}`}
              btnText="Next"
              className="px-[62px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailNav;
