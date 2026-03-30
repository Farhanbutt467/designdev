import { TServiceType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BranServiceCard = ({ data, slug }: TServiceType) => {
  function formatSerialNumber(number: number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  return (
    <div className="has_fade_anim" data-delay={data.id ? data.id * 0.15 : 0}>
      <Link href={`/service/branding/${slug}`}>
        <div className="service-box hover:scale-[1.03] bg-[#1C1C1C] pt-[37px] pb-[36px] px-[30px] 2xl:pt-[47px] 2xl:pb-[46px] 2xl:px-[50px] rounded-[20px] transition-all duration-500">
          <span className="number text-[18px] text-text-fixed-2">
            {formatSerialNumber(data.id)}
          </span>
          <div className="icon mt-9 xl:mt-[86px] 2xl:mt-[136px]">
            <Image
              src={data.icon as string}
              alt="icon"
              height={50}
              width={50}
            />
          </div>
          <div className="content">
            <h3 className="title leading-[1.2] mt-[26px] text-[24px] xl:mt-[46px] xl:text-[26px] 2xl:mt-14 2xl:text-[30px] text-text-fixed-2">
              {data.title}
            </h3>
            <p className="text text-text-fixed-3 mt-[18px] xl:mt-[23px]">
              {data.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BranServiceCard;
