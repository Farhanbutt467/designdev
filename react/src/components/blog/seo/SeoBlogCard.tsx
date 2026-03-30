import Image from "next/image";
import { TBlogType } from "@/types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const SeoBlogCard = ({ data, slug }: TBlogType) => {
  const { title, thumb_img, tags, published_date } = data;
  return (
    <article className="grid lg:grid-cols-[auto,290px] xl:grid-cols-[1fr_390px] group">
      <div className="thumb overflow-hidden">
        <Link href={`/blog/seo/${slug}`}>
          <Image
            src={thumb_img}
            alt="blog image"
            width={330}
            height={450}
            className="group-hover:scale-[1.1] transition-all duration-500 w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="bg-background border border-border pt-[27px] px-[15px] pb-[25px] lg:pt-[37px] lg:px-10 lg:pb-[45px] border-s-0 flex flex-col justify-between">
        <div className="content">
          <div className="meta text-[14px]  text-text flex gap-[5px] items-center">
            <span className="tag">{tags[0]?.name}</span>
            <span className="date relative inline-block text-text-3 has-left-line ps-[25px] before:w-[20px] before:content-[''] before:absolute before:h-[1px] before:bg-current before:start-0 before:top-1/2 before:-translate-y-1/2">
              {published_date}
            </span>
          </div>
          <h2 className="title underline h-auto pb-[30px] xl:pb-0 xl:h-[155px] text-[22px] xl:text-[30px] leading-none font-semibold mt-[22px]">
            <Link href={`/blog/seo/${slug}`}>{title}</Link>
          </h2>
        </div>
        <div className=" pt-[14px] border-t border-border">
          <Link
            href={`/blog/seo/${slug}`}
            className="text-[16px] text-text inline-flex gap-[5px]"
          >
            Read More
            <FaArrowRightLong className="rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SeoBlogCard;
