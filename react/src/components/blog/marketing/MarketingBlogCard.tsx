import ButtonSwap from "@/components/elements/button/ButtonSwap";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { TBlogType } from "@/types";

const MarketingBlogCard = ({ data, slug }: TBlogType) => {
  const {
    title2 = "",
    short_description,
    published_date,
    author_name = "",
    author_image,
    location,
  } = data;
  return (
    <article className="grid gap-[20px_60px] grid-cols-1 md:grid-cols-[auto_410px] xl:grid-cols-[auto_470px] 2xl:grid-cols-[auto_520px] justify-between items-start ">
      <div className="flex items-center gap-[15px]">
        <Avatar className="w-[50px] h-[50px]">
          <AvatarImage src={author_image} alt="avatar" />
          <AvatarFallback>AU</AvatarFallback>
        </Avatar>
        <div>
          <h3
            className="text-[18px]"
            dangerouslySetInnerHTML={convertWithBrSpan(author_name as string)}
          />
          <span className="text-sm mt-1.5 text-text-3">Blog writer</span>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center gap-[7px] text-xs uppercase ">
            <span className="py-1 px-2 bg-[#F1F1F4] dark:bg-[#333333] text-primary rounded-[20px] inline-block">
              {location}
            </span>
            <span className="relative inline-block text-text-3 ps-[25px] before:absolute before:content-[''] before:w-[15px] before:h-[1px] before:start-0 before:top-1/2 before:translate-y-[-50%] before:bg-text-3">
              {published_date}
            </span>
          </div>
          <h2
            className="text-[26px] xl:text-[30px] mt-[15px]"
            dangerouslySetInnerHTML={convertWithBrSpan(title2 as string)}
          />

          <p className="mt-[15px]">{short_description}</p>
        </div>
        <div className="mt-[33px]">
          <ButtonSwap
            link={`/blog/marketing/${slug}`}
            bgColor={
              "bg-background border group-hover:bg-theme group-hover:border-theme"
            }
            textColor={"text-sm text-text group-hover:text-text-fixed-2"}
            arrowWidthHeight="w-[40px] h-[40px]"
            textClassName="px-[22px] font-normal"
            buttonText="Read more"
            rootClassName="wc-swap-btn-sm group"
          />
        </div>
      </div>
    </article>
  );
};

export default MarketingBlogCard;
