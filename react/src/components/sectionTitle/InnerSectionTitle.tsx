import { cn } from "@/lib/utils";

const InnerSectionTitle = ({
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
        <h1 className={cn("inner-section-title", animation, className)}>
          {title}
        </h1>
      ) : (
        <h2 className={cn("inner-section-title", animation, className)}>
          {title}
        </h2>
      )}
    </>
  );
};

export default InnerSectionTitle;
