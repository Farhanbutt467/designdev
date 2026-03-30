import Image from "next/image";
import { convertWithBr } from "@/lib/helper/converter";

type Props = {
  image: string;
  title: string;
  tag: string;
};

const SlicerCard = ({ image, title, tag }: Props) => {
  return (
    <>
      <Image
        src={image}
        alt="image"
        width={1920}
        height={915}
        className="swiper-slicer-image max-w-none"
        priority
      />

      <div className="slide-content absolute w-full bottom-[20%] opacity-0  transition-all duration-500">
        <div className="container !max-w-[1850px]">
          <span
            className=" text-[14px] xl:text-[16px] leading-[1.25] uppercase text-black"
            dangerouslySetInnerHTML={convertWithBr(tag)}
          />
          <h2
            className=" text-[36px] sm:text-[40px] md:text-[50px] xl:text-[80px] leading-none font-medium uppercase mt-5 text-black"
            dangerouslySetInnerHTML={convertWithBr(title)}
          />
        </div>
      </div>
    </>
  );
};

export default SlicerCard;
