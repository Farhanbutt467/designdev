import ButtonSwap from "@/components/elements/button/ButtonSwap";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { TServiceType } from "@/types";
import Link from "next/link";

const MarketingServiceCard = ({ data, slug }: TServiceType) => {
  return (
    <div
      className="has_fade_anim border-b border-border-2"
      data-fade-from="bottom"
    >
      <Link href={`/service/marketing/${slug}`} className="block">
        <div className="group py-[30px] px-5 md:py-[60px] md:px-[50px] grid gap-y-5 gap-x-[50px] grid-cols-[auto] lg:grid-cols-[auto_570px] xl:grid-cols-[auto_720px] relative z-[1]">
          <div className="group-hover:opacity-100 absolute w-full h-full top-0 start-0 z-[-1] opacity-0 transition-all duration-500">
            <video
              src={data.bg_video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
            <div className="absolute w-full h-full bg-[rgba(18,18,18,0.4)] top-0 start-0"></div>
          </div>
          <h3
            className="text-[24px] xl:text-[30px] transition-all duration-500 group-hover:text-text-fixed-2"
            dangerouslySetInnerHTML={convertWithBrSpan(data.title)}
          />
          <div className="grid gap-y-3 gap-x-[40px] grid-cols-[auto] md:grid-cols-[284px_auto] items-start">
            <p className="transition-all duration-500 group-hover:text-text-fixed-2">
              {data.description}
            </p>
            <div className="ms-0 md:ms-auto mt-[8px]">
              <ButtonSwap
                isLink={false}
                bgColor={
                  "bg-background border group-hover:bg-theme group-hover:border-theme"
                }
                textColor={"text-sm text-text group-hover:text-text-fixed"}
                arrowWidthHeight="w-[40px] h-[40px]"
                textClassName="px-[22px] font-normal"
                buttonText="Explore services"
                rootClassName="wc-swap-btn-sm"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MarketingServiceCard;
