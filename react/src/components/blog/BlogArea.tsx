"use client";

import { useState, useRef } from "react";
import { TBlogType } from "@/types";
import BlogInnerCard from "@/components/blog/BlogInnerCard";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasPinContent2 from "@/lib/animation/hasPinContent2";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  blogs: TBlogType[];
  title: string;
  description: string;
};

const BlogArea = ({ blogs, title, description }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const formattedNumber = (number: number) =>
    number < 10 ? `0${number}` : `${number}`;

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const getPaginatedBlogs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);
  const pinArea = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasPinContent2(pinElement.current, pinArea.current, "top top", 1024);
    },
    { scope: containerRef }
  );

  return (
    <section className="blog_area">
      <div className="inner-container" ref={containerRef}>
        <div
          className="main-section-spacing grid  gap-y-[30px] gap-x-[60px] lg:grid-cols-[1fr_620px] xl:grid-cols-[1fr_850px]"
          ref={pinArea}
        >
          <div ref={pinElement}>
            <InnerSectionTitle
              title={title}
              className="font-normal max-w-[340px]"
            />
            <div className="mt-[22px]">
              <p className="has_fade_anim max-w-[300px]">{description}</p>
            </div>
          </div>
          <div>
            <div className="has_fade_anim grid gap-y-[40px] gap-x-[30px] xl:gap-y-[45px] xl:gap-x-[50px] sm:grid-cols-2">
              {getPaginatedBlogs().map((blog, i) => (
                <div
                  className="border-b hover:border-text"
                  key={`blog-area-card-${blog.data.id}`}
                >
                  <BlogInnerCard {...blog} serialNo={i + 1} />
                </div>
              ))}
            </div>
            <div className="has_fade_anim mt-[50px]">
              <ul className="blog-pagination flex gap-[10px]">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={`pagination-item-${index + 1}`}
                    className={cn(
                      currentPage === index + 1 && "text-orange-400"
                    )}
                  >
                    <p
                      className="w-[60px] h-[60px] border inline-flex justify-center items-center rounded-[50%] text-[18px] text-text hover:border-transparent hover:text-text-2 hover:bg-background-2"
                      onClick={() => handleClick(index + 1)}
                    >
                      {formattedNumber(index + 1)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
