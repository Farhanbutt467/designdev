import Image from "next/image";
import { TBlogType } from "@/types";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type Props = TBlogType & {
  serialNo: number;
};
const BlogInnerCard = ({ data, slug, serialNo }: Props) => {
  const formatSerial = (number: number) => {
    return number < 10 ? `0${number}` : number;
  };

  const { title, thumb_img } = data;
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group">
        <div>
          <Image
            src={thumb_img}
            alt="blog_thumb"
            height={400}
            width={514}
            className="w-full h-auto"
          />
        </div>
        <div className=" pb-[13px] xl:pb-[23px] pt-5 xl:pt-[25px] grid grid-cols-[38px_1fr_auto] xl:grid-cols-[68px_1fr_auto] gap-[10px] transition-all duration-500">
          <span className="text-[18px] text-text-3 group-hover:text-text">
            {formatSerial(serialNo)}
          </span>
          <h3 className="text-[20px] xl:text-[24px] leading-[1.25] font-beatricetrial font-normal">
            {title}
          </h3>
          <span className=" transition-all duration-500 transform group-hover:translate-x-[10px] group-hover:translate-y-[-10px] hidden md:inline-block opacity-0 md:group-hover:opacity-100 ">
            <FaArrowRight className="transform rotate-[-45deg] text-[20px]" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogInnerCard;
