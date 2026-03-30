import ImageComponent from "@/components/tools/ImageComponent";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  pricing: {
    tag: string;
    price: string;
    feature_list: {
      text: string;
    }[];
    action_btn: {
      label: string;
      link: string;
    };
  };
};

const SeoPricingCard = ({ pricing }: Props) => {
  const { tag, price, feature_list, action_btn } = pricing;
  return (
    <div className="pricing-box pt-[27px] pb-[30px] px-[30px] xl:pt-[47px] xl:pb-[50px] xl:px-[50px] bg-background dark:bg-background-3 shadow-[0px_30px_200px_#10193814]">
      <span className="tag text-[18px] text-text inline-block leading-none">
        {tag}
      </span>
      <h3 className="price text-[40px] lg:text-[50px] xl:text-[60px] mt-[17px] leading-none">
        {price}
      </h3>
      <div className="feature-list mt-[39px] md:min-h-[171px] ">
        <ul>
          {feature_list.map((item, index) => (
            <li key={index} className="flex items-center mt-[15px] first:mt-0">
              <ImageComponent
                className="me-[10px]"
                src="/assets/imgs/icon/check-2.png"
                darkSrc="/assets/imgs/icon/check-2-light.png"
                width={15}
                height={16}
                alt="icon image"
              />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={action_btn.link}
        className={cn(buttonVariants({ variant: "Seo" }), "mt-10 xl:mt-[50px]")}
      >
        <span data-text="Choose plan">Choose plan</span>
      </Link>
    </div>
  );
};

export default SeoPricingCard;
