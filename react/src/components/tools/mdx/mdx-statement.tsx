import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  className?: string;
};

const Statement = ({ title, description, className }: Props) => {
  return (
    <div className={cn(" py-[60px] xl:py-[120px] 2xl:py-[150px]", className)}>
      <div className="">
        <div className=" grid gap-[30px_60px] grid-cols-1 lg:grid-cols-[1fr,600px] xl:grid-cols-[1fr,840px]">
          <div className="">
            <span className="text-[16px] uppercase">{title}</span>
          </div>
          <div className="">
            <h2 className="font-normal font-beatricetrial mt-0 text-[30px] sm:text-[35px] md:mt-[-11px] md:text-[40px] lg:mt-[-12px] lg:text-[44px] xl:mt-[-17px] xl:text-[60px] leading-[1.08]">
              {description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statement;
