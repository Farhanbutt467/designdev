import { cn } from "@/lib/utils";

const MainSectionTitle = ({
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
            "font-instrument font-semibold text-[28px] mt-[-5px] sm:text-[30px] sm:mt-[-8px] md:text-[36px] md:mt-[-10px] lg:text-[40px] lg:mt-[-12px] xl:text-[60px] xl:mt-[-20px] 2xl:text-[70px] 2xl:mt-[-24px]",
            animation,
            className
          )}
        >
          {title}
        </h1>
      ) : (
        <h2
          className={cn(
            "font-instrument font-semibold text-[28px] mt-[-5px] sm:text-[30px] sm:mt-[-8px] md:text-[36px] md:mt-[-10px] lg:text-[40px] lg:mt-[-12px] xl:text-[60px] xl:mt-[-20px] 2xl:text-[70px] 2xl:mt-[-24px]",
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

export default MainSectionTitle;
