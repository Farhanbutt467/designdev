"use client";

import ButtonSwap from "@/components/elements/button/ButtonSwap";
import MarketingSectionTitle from "@/components/sectionTitle/MarketingSectionTitle";
import { ActionBtnType, TBlogType } from "@/types";
import MarketingBlogCard from "./MarketingBlogCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasPinContent2 from "@/lib/animation/hasPinContent2";

type Props = {
  title: string;
  action_btn: ActionBtnType;
  blogs: TBlogType[];
};

const MarketingBlog = ({ title, action_btn, blogs }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);
  const pinArea = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasPinContent2(pinElement.current, pinArea.current, "top top");
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div
        className="container2 pt-[111px] 2xl:pt-[141px] section-spacing-bottom"
        ref={pinArea}
      >
        <div className="grid gap-[50px_60px] grid-cols-1 lg:grid-cols-[auto_650px] xl:grid-cols-[auto_720px] 2xl:grid-cols-[auto_820px]">
          <div ref={pinElement}>
            <MarketingSectionTitle
              title={title}
              animation="has_fade_anim"
              className="lg:max-w-[242px]"
            />
            {action_btn?.enable ? (
              <div className="mt-[44px] has_fade_anim">
                <ButtonSwap
                  link={action_btn?.link}
                  bgColor={"bg-theme"} textColor={"text-text-fixed-2 text-sm"}
                  arrowWidthHeight="w-[40px] h-[40px]"
                  textClassName="px-[22px] font-normal"
                  rootClassName="wc-swap-btn-sm"
                  buttonText={action_btn?.label}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="mt-[9px] grid grid-cols-1 divide-y space-y-[44px]">
            {blogs?.map((blog, i) => (
              <div
                key={`marketing-blog-card-${i}`}
                className="has_fade_anim pt-[44px] first:pt-0"
                data-fade-from="bottom"
              >
                <MarketingBlogCard {...blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingBlog;
