import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  btnText: string;
  className?: string;
  link?: string;
  type?: "submit" | "button";
};
const ButtonFlip = ({ btnText, className, link, type }: Props) => {
  if (type === "submit" || type === "button") {
    return (
      <button
        type={type}
        className={cn(
          "btn-text-flip inline-block uppercase py-[22px] px-[38px] bg-transparent hover:text-text-fixed-2 hover:bg-background-fixed border [border-radius:0_30px_0_30px] border-text font-semibold text-[14px] leading-[1]",
          className
        )}
      >
        <span data-text={btnText}>{btnText}</span>
      </button>
    );
  }

  return (
    <Link
      href={link ? link : "#"}
      className={cn(
        "btn-text-flip inline-block uppercase py-[22px] px-[38px] bg-transparent hover:text-text-fixed-2 hover:bg-background-fixed border [border-radius:0_30px_0_30px] border-text font-semibold text-[14px] leading-[1]",
        className
      )}
    >
      <span data-text={btnText}>{btnText}</span>
    </Link>
  );
};

export default ButtonFlip;
