import { FaArrowRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ActionBtnType } from "@/types";

type Props = {
  className?: string;
  action_btn: ActionBtnType;
};

const TopLineButton = ({ action_btn, className }: Props) => {
  return (
    <Link
      href={action_btn.link}
      className={cn(
        "wc-btn-underline line-top max-w-[270px] xl:max-w-[300px] text-[16px] xl:text-[18px] pt-[15px] xl:pt-[20px] !whitespace-normal leading-[26px] normal-case font-normal gap-10 pb-0 block text-text-fixed dark:text-text-fixed-3",
        className
      )}
    >
      {action_btn.label}
      <FaArrowRight className="-rotate-45 text-[40px] text-text" />
    </Link>
  );
};

export default TopLineButton;
