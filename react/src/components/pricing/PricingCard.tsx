import ButtonFlip from "@/components/elements/button/ButtonFlip";
import ImageComponent from "../tools/ImageComponent";

type cardProps = {
  card: {
    tag: string;
    price: string;
    feature_list: {
      text: string;
    }[];
    btn_title: string;
  };
};

const PricingCard = ({ card }: cardProps) => {
  return (
    <div className="pricing_box bg-[#FBF9F9] dark:bg-[#171717] pt-[27px] px-[30px] pb-[30px] xl:pt-[47px] xl:px-[50px] xl:pb-[50px] ">
      <span className="tag text-[18px] inline-block leading-none">
        {card.tag}
      </span>
      <h3 className="price mt-[17px] leading-none text-[40px] lg:text-[50px] xl:text-[60px]">
        {card.price}
      </h3>
      <div className="feature_list mt-[39px]">
        <ul>
          {card.feature_list.map((item, index) => (
            <li
              className="flex items-center mt-[15px] first:mt-0 text-text-3"
              key={index}
            >
              <ImageComponent
                src="/assets/imgs/icon/check-2.png"
                darkSrc="/assets/imgs/icon/check-2-light.png"
                width={15}
                height={16}
                className="me-[10px]"
                alt="check-2"
              />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <ButtonFlip
        btnText={card.btn_title}
        className="mt-10 xl:mt-[50px] dark:hover:bg-background-fixed-2 dark:hover:text-text-fixed dark:border-[#555555]"
        link="/contact"
      />
    </div>
  );
};

export default PricingCard;
