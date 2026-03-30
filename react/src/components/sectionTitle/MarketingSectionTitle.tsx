import { convertWithBrSpan } from "@/lib/helper/converter";
import { cn } from "@/lib/utils";

const MarketingSectionTitle = ({
  title,
  className,
  heading1 = false,
  animation = "has_char_anim",
}: {
  title: string;
  className?: string;
  heading1?: boolean;
  animation?: string;
}) => {
  return (
    <>
      {heading1 ? (
        <h1
          className={cn(
            "text-[40px] md:text-[50px] lg:text-[70px] xl:text-[100px] 2xl:text-[120px] leading-[.92] font-light",
            animation,
            className
          )}
          dangerouslySetInnerHTML={convertWithBrSpan(title)}
        />
      ) : (
        <h2
          className={cn(
            "text-[35px] md:text-[40px] lg:text-[46px] xl:text-[55px] 2xl:text-[60px]",
            animation,
            className
          )}
          dangerouslySetInnerHTML={convertWithBrSpan(title)}
        />
      )}
    </>
  );
};

export default MarketingSectionTitle;
