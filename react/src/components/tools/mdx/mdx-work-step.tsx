import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  className?: string;
};

const WorkStep = ({ title, description, className }: Props) => {
  return (
    <div
      className={cn(
        "pt-5 border-t-[1px] lg:pt-[50px] lg:border-0 relative before:absolute before:content-[''] before:w-[7px] before:h-[7px] before:rounded-full before:top-[-4px] before:left-0 before:bg-background-2",
        className
      )}
    >
      <h2 className="font-normal text-[22px] leading-[1.29]">{title}</h2>
      <p className="!mt-[15px]">{description}</p>
    </div>
  );
};

export default WorkStep;
