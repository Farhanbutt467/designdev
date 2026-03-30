import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  text: string;
  author: string;
  className?: string;
};

const Quote = ({ text, author, className }: Props) => {
  return (
    <div
      className={cn(
        "blog_details_quote bg-background-3 px-[25px] py-[25px] lg:py-[35px] lg:px-[45px] mb-10 xl:mb-[60px] grid gap-y-5 gap-x-[45px] lg:grid-cols-[60px,1fr] relative z-10",
        className
      )}
    >
      <div className="shape_1 absolute end-[45px] bottom-[35px] -z-10">
        <Image
          src="/assets/imgs/icon/quote-11.png"
          alt="shape_1"
          width={70}
          height={53}
        />
      </div>
      <div className="icon hidden lg:block">
        <Image
          src="/assets/imgs/icon/quote-10.png"
          alt="icon"
          width={70}
          height={53}
        />
      </div>
      <div className="blog_details_quote_info ">
        <div className="blog_details_quote_text ">
          <p className="text text-text-fixed-2 text-[23px] lg:text-[27px] leading-[1.11] font-beatricetrial">
            {text}
          </p>
        </div>
        <div className="blog_details_author">
          <span className="name text-[14px] leading-none mt-[30px] text-text-fixed-2 inline-block relative ps-[35px]">
            <div className="absolute w-[30px] h-[1px] bg-current top-1/2 transform -translate-y-1/2 start-0"></div>
            {author}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
