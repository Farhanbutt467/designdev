import Image from "next/image";

type Props = {
  image: string;
};

const BrandingImage = ({ image }: Props) => {
  return (
    <div className="image_wrapper main-section-style !pb-0 overflow-hidden">
      <Image
        src={image}
        alt="branding-image"
        width={1920}
        height={1000}
        className="transform translate-y-[-16.4004px]"
      />
    </div>
  );
};

export default BrandingImage;
