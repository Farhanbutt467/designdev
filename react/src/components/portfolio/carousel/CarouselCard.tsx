import Image from "next/image";

type Props = {
  image: string;
  title: string;
  tag: string;
};

const CarouselCard = ({ image, title, tag }: Props) => {
  return (
    <div className=" h-full">
      <Image
        src={image}
        alt="image"
        width={800}
        height={550}
        className="w-full h-full block rounded-none"
        style={{ objectFit: "cover" }}
        priority
      />

      <div className="slide-content absolute left-0 w-full bottom-0 py-7 px-[30px] xl:py-[38px] xl:px-10 invisible opacity-0 transition-all duration-500">
        <h2 className="title text-xl sm:text-2xl font-medium text-text-fixed-2 uppercase leading-none">
          {title}
        </h2>
        <span className="tag text-xs font-normal uppercase text-text-fixed-2 inline-block leading-none mt-[10px]">
          {tag}
        </span>
      </div>
    </div>
  );
};

export default CarouselCard;
