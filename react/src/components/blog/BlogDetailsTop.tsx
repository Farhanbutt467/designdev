"use client";

import Image from "next/image";
import { TBlogType } from "@/types";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import MainSectionTitle from "../sectionTitle/MainSectionTitle";

const BlogDetailsTop = ({ data }: TBlogType) => {
  const { title, published_date, likes, comments } = data;
  const formattedNumber = (number: number) => {
    return number.toLocaleString("en-US");
  };
  const monthMap: { [key: string]: string } = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };
  const month = published_date?.split(" ")[1];
  const date = published_date?.split(" ")[0];

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <MainSectionTitle
        title={title}
        className="font-normal text-[36px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px]"
      />
      <div className="has_fade_anim mt-[31px] mb-[57px] xl:mb-[77px] 2xl:mb-[97px]">
        <ul className="grid grid-cols-[auto,auto] sm:flex gap-y-[30px] ">
          <li>
            <span className="text-[20px] md:text-[26px] xl:text-[30px] inline-block font-beatricetrial">{`${formattedNumber(
              comments
            )} +`}</span>
            <p className="mt-[9px]">Comments</p>
          </li>
          <li className="xs:border-s sm:ms-[30px] sm:ps-[30px]">
            <span className="text-[20px] md:text-[26px] xl:text-[30px] inline-block font-beatricetrial">{`${formattedNumber(
              likes
            )} +`}</span>
            <p className="mt-[9px]">Likes</p>
          </li>
          <li className="xs:border-s sm:ms-[30px] sm:ps-[30px]">
            <span className="text-[20px] md:text-[26px] xl:text-[30px] inline-block font-beatricetrial">
              {date}
            </span>
            <p className="mt-[9px]">{monthMap[month]}</p>
          </li>
        </ul>
      </div>
      <div className="overflow-hidden">
        <Image
          src="/assets/imgs/blog/img-s-26.jpg"
          alt="blog_thumb"
          width={1290}
          height={550}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BlogDetailsTop;
