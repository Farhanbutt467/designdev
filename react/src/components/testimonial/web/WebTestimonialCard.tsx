import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  icon: string;
  rating: string;
  star_icon: string;
  text: string;
  author: {
    name: string;
    designation: string;
    avatar: string;
  };
};

const WebTestimonialCard = ({
  icon,
  rating,
  star_icon,
  text,
  author,
}: Props) => {
  return (
    <div className="w-[290px] sm:w-[340px] cursor-grab">
      <div className="px-[30px] pt-[45px] pb-[40px] bg-[#f9f9f9] ">
        <span className="text-[36px] leading-[.88] font-teko font-semibold text-text-fixed inline-flex items-center gap-[2px]">
          {rating}
          <ImageComponent
            src={star_icon}
            width={17}
            height={16}
            alt="star-icon"
          />
        </span>
        <p className="text-[16px] text-text-fixed-3">(out of 5 stars)</p>
        <p className="text-[21px] leading-[1.23] font-medium text-text-fixed-4 mt-[49px]">
          {text}
        </p>
        <div className="flex justify-end mt-[74px]">
          <ImageComponent src={icon} width={40} height={30} alt="icon" />
        </div>
      </div>
      <div className="flex gap-[15px] items-center py-[25px] px-[30px] bg-background-3">
        <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden">
          <ImageComponent src={author.avatar} width={50} height={50} />
        </div>
        <div className="">
          <h2 className="text-[21px] leading-[24px] !font-medium text-text-fixed-2">
            {author.name}
          </h2>
          <span className="text-[16px] text-text-fixed-3">
            {author.designation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WebTestimonialCard;
