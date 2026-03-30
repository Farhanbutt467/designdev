import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  bgColor?: string;
  textColor?: string;
  arrowWidthHeight?: string;
  textClassName?: string;
  link?: string;
  target?: string;
  buttonText?: string;
  rootClassName?: string;
  arrowIcon?: React.ReactNode;
  isLink?: boolean;
};

const ButtonSwap = ({
  bgColor,
  textColor,
  arrowWidthHeight,
  textClassName,
  link = "#",
  target,
  buttonText = "Get Started",
  rootClassName = "wc-swap-btn",
  arrowIcon,
  isLink = true,
}: Props) => {
  const content = (
    <>
      <span
        className={cn(
          "transition-all bg-background-2 w-[70px] h-[70px] flex justify-center items-center rounded-full",
          bgColor,
          arrowWidthHeight
        )}
        aria-hidden="true"
      >
        {arrowIcon ?? (
          <FaArrowRight
            className={cn(
              "transform rotate-[-45deg] text-text-2 text-lg",
              textColor
            )}
          />
        )}
      </span>
      <span
        className={cn(
          "transition-all bg-background-2 font-medium flex justify-center items-center rounded-full text-[15px] text-text-2 uppercase z-10 whitespace-nowrap px-[42px]",
          bgColor,
          textColor,
          textClassName
        )}
      >
        {buttonText}
      </span>
      <span
        className={cn(
          "transition-all bg-background-2 w-[70px] h-[70px] flex justify-center items-center rounded-full",
          bgColor,
          arrowWidthHeight
        )}
        aria-hidden="true"
      >
        {arrowIcon ?? (
          <FaArrowRight
            className={cn(
              "transform rotate-[-45deg] text-text-2 text-lg",
              textColor
            )}
          />
        )}
      </span>
    </>
  );

  return isLink ? (
    <Link
      href={link}
      target={target}
      className={rootClassName}
      aria-label={buttonText}
    >
      {content}
    </Link>
  ) : (
    <div className={rootClassName} role="button" aria-label={buttonText}>
      {content}
    </div>
  );
};

export default ButtonSwap;
