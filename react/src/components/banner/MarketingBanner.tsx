import Image from "next/image";

type Props = {
  image: string;
};

const MarketingBanner = ({ image }: Props) => {
  return (
    <section>
      <Image
        src={image}
        width={1920}
        height={970}
        className="w-full"
        alt="gallery image"
      />
    </section>
  );
};

export default MarketingBanner;
