import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  image: string;
};

const DesignImage2 = ({ image }: Props) => {
  return (
    <div className="overflow-hidden">
      <div>
        <ImageComponent
          src={image}
          width={1920}
          height={950}
          alt="section image2"
          dataSpeed={0.8}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default DesignImage2;
