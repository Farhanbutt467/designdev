import ImageComponent from "@/components/tools/ImageComponent";
import { cn } from "@/lib/utils";

type Props = {
  testimonial: {
    icon: {
      light: string;
      dark: string;
    };
    content: string;
    author: {
      name: string;
      position: string;
    };
  };
  iconClassName?: string;
};

const SeoTestimonialCard = ({ testimonial, iconClassName }: Props) => {
  const { icon, content, author } = testimonial;

  return (
    <div className="testimonial_item text-center ">
      <div className="content">
        <div className="icon flex justify-center items-center">
          <ImageComponent
            className={cn(
              "quote-icon show-light h-[37px] xl:h-[47px] w-auto",
              iconClassName
            )}
            src={icon?.light}
            darkSrc={icon?.dark}
            width={34}
            height={28}
            alt="Quote Icon"
          />
        </div>
        <div className="text_wrapper mt-7 md:mt-[38px]">
          <p className="text text-[20px] xl:text-[24px] leading-[1.33] font-medium font-spacegrotesk text-text">
            {content}
          </p>
        </div>
        <div className="author mt-[35px] md:mt-[45px] xl:mt-[55px]">
          <div className="meta">
            <span className="name text-[24px] leading-none block text-text">
              {author.name}
            </span>
            <span className="post text-base block mt-2 leading-none text-text-3">
              {author.position}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoTestimonialCard;
