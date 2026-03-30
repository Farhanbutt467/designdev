import ImageComponent from "@/components/tools/ImageComponent";
import { TBlogType } from "@/types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const AiBlogCard = ({ data, slug }: TBlogType) => {
  const { thumb_img, title, tags, published_date } = data;
  return (
    <article
      className="has_fade_anim group grid grid-cols-1 lg:grid-cols-[auto_290px] xl:grid-cols-[auto_350px] 2xl:grid-cols-[1fr,390px] border border-border-2 rounded-[20px] overflow-hidden"
      data-fade-from="bottom"
    >
      <div className="overflow-hidden">
        <Link href={`/blog/ai/${slug}`}>
          <ImageComponent
            src={thumb_img}
            width={330}
            height={450}
            alt="blog thumb"
            className="transition-all w-full h-full max-w-full object-cover max-h-[200px] md:max-h-none duration-500 group-hover:scale-[1.1]"
          />
        </Link>
      </div>
      <div className="pt-[27px] pb-[25px] px-[15px] lg:pt-[37px] lg:pb-[45px] lg:px-10 flex flex-col justify-between">
        <div>
          <div className="flex gap-[5px] items-center">
            <span className="text-[14px] inline-block">{tags[0]?.name}</span>
            <span className="text-text-3 text-[14px] ps-[25px] relative before:content-[''] before:absolute before:w-[20px] before:bg-current before:h-[1px] before:top-[50%] before:translate-y-[-50%] before:start-0">
              {published_date}
            </span>
          </div>
          <h2 className="text-[22px] xl:text-[30px] h-auto xl:h-[155px] leading-none !font-semibold pb-[30px] xl:pb-0 mt-[22px] underline underline-offset-4 [text-decoration-thickness:1px]">
            <Link href={`/blog/ai/${slug}`}>{title}</Link>
          </h2>
        </div>
        <div className="border-t border-border-2 pt-[14px]">
          <Link
            href={`/blog/ai/${slug}`}
            className="inline-flex font-medium items-center gap-[5px] group/button"
          >
            Read More
            <FaArrowRightLong className="transition-all duration-500 group-hover/button:ms-[5px]" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default AiBlogCard;
