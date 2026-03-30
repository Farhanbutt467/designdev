import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TWorkType } from "@/types";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const SeoWorkCard = ({ data, slug }: TWorkType) => {
  const { image, tags, title } = data;
  return (
    <div className="project_box inline-block relative group w-full">
      <div className="md:group-hover:scale-[1.09] relative rounded-[5px] overflow-hidden transition-all duration-500 after:absolute after:content-[''] after:top-0 after:start-0 after:w-full after:h-full after:[background-image:linear-gradient(180deg,rgba(18,18,18,0)_38.85%,#121212_100%)]">
        <Image
          src={image}
          alt="thumb image"
          width={425}
          height={520}
          className="w-full h-full object-cover rounded-[5px]"
          priority
        />
      </div>
      <div className="meta absolute top-0 start-0 m-[30px] 2xl:m-10">
        <span className="tag text-[14px] uppercase leading-none inline-block py-[10px] px-[15px] rounded-[5px] bg-[#FFFFFF59] text-text-fixed">
          {tags?.[0]}
        </span>
      </div>
      <div className="content absolute bottom-0 start-0 m-[30px] 2xl:m-10 overflow-hidden">
        <h3 className="title text-[22px] 2xl:text-[24px] text-text-fixed-2 font-semibold leading-[1.25] transition-all duration-500">
          <Link href={`/work/seo/${slug}`}>{title}</Link>
        </h3>
        <Link
          href={`/work/seo/${slug}`}
          className={cn(
            buttonVariants({ variant: "circle" }),
            "text-text-fixed-2 !h-[60px] !w-[60px] 2xl:!h-[70px] 2xl:!w-[70px] bg-primary lg:opacity-0 lg:mb-[-88px] mt-7 lg:group-hover:mb-0 lg:group-hover:opacity-100"
          )}
        >
          <FaArrowRight className="-rotate-45" />
        </Link>
      </div>
    </div>
  );
};

export default SeoWorkCard;
