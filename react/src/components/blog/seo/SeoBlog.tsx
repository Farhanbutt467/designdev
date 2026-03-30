"use client";

import { ActionBtnType, TBlogType } from "@/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import SeoBlogCard from "./SeoBlogCard";
import SeoSectionTitle from "@/components/sectionTitle/SeoSectionTitle";

type Props = {
  title: string;
  action_btn: ActionBtnType;
  blogs: TBlogType[];
};

const SeoBlog = ({ blogs, title, action_btn }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="inner-container" ref={containerRef}>
      <div className="section-spacing-top">
        <div className="grid gap-y-[30px] gap-x-[60px] lg:grid-cols-[1fr_auto] justify-between items-center">
          <SeoSectionTitle title={title} className="max-w-[620px]" />
          {action_btn?.enable && (
            <div className="has_fade_anim" data-fade-from="bottom">
              <Link
                href={"/blog"}
                className={cn(buttonVariants({ variant: "Seo" }))}
              >
                <span data-text={action_btn.label}>{action_btn.label}</span>
              </Link>
            </div>
          )}
        </div>
        <div className="mt-[47px] xl:mt-[67px] 2xl:mt-[87px]">
          <div className="grid gap-[30px] sm:grid-cols-2">
            {blogs.map((blog, index) => (
              <div
                key={blog.data.id}
                className="has_fade_anim"
                data-delay={(index + 1) * 0.2}
              >
                <SeoBlogCard {...blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoBlog;
