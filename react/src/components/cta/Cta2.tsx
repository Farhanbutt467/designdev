"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { ActionBtnType } from "@/types";
import SeoSectionTitle from "../sectionTitle/SeoSectionTitle";

type Props = {
  title: string;
  action_btn: ActionBtnType;
};

const Cta2 = ({ title, action_btn }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section>
      <div className="inner-container" ref={containerRef}>
        <div className="main-section-spacing">
          <div className="text-center">
            <SeoSectionTitle title={title} className="max-w-[680px] mx-auto" />
            {action_btn?.enable && (
              <div className="has_fade_anim mt-[42px]">
                <Link
                  href={action_btn.link}
                  className={cn(buttonVariants({ variant: "Seo" }))}
                >
                  <span data-text={action_btn.label}>{action_btn.label}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta2;
