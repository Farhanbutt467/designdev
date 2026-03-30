import ImageComponent from "@/components/tools/ImageComponent";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  icon: {
    light: string;
    dark: string;
  };
  active: boolean;
};

const WebSkillCard = ({ title, description, icon, active }: Props) => {
  return (
    <div
      className={cn(
        "bg-transparent relative p-0 text-start pt-[18px]",
        active && "nav-link-before"
      )}
    >
      <div className="skill-nav flex gap-5 items-start relative">
        <div
          className={cn(
            "w-[65px] h-[65px] bg-[#12121205] inline-flex justify-center items-center min-w-[65px] rounded-full",
            active && "bg-theme"
          )}
        >
          <ImageComponent
            src={icon.light}
            darkSrc={icon.dark}
            width={25}
            height={25}
          />
        </div>
        <div>
          <h3 className="title text-[24px] lg:text-[30px] xl:text-[36px] leading-[.88] uppercase xl:pt-[19px]">
            {title}
          </h3>
          <p className="text mt-[8px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WebSkillCard;
