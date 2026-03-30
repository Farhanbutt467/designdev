import { convertWithBr } from "@/lib/helper/converter";
import { cn } from "@/lib/utils";
import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  title: string;
  icon: {
    dark: string;
    light: string;
  };
  serial_no: string;
  feature_list: string[];
  className?: string;
};

const WebServiceProcess = ({
  title,
  icon,
  serial_no,
  feature_list,
  className,
}: Props) => {
  return (
    <div className="has_fade_anim" data-fade-from="left" data-delay="0.15">
      <h4
        dangerouslySetInnerHTML={convertWithBr(title)}
        className="text-[24px] leading-[1.08] uppercase !font-semibold"
      />
      <div className="mt-[13px] xl:mt-[33px] z-[1] relative before:content-[''] before:absolute before:w-full before:h-px before:bg-border before:start-0 before:top-1/2 before:-translate-y-1/2 before:z-[-1] after:content-[''] after:absolute after:w-2 after:h-2 after:bg-border after:rounded-full after:start-0 after:top-1/2 after:-translate-y-1/2 after:z-[1]">
        <span className="text-[16px] font-teko font-semibold w-[30px] h-[30px] border border-border flex justify-center items-center rounded-full ms-auto bg-background relative z-[1]">
          {serial_no}
        </span>
      </div>
      <div className="mt-[20px] xl:mt-[40px]">
        <ImageComponent
          src={icon.light}
          darkSrc={icon.dark}
          width={52}
          height={60}
          alt="icon"
          className="w-auto"
        />
      </div>
      <div className="mt-[30px]">
        <ul>
          {feature_list.map((item, i) => (
            <li
              key={i}
              className="flex gap-[10px] text-[18px] first:mt-0 mt-[10px]"
            >
              <span>+</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebServiceProcess;
