import ImageComponent from "@/components/tools/ImageComponent";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { cn } from "@/lib/utils";
import { TWorkType } from "@/types";
import Link from "next/link";

const MarketingWorkCard = ({ data, slug }: TWorkType) => {
  const { image, title, tags, id } = data;
  return (
    <Link
      href={`/work/marketing/${slug}`}
      className={cn("", id === 3 && "sm:col-span-2 col-auto")}
    >
      <div
        className="has_fade_anim group"
        data-fade-from="left"
        data-delay="0.15"
      >
        <div className="overflow-hidden">
          <ImageComponent
            width={id === 3 ? 1290 : 620}
            height={id === 3 ? 790 : 420}
            src={image}
            alt="work img"
            className="transition-all duration-500 w-full group-hover:scale-110 max-w-full"
          />
        </div>
        <div className="mt-[21px] xl:mt-[31px]">
          <h3
            className="text-[24px]"
            dangerouslySetInnerHTML={convertWithBrSpan(title)}
          />
          <div className="mt-4">
            <span className="text-[14px] uppercase inline-block text-text-3 group-hover:text-text transition-all duration-300">
              {tags[0]}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MarketingWorkCard;
