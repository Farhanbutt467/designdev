import ImageComponent from "../tools/ImageComponent";

type Props = {
  testimonial: {
    quote: string;
    author: string;
    designation: string;
  };
  icons: {
    dark: string;
    light: string;
  };
};

const AboutTestimonialCard = ({ testimonial, icons }: Props) => {
  const { quote, author, designation } = testimonial;

  return (
    <div className="text-center">
      <div className="content">
        <div className="flex justify-center">
          <ImageComponent
            src={icons.dark}
            darkSrc={icons.light}
            alt="icon"
            width={65}
            height={47}
            className="h-[37px] xl:h-[47px] w-auto"
          />
        </div>
        <div className="mt-[33px] xl:mt-[53px]">
          <p className="text-[20px] lg:text-[26px] xl:text-[30px] text-text font-light">
            {quote}
          </p>
        </div>
        <div className="mt-[34px] xl:mt-11">
          <div>
            <span className="text-[18px] inline-block">
              {`${author},`}&nbsp;
            </span>
            <span className="text-[18px] inline-block text-text-3">
              {" "}
              {designation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonialCard;
