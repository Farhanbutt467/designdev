import ImageComponent from "../tools/ImageComponent";

type Props = {
  icon: {
    light: string;
    dark: string;
  };
  name: string;
  description: string;
};

const AiClientCard = ({ icon, name, description }: Props) => {
  return (
    <div className="has_fade_anim" data-fade-from="bottom" data-delay="0.15">
      <div className="w-[129px]">
        <ImageComponent
          src={icon.light}
          darkSrc={icon.dark}
          width={123}
          height={29}
          alt="client icon"
          className="h-auto w-auto max-w-full"
        />
      </div>
      <div className="mt-[23px] xl:mt-[28px]">
        <h3 className="text-[18px]">{name}</h3>
        <p className="text-[14px] leading-[1.28] mt-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default AiClientCard;
