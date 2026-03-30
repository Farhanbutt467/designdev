import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  feature: {
    title: string;
    description: string;
    icon: {
      light: string;
      dark: string;
    };
  };
};

const SeoFeatureCard = ({ feature }: Props) => {
  const { title, description, icon } = feature;
  return (
    <div className="has_fade_anim" data-fade-from="bottom">
      <div className="thumb">
        <ImageComponent
          src={icon.dark}
          darkSrc={icon.light}
          width={80}
          height={63}
          alt="feature_icon-l"
        />
      </div>
      <div className="mt-[21px] xl:mt-[41px]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-4 sm:max-w-[250px]">{description}</p>
      </div>
    </div>
  );
};

export default SeoFeatureCard;
