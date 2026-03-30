"use client";

import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  description: string;
  total_post: number;
  writer_count: number;
};

const BlogFeatureArea = ({
  title,
  description,
  total_post,
  writer_count,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasCountAnim();
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="inner-container" ref={containerRef}>
      <div className="pt-[127px] xl:pt-[147px] 2xl:pt-[217px] pb-[53px] xl:pb-[73px] 2xl:pb-[93px]">
        <div className="grid gap-y-5 gap-x-[60px] sm:grid-cols-[1fr_auto]">
          <InnerSectionTitle
            title={title}
            className="large max-w-[450px] xl:max-w-[550px]"
            heading1
          />
          <div>
            <div>
              <p className="has_fade_anim max-w-[300px]">{description}</p>
            </div>
            <div className="has_fade_anim mt-10  flex gap-y-5 gap-x-[30px]">
              <div className="">
                <span className="text-[30px] leading-none font-beatricetrial text-text">
                  <span data-count={total_post} className="has_count_anim">
                    {total_post}
                  </span>
                  +
                </span>
                <p className="text-[18px] leading-none mt-[9px]">Total post</p>
              </div>
              <div className="ps-[30px] border-s">
                <span className="text-[30px] leading-none font-beatricetrial text-text">
                  <span data-count={writer_count} className="has_count_anim">
                    {writer_count}
                  </span>{" "}
                  +
                </span>
                <p className="text-[18px] leading-none mt-[9px]">Blog writer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatureArea;
