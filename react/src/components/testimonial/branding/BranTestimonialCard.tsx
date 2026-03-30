import ImageComponent from "@/components/tools/ImageComponent";
import { convertWithBrSpan } from "@/lib/helper/converter";
import Image from "next/image";

type testimonialProps = {
  icon: string;
  text: string;
  author: {
    name: string;
    post: string;
    publisher: {
      logo: {
        light: string;
        dark: string;
      };
    };
  };
};

const BranTestimonialCard = ({ icon, text, author }: testimonialProps) => {
  const { logo } = author.publisher;
  return (
    <div className="pt-10 pb-[37px] px-[30px] lg:pt-[60px] lg:pb-[57px] lg:px-[50px] h-full 2xl:px-[70px] relative before:absolute before:content-[''] before:w-[1px] before:h-[150%] before:bg-[#EFEFEF] dark:before:bg-[#2C2C2C] before:top-0 before:start-[-25px]">
      <div className=" flex flex-col justify-between h-full">
        <div>
          <div>
            <Image src={icon} width={52} height={37} alt="icon" />
          </div>
          <div className="mt-10 md:mt-[92px]">
            <p
              className="leading-[1.25] text-[20px] lg:text-[24px] 2xl:text-[30px] font-instrument font-semibold text-[#888888] [&_span]:text-text"
              dangerouslySetInnerHTML={convertWithBrSpan(text)}
            />
          </div>
        </div>
        <div className="flex gap-x-10 gap-y-[20px] items-center justify-between mt-[46px]">
          <div className="leading-none text-[18px]">
            <h3 className="font-plusjakartasans font-bold">{author.name}</h3>
            <span className="font-primary inline-block mt-[7px] text-text-3">
              {author.post}
            </span>
          </div>
          <div>
            <ImageComponent
              src={logo.light}
              darkSrc={logo.dark}
              width={93}
              height={26}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranTestimonialCard;
