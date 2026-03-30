import { TServiceType } from "@/types";
import ImageComponent from "../tools/ImageComponent";
import Link from "next/link";

type Props = {
  service: TServiceType;
};

const ServiceInnerCard = ({ service }: Props) => {
  const { icon, title, features } = service?.data;

  return (
    <div className="px-[30px] xl:px-[70px] border-s border-[#ECE7E4] dark:border-[#252525]">
      <div className="pb-[25px] xl:pb-12">
        <ImageComponent
          src={typeof icon === "object" ? icon?.dark : icon}
          darkSrc={typeof icon === "object" ? icon?.light : icon}
          width={60}
          height={60}
          alt="icon"
        />
      </div>
      <Link href={`/service/${service?.slug}`}>
        <h2 className="text-[24px] xl:text-[30px] pb-[25px] leading-[1.08]">
          {title}
        </h2>
      </Link>
      <ul className="list-disc list-inside">
        {features.map((item, index) => (
          <li
            className="text-[18px] text-text-3 font-light pb-[15px] "
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceInnerCard;
