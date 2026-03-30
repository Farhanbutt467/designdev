import Link from "next/link";
import { TWorkType } from "@/types";
import Image from "next/image";

const BranWorkCard = ({ data, slug }: TWorkType) => {
  return (
    <div className="group">
      <div className="rounded-[20px] overflow-hidden relative before:absolute before:z-10 before:left-1/2 before:-translate-x-1/2 before:-top-[60px] group-hover:before:-top-[2px] before:transition-all after:absolute after:z-10 after:left-1/2 after:-translate-x-1/2 after:-bottom-[60px] group-hover:after:-bottom-[2px] after:transition-all work-card-style">
        <Link href={`/work/branding/${slug}`}>
          <Image
            src={data.image}
            className="w-full transition-transform  duration-500 group-hover:scale-105"
            width={845}
            height={650}
            alt="WorkImage"
          />
        </Link>
      </div>
      <div className="mt-[18px] xl:mt-7">
        <h3 className="text-[20px] md:text-[22px] xl:text-[30px] leading-[1.2] font-instrument font-semibold w-full md:w-1/2">
          {data.title}
        </h3>
        <div className="tags flex gap-[5px] mt-[17px]">
          {data.tags.map((item, index) => (
            <div
              key={index}
              className="tag text-[14px] uppercase inline-block py-3 px-4 border rounded-[40px] text-text-3"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranWorkCard;
