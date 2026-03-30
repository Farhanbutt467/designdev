import Image from "next/image";
import { TBlogType } from "@/types";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const FeaturedBlogCard = ({ data, slug }: TBlogType) => {
  const { image, title, published_date } = data;

  return (
    <article>
      <Link href={`/blog/${slug}`} className="block">
        <div className=" w-full h-full !overflow-hidden">
          <Image
            alt="blog_image"
            src={image}
            width={410}
            height={260}
            style={{ objectFit: "cover" }}
            className="w-full h-full transition-all transform group-hover:scale-[1.03] duration-500"
          />
        </div>
        <div className="static xl:absolute w-full xl:pt-[30px] xl:px-[60px] start-0 bottom-0 xl:opacity-0 xl:invisible transition-all duration-500 grid gap-y-[20px] gap-x-[50px] xl:grid-cols-[1fr_30px] justify-between mt-[22px] lg:mt-[28px] group-hover:opacity-100 group-hover:visible group-hover:bottom-[54px]">
          <div>
            <h2 className="text-[20px] xl:text-[30px] xl:text-text-fixed-2">
              {title}
            </h2>
            <span className="text-[14px] leading-[1.53] mt-[13px] inline-block text-text-3 xl:text-text-fixed-2 ">
              Features Post <br className="hidden md:block" />
              {published_date}
            </span>
          </div>
          <div className="icon">
            <FaArrowRight className="text-text-fixed-2 transform -rotate-45 text-[20px] hidden xl:inline-block" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default FeaturedBlogCard;
