import { convertWithBrSpan } from "@/lib/helper/converter";
import { cn } from "@/lib/utils";

const VideoSectionTitle = ({
  title,
  className,
  heading1 = false,
  animation = "has_text_mov_anim",
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
            "text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px] mt-[-1px] 2xl:mt-[-3px] leading-[.88] !font-bold uppercase",
            animation,
            className
          )}
          dangerouslySetInnerHTML={convertWithBrSpan(title)}
        />
      ) : (
        <h2
          className={cn(
            "text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px] mt-[-1px] 2xl:mt-[-3px] leading-[.88] !font-bold uppercase",
            animation,
            className
          )}
          dangerouslySetInnerHTML={convertWithBrSpan(title)}
        />
      )}
    </>
  );
};

export default VideoSectionTitle;
