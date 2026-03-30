import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  icon: {
    light: string;
    dark: string;
  };
  title: string;
  description: string;
};

const AboutProcessCard = ({ icon, title, description }: Props) => {
  return (
    <div className="has_fade_anim" data-fade-from="left" data-delay="0.15">
      <div>
        <ImageComponent
          src={icon.light}
          darkSrc={icon.dark}
          alt="icon"
          width={90}
          height={90}
        />
      </div>
      <div className="mt-[34px] xl:mt-[44px]">
        <h3 className="text-[26px] leading-[1.28]">{title}</h3>
        <p className="mt-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default AboutProcessCard;
