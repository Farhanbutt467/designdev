import Image from "next/image";

type Props = {
  image: string;
};

const SeoImage = ({ image }: Props) => {
  return (
    <div className="inner-container large overflow-hidden">
      <div>
        <Image
          alt="image"
          src={image}
          width={1820}
          height={851}
          className="w-full h-auto"
          data-speed=".7"
        />
      </div>
    </div>
  );
};

export default SeoImage;
