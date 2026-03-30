import { convertWithBrSpan } from "@/lib/helper/converter";
import { cn } from "@/lib/utils";

const SectionTitle = ({
  title,
  className,
  heading1 = false,
  animation = "has_fade_anim",
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
            "text-[30px] sm:text-[35px] md:text-[40px] md:mt-[-11px] lg:text-[44px] lg:mt-[-12px] xl:text-[60px] xl:mt-[-17px] leading-[1.08]",
            animation,
            className
          )}
          dangerouslySetInnerHTML={convertWithBrSpan(title)}
        />
      ) : (
        <h2
          className={cn(
            "text-[30px] sm:text-[35px] md:text-[40px] md:mt-[-11px] lg:text-[44px] lg:mt-[-12px] xl:text-[60px] xl:mt-[-17px] leading-[1.08]",
            animation,
            className
          )}
        >
          {title}
        </h2>
      )}
    </>
  );
};

export default SectionTitle;
