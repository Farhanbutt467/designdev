import ImageComponent from "@/components/tools/ImageComponent";
import { TBlogType } from "@/types";
import Link from "next/link";

const WebBlogCard = ({ data, slug }: TBlogType) => {
  const {
    title,
    short_description,
    author_name,
    tags,
    published_date,
    thumb_img,
  } = data;

  return (
    <div className="has_fade_anim" data-fade-from="left" data-delay="0.15">
      <Link href={`/blog/web/${slug}`}>
        <article className="pt-[28px] pb-[26px] px-[25px]  2xl:pt-[43px] 2xl:pb-[42px] 2xl:px-[45px] transition-all duration-500 bg-background-fixed hover:bg-theme group overflow-hidden">
          <h2 className="underline text-[24px] xl:text-[28px] 2xl:text-[36px] leading-[.88] text-text-fixed-2 !font-semibold uppercase group-hover:text-text-fixed transition-all duration-500">
            {title}
          </h2>
          <div className="mt-[28px] xl:mt-[38px] me-[-45px] overflow-hidden">
            <ImageComponent
              src={thumb_img}
              width={365}
              height={280}
              alt="thumb-img"
              className="transition-all duration-500 group-hover:scale-[1.1] w-full"
            />
          </div>
          <p className="mt-[20px] text-text-fixed-3 transition-all duration-500 group-hover:text-text-fixed">
            {short_description}
          </p>
          <div>
            <h3 className="text-[24px] text-text-fixed-2 uppercase mt-5 font-medium transition-all duration-500 group-hover:text-text-fixed">
              {author_name}
            </h3>
            <span className="text-[16px] font-medium uppercase font-teko inline-block mt-2 transition-all duration-500 text-text-fixed-4">
              {tags[0]?.name}, {tags[1]?.name}- {published_date}
            </span>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default WebBlogCard;
