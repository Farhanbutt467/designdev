import ImageComponent from "@/components/tools/ImageComponent";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ActionBtnType } from "@/types";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";

type Props = {
  thumb: {
    light: string;
    dark: string;
  };
  description: string;
  action_btn: ActionBtnType;
};

const AiInfoCard = ({ thumb, description, action_btn }: Props) => {
  return (
    <div className="py-10 px-[35px] 2xl:py-[60px] 2xl:px-[55px] bg-background-5 rounded-[25px]">
      <div
        className="has_fade_anim"
        data-fade-from="left"
        data-duration="0.75"
        data-delay="0.60"
      >
        <ImageComponent
          src={thumb.light}
          darkSrc={thumb.dark}
          width={150}
          height={130}
          className="w-[70px] lg:w-[100px] 2xl:w-[150px]"
        />
      </div>
      <div
        className="has_fade_anim mt-6"
        data-fade-from="left"
        data-duration="0.75"
        data-delay="0.60"
      >
        <h2 className="text-[18px] 2xl:text-[22px] font-medium leading-[1.36] text-text">
          {description}
        </h2>
      </div>
      <div
        className="has_fade_anim mt-[36px] xl:mt-[50px] 2xl:mt-[66px]"
        data-fade-from="left"
        data-duration="0.75"
        data-delay="0.60"
        data-on-scroll="0"
      >
        <Link
          className={cn(
            buttonVariants({ variant: "Ai" }),
            "bg-background-2 text-text-2 hover:bg-theme hover:text-text-fixed-2"
          )}
          href={action_btn.link}
        >
          <span data-text={action_btn.label}>{action_btn.label}</span>
          <FaPlay />
        </Link>
      </div>
    </div>
  );
};

export default AiInfoCard;
