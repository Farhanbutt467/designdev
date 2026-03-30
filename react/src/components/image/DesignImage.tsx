import ImageComponent from "../tools/ImageComponent";

type Props = {
  image: string;
};

const DesignImage = ({ image }: Props) => {
  return (
    <div className="inner-container overflow-hidden">
      <div>
        <ImageComponent
          src={image}
          width={1290}
          height={650}
          alt="section image"
          dataSpeed={0.8}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default DesignImage;
