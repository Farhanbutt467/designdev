import { useDirection } from "@/context/app.context";
import { cn } from "@/lib/utils";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

type Props = {
  position: string;
  className?: string;
  paginationClassName?: string;
  buttonClassName?: string;
};

const SliderNav = ({
  position,
  className,
  paginationClassName,
  buttonClassName,
}: Props) => {
  const { direction } = useDirection();
  return (
    <>
      <div
        className={cn(
          "slider-nav overflow-hidden flex absolute justify-between w-full items-center h-20 xl:h-[100px] z-10",
          className,
          (position === "top" && "!top-full") || "!bottom-0"
        )}
      >
        <div
          className={cn(
            "portfolio-button-prev text-[14px] uppercase flex gap-5 leading-none z-[2] relative cursor-pointer",
            buttonClassName
          )}
        >
          {direction === "rtl" ? <FaAngleRight /> : <FaAngleLeft />} Prev
        </div>
        <div
          className={cn(
            "portfolio-button-next text-[14px] uppercase flex gap-5 leading-none z-[2] relative cursor-pointer",
            buttonClassName
          )}
        >
          Next {direction === "rtl" ? <FaAngleLeft /> : <FaAngleRight />}
        </div>
      </div>
      <div
        className={cn(
          "portfolio-pagination absolute  h-20 2xl:h-[100px] !left-0 !right-0 hidden md:!inline-flex gap-10 xl:gap-5 !mx-auto !items-center !justify-center z-[1] ",
          (position === "bottom" &&
            "!top-[calc(100%-40px)] xl:!top-[calc(100%-50px)]") ||
            "!top-full",
          paginationClassName
        )}
      ></div>
    </>
  );
};

export default SliderNav;
