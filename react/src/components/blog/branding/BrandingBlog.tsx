"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ActionBtnType, TBlogType } from "@/types";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ButtonSwap from "@/components/elements/button/ButtonSwap";
import BranBlogCard from "./BranBlogCard";
import MainSectionTitle from "@/components/sectionTitle/MainSectionTitle";

type BlogProps = {
  title: string;
  action_btn: ActionBtnType;
  blogs: TBlogType[];
};

const BrandingBlog = ({ title, action_btn, blogs }: BlogProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  const firstThreeBlogs = blogs.slice(0, 3);

  return (
    <section ref={pinElement} className=" main-section-style bg-background">
      <div ref={containerRef} className="container">
        <div className="main-section-spacing">
          <div className="grid gap-y-[30px] gap-x-[60px] items-center justify-between md:grid-cols-[auto_auto]">
            <MainSectionTitle title={title} className="max-w-[420px]" />
            {action_btn?.enable && (
              <div
                className="inline-block has_fade_anim"
                data-fade-from="right"
              >
                <ButtonSwap
                  buttonText={action_btn.label}
                  link={action_btn.link}
                />
              </div>
            )}
          </div>
          <div className=" mt-[50px] xl:mt-[90px]">
            <div className=" grid gap-x-[30px] gap-y-[45px] md:gap-y-[55px] lg:gap-x-[35px] lg:gap-y-[55px] md:grid-cols-2 lg:grid-cols-3">
              {firstThreeBlogs.map((blog) => (
                <BranBlogCard key={blog.data.id} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingBlog;
