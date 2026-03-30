"use client";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { TBlogType } from "@/types";
import DesignBlogCard from "./DesignBlogCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  sub_title: string;
  blogs: TBlogType[];
};

const DesignBlog = ({ title, sub_title, blogs }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="main-section-spacing">
          <div className="grid gap-y-[35px] gap-x-[60px] grid-cols-[auto] xl:grid-cols-[auto_880px]">
            <span className="section-subtitle text-[16px] uppercase block mt-[-3px]">
              {sub_title}
            </span>
            <DesignSectionTitle title={title} />
          </div>
          <div className="mt-[45px] xl:mt-[85px]">
            <div className="grid gap-y-10 gap-x-[30px] sm:grid-cols-2 items-start">
              {blogs.map((blog) => (
                <DesignBlogCard {...blog} key={blog.data.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignBlog;
