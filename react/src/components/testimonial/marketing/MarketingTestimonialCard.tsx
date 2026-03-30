import ImageComponent from "@/components/tools/ImageComponent";
import { convertWithBrSpan } from "@/lib/helper/converter";

type Props = {
  text: string;
  icon: {
    light: string;
    dark: string;
  };
  author: {
    name: string;
    post: string;
    avatar: string;
  };
};

const MarketingTestimonialCard = ({ text, icon, author }: Props) => {
  return (
    <div>
      <ImageComponent
        width={35}
        height={25}
        src={icon.light}
        darkSrc={icon.dark}
        alt="quote icon"
        className="inline-block max-w-full"
      />
      <div className="mt-[42px]">
        <p className="text-[22px] leading-[1.29] text-text font-light">
          {text}
        </p>
      </div>
      <div className="flex mt-[42px] gap-[10px] items-center">
        <div className=" w-[50px] h-[50px] rounded-full overflow-hidden">
          <ImageComponent
            src={author.avatar}
            width={50}
            height={50}
            alt="avatar img"
            className="max-w-full"
          />
        </div>
        <div>
          <h3
            className="text-[18px]"
            dangerouslySetInnerHTML={convertWithBrSpan(author.name)}
          />
          <span className="text-[14px] inline-block mt-[7px] text-text-3">
            {author.post}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarketingTestimonialCard;
