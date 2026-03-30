import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  image: string;
};

const WebImage = ({ image }: Props) => {
  return (
    <div className="!overflow-hidden">
      <ImageComponent
        src={image}
        alt="web-image"
        width={1920}
        height={950}
        className="w-full h-auto"
        dataSpeed={0.8}
      />
    </div>
  );
};

export default WebImage;
