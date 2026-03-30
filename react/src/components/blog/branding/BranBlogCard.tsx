import Image from "next/image";
import { TBlogType } from "@/types";
import Link from "next/link";

const BranBlogCard = ({ data, slug }: TBlogType) => {
  const { title, image, tags, published_date, id } = data;

  return (
    <article
      className="blog group has_fade_anim"
      data-fade-from="right"
      data-delay={id ? id * 0.15 : 0}
    >
      <div className="rounded-[20px] overflow-hidden relative before:absolute before:z-10 before:left-1/2 before:-translate-x-1/2 before:-top-[60px] group-hover:before:-top-[2px] before:transition-all after:absolute after:z-10 after:left-1/2 after:-translate-x-1/2 after:-bottom-[60px] group-hover:after:-bottom-[2px] after:transition-all work-card-style">
        <Link href={`/blog/${slug}`}>
          <Image
            height={400}
            width={550}
            src={image}
            alt="blog-img"
            className="group-hover:scale-105 transition-all duration-500"
          />
        </Link>
      </div>
      <div className="flex justify-end">
        <div className="max-w-full md:max-w-[460px] mt-[23px] xl:border-s border-[#EFEFEF] dark:border-[#373737] xl:ps-[49px] xl:mt-[43px]">
          <h2 className="text-[20px] xl:text-[26px] 2xl:text-[30px] leading-[1.2]">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>
          <div className="flex gap-[5px] mt-[17px] text-text-3">
            <Link href="#">
              <span className="text-[12px] px-[14px] py-2 xl:text-[14px] xl:px-4 xl:py-3 uppercase border inline-block rounded-[40px] hover:text-text">
                {tags[0]?.name}
              </span>
            </Link>
            <span className="text-[12px] px-[14px] py-2 xl:text-[14px] xl:px-4 xl:py-3 uppercase border inline-block rounded-[40px]">
              {published_date}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BranBlogCard;
