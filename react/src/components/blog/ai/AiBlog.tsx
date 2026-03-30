"use client";

import { ActionBtnType, TBlogType } from "@/types";
import AiBlogCard from "./AiBlogCard";
import Link from "next/link";
import AiSectionTitle from "@/components/sectionTitle/AiSectionTitle";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  action_btn: ActionBtnType;
  blogs: TBlogType[];
};

const AiBlog = ({ title, action_btn, blogs }: Props) => {
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
        <div className="main-section-spacing 2xl:!py-[130px]">
          <div className="grid gap-y-[30px] gap-x-[60px] grid-cols-[auto] lg:grid-cols-[auto_auto] items-end justify-between">
            <AiSectionTitle title={title} className="max-w-[595px]" />
            <div
              className="has_fade_anim"
              data-fade-from="bottom"
              data-fade-offset="50"
            >
              <Link
                href={action_btn.link}
                className="btn-text-flip wc-btn-underline text-[18px] font-instrument font-medium pb-2 before:!h-[1px]"
              >
                <span data-text={action_btn.label}>{action_btn.label}</span>
              </Link>
            </div>
          </div>
          <div className="mt-[33px] xl:mt-[43px] 2xl:mt-[63px]">
            <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-2">
              {blogs.map((blog, index) => (
                <AiBlogCard key={`blog-${index}-${blog.data.id}`} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiBlog;
