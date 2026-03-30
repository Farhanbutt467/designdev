import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  title: string;
  children?: {
    name: string;
    path: string;
    isLocation?: boolean;
  }[];
};

const FooterNav = ({ title, children }: Props) => {
  return (
    <div className="">
      <h2 className=" text-text-fixed-2 text-[22px] xl:text-[30px] leading-[.73]">
        {title}
      </h2>
      <ul className=" mt-[27px]">
        {children?.map((item, index) => (
          <li
            key={index}
            className={cn(
              "text-text-fixed-3 hover:text-text-fixed-2 !leading-[30px] text-[18px] transition-all duration-300",
              item.isLocation && "underline inline-block mb-[22px]"
            )}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
