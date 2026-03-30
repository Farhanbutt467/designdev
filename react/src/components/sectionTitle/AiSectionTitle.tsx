import { convertWithBrSpan } from "@/lib/helper/converter";
import { cn } from "@/lib/utils";

const AiSectionTitle = ({
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
            "text-[38px] md:text-[46px] lg:text-60px xl:text-[80px] 2xl:text-[100px] max-w-[550px] xl:max-w-[730px] 2xl:max-w-[910px] leading-[0.95] mt-[-10px]",
            animation,
            className
          )}
          dangerouslySetInnerHTML={convertWithBrSpan(title)}
        />
      ) : (
        <h2
          className={cn(
            "text-[30px] sm:text-[35px] md:text-[38px] lg:text-[40px] xl:text-[42px] 2xl:text-[50px]  md:mt-[-11px] xl:mt-[-13px] 2xl:mt-[-17px]",
            animation,
            className
          )}
          dangerouslySetInnerHTML={convertWithBrSpan(title)}
        />
      )}
    </>
  );
};

export default AiSectionTitle;
