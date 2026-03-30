import Image from "next/image";

type Props = {
  image: string;
  title: string;
  tag: string;
};

const SpringCard = ({ image, title, tag }: Props) => {
  return (
    <>
      <Image
        src={image}
        alt="image"
        width={850}
        height={500}
        className="w-full h-full block object-cover min-h-[330px]"
        priority
      />
      <div className="content mt-4">
        <h2 className="title text-[22px] sm:text-2xl leading-none uppercase font-medium">
          {title}
        </h2>
        <span className="tag text-xs font-normal uppercase inline-block leading-none mt-[10px] text-text-3">
          {tag}
        </span>
      </div>
    </>
  );
};

export default SpringCard;
