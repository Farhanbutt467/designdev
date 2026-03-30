import Image from "next/image";

type Props = {
  image: string;
  title: string;
  tag: string;
};

const MaterialCard = ({ image, title, tag }: Props) => {
  return (
    <>
      <Image
        src={image}
        alt="image"
        data-swiper-material-scale="1.25"
        width={800}
        height={550}
        className=" absolute left-[0%] top-0 w-full h-full block rounded-none"
        style={{ objectFit: "cover" }}
        priority
      />

      <div className=" swiper-material-animate-opacity absolute left-0 bottom-0 w-full h-1/2 box-border py-7 px-[30px] xl:py-12 xl:px-[50px] flex flex-col font-medium justify-end items-start whitespace-nowrap">
        <h2
          className=" text-[22px] sm:text-[26px] xl:text-[36px] leading-none text-text-fixed-2
         uppercase"
        >
          {title}
        </h2>
        <span className=" text-[14px] mt-3 xl:mt-[17px] font-normal uppercase text-text-fixed-2 inline-block">
          {tag}
        </span>
      </div>
    </>
  );
};

export default MaterialCard;
