import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

type NavigationProps = {
  handlePrevious: () => void;
  handleNext: () => void;
};

const TestimonialSliderNav = ({
  handlePrevious,
  handleNext,
}: NavigationProps) => {
  return (
    <div className="slider_nav flex rtl:flex-row-reverse gap-[10px] static md:absolute bottom-10 lg:bottom-[60px] start-[86px] xl:start-[106px] 2xl:start-[170px]">
      <div
        onClick={handlePrevious}
        className="testimonial_button_prev text-text-3 cursor-pointer w-[60px] h-[60px] border rounded-[50%] flex justify-center items-center transition-all duration-500 hover:border-transparent hover:text-text-2 hover:bg-background-2"
      >
        <FaArrowLeft />
      </div>
      <div
        onClick={handleNext}
        className="testimonial_button_next text-text-3 cursor-pointer w-[60px] h-[60px] border rounded-[50%] flex justify-center items-center transition-all duration-500 hover:border-transparent hover:text-text-2 hover:bg-background-2"
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

export default TestimonialSliderNav;
