import ImageComponent from "@/components/tools/ImageComponent";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ActionBtnType } from "@/types";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";

type Props = {
  title: string;
  tag: string;
  description: string;
  features: string[];
  price: string;
  action_btn: ActionBtnType;
};

const VideoPricingCard = ({
  title,
  description,
  tag,
  features,
  price,
  action_btn,
}: Props) => {
  return (
    <div
      className="has_fade_anim bg-background-4 py-[30px] px-5 lg:p-[50px] "
      data-fade-from="left"
      data-delay="0.15"
    >
      <span
        className={cn(
          "bg-[#F6F6F6] dark:bg-[#2D2D2D] text-[16px] lg:text-[20px] font-bold font-khand uppercase pt-[10px] pb-[5px] px-[19px] lg:pt-[15px] lg:pb-[10px] lg:px-[19px] inline-block leading-none rounded-[40px]",
          tag.toLowerCase() === "premium" && "!bg-[#d8544d] text-text-fixed-2"
        )}
      >
        {tag}
      </span>
      <h2 className="text-[26px] lg:text-[36px] mt-[27px] lg:mt-[47px] leading-none !font-bold uppercase">
        {title}
      </h2>
      <p className="mt-[10px]">{description}</p>
      <div className="mt-[33px]">
        <ul>
          {features.map((item, index) => (
            <li
              key={`vid-pricing-feature-${index}`}
              className="flex items-center first:mt-0 mt-[15px]"
            >
              <ImageComponent
                src="/assets/imgs/shape/check-light.png"
                darkSrc="/assets/imgs/shape/check.png"
                width={30}
                height={30}
                alt="shape"
                className="me-[10px]"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <h3 className="text-[40px] lg:text-[70px] 2xl:text-[90px] leading-none mt-[41px] !font-bold">
        ${price}
      </h3>
      <Link
        href={action_btn.link}
        className={cn(
          buttonVariants({ variant: "Video" }),
          "text-[16px] mt-[21px]"
        )}
      >
        <span data-text={action_btn.label}>{action_btn.label}</span>
        <FaPlay className="!h-[13px] !w-[13px]" />
      </Link>
    </div>
  );
};

export default VideoPricingCard;
