import ImageComponent from "@/components/tools/ImageComponent";
import { convertWithBrSpan } from "@/lib/helper/converter";

type Props = {
  icon: string;
  title: string;
  description: string;
};

const MarketingFeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div>
      <div>
        <ImageComponent width={60} height={60} src={icon} alt="icon" />
      </div>
      <div className="mt-[30px] md:mt-[44px]">
        <h2
          className="text-text-fixed text-[26px] leading-[1.1]"
          dangerouslySetInnerHTML={convertWithBrSpan(title)}
        />
        <p className="mt-[18px] 2xl:mt-[28px] text-text-fixed">{description}</p>
      </div>
    </div>
  );
};

export default MarketingFeatureCard;
