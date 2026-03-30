import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  icon: string;
  title: string;
  description: string;
};

const AiFeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div
      className="has_fade_anim pt-[27px] pb-[23px] 2xl:pt-[37px] 2xl:pb-[33px] border-b first:border-t grid gap-y-5 gap-x-[34px] 2xl:gap-x-[44px] grid-cols-[auto] sm:grid-cols-[auto_1fr]"
      data-fade-from="left"
      data-fade-offset="70"
    >
      <div>
        <ImageComponent
          src={icon}
          width={96}
          height={94}
          alt="feature icon"
          className="max-w-[76px] 2xl:max-w-[96px]"
        />
      </div>
      <div>
        <h3 className="text-[24px] leading-none">{title}</h3>
        <p className="mt-[16px]">{description}</p>
      </div>
    </div>
  );
};

export default AiFeatureCard;
