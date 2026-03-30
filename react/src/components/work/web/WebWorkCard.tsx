import ImageComponent from "@/components/tools/ImageComponent";
import { TWorkType } from "@/types";
import Link from "next/link";

const WebWorkCard = ({ data, slug }: TWorkType) => {
  const { title, image, icon, tags } = data;
  return (
    <Link href={`/work/web/${slug}`}>
      <div className="group relative max-w-[380px] md:max-w-[480px] lg:max-w-[580px] xl:max-w-[680px] 2xl:max-w-[880px] mr-[10px]">
        <div>
          <ImageComponent
            src={image}
            width={880}
            height={560}
            alt="web-work-img"
            className="h-auto"
          />
        </div>
        <div className="invisible group-hover:visible group-hover:opacity-100 absolute w-full h-full top-0 start-0 bg-[#FFFFFFE5] flex flex-col justify-end pt-[45px] px-[45px] pb-[50px] opacity-0 transition-all duration-500">
          <div className="absolute end-[45px] top-[45px]">
            <ImageComponent src={icon} width={66} height={50} alt="icon" />
          </div>
          <h3 className="text-[30px] uppercase text-text-fixed">{title}</h3>
          <span className="text-[14px] inline-block mt-2 text-text-fixed-4">
            {tags?.[0]}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WebWorkCard;
