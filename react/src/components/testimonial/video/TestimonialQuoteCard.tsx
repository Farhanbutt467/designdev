import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  text: string;
};

const TestimonialQuoteCard = ({ text }: Props) => {
  return (
    <div className="text-center cursor-grab">
      <div>
        <div className="flex justify-center">
          <ImageComponent
            src="/assets/imgs/icon/quote-4.png"
            darkSrc="/assets/imgs/icon/quote-4-light.png"
            width={80}
            height={70}
            alt="icon"
            className="h-[35px] md:h-[50px] lg:h-[60px] xl:h-[70px] w-auto"
          />
        </div>
        <div className="mt-[34px] xl:mt-[54px]">
          <p className="text-[22px] md:text-[40px] xl:text-[50px] 2xl:text-[60px] font-semibold text-text uppercase font-khand leading-none">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialQuoteCard;
