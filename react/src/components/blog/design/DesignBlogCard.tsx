import ImageComponent from "@/components/tools/ImageComponent";
import { TBlogType } from "@/types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const DesignBlogCard = ({ data, slug }: TBlogType) => {
  const { title, tags, published_date, thumb_img } = data;
  return (
    <article
      className="has_fade_anim grid grid-cols-[auto] xl:grid-cols-[auto_390px] group items-end"
      data-delay="0.15"
    >
      <div className="xl:me-[-60px] overflow-hidden">
        <Link href={`/blog/design/${slug}`}>
          <ImageComponent
            src={thumb_img}
            width={330}
            height={450}
            alt="thumb blog"
            className="group-hover:scale-110 transition-all duration-500 max-w-full"
          />
        </Link>
      </div>
      <div className="bg-background pt-[27px] xl:pt-[37px] xl:px-10 xl:pb-[45px] relative z-[1] mb-[-1px]">
        <div>
          <div className="flex gap-[5px] items-center">
            <span className="text-[14px] inline-block text-text-3">
              {tags[0]?.name}
            </span>
            <span className="has-left-line text-[14px] text-text-3 ps-[25px] inline-block relative before:content-[''] before:absolute before:w-[20px] before:bg-current before:h-[1px] before:top-[50%] before:translate-y-[-50%] before:start-0">
              {published_date}
            </span>
          </div>
          <h2 className="text-[22px] 2xl:text-[26px] leading-[1.25] mt-4 xl:h-[100px] 2xl:h-[158px] border-b pb-5 xl:pb-0">
            <Link href={`/blog/design/${slug}`}>{title}</Link>
          </h2>
        </div>
        <div className="btn-wrapper mt-[14px]">
          <Link
            href={`/blog/design/${slug}`}
            className="text-[16px] inline-flex items-center gap-[5px]"
          >
            Read More
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default DesignBlogCard;
