import ImageComponent from "../tools/ImageComponent";

type Props = {
  quote: string;
  icon: string;
  author: string;
  designation: string;
  avatar: string;
};

const AboutBoldTestimonialCard = ({
  quote,
  icon,
  author,
  designation,
  avatar,
}: Props) => {
  return (
    <div className="text-center">
      <div>
        <div className="flex justify-center items-center">
          <ImageComponent src={icon} width={40} height={27} alt="icon" />
        </div>
        <div className="mt-[29px]">
          <p className="text-[18px] md:text-[22px] xl:text-[24px] 2xl:text-[30px] font-light leading-[1.38] text-text">
            {quote}
          </p>
        </div>
        <div className="mt-10 xl:mt-[50px] 2xl:mt-[90px] flex gap-[10px] items-center justify-center text-start">
          <div className="rounded-full overflow-hidden">
            <ImageComponent src={avatar} width={50} height={50} alt="avatar" />
          </div>
          <div>
            <h2 className="text-[20px] 2xl:text-[24px] leading-none uppercase">
              {author}
            </h2>
            <p className="text-[16px] font-medium leading-none uppercase mt-[7px] font-teko">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBoldTestimonialCard;
