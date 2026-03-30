import ImageComponent from "../tools/ImageComponent";

type Props = {
  process: {
    id: number;
    title: string;
    description: string;
    icon: {
      dark: string;
      light: string;
    };
  };
};

const CareerProcessCard = ({ process }: Props) => {
  const { title, description, icon } = process;

  return (
    <div>
      <div className="relative w-[57px] h-[60px]">
        <ImageComponent
          src={icon.dark}
          darkSrc={icon.light}
          alt={`${title} icon`}
          width={57}
          height={60}
          priority
        />
      </div>
      <div className="mt-[33px] xl:mt-[43px]">
        <h3 className="text-[24px] xl:text-[30px]">{title}</h3>
        <p className="mt-[25px]">{description}</p>
      </div>
    </div>
  );
};

export default CareerProcessCard;
