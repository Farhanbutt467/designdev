import { useState } from "react";
import VideoModal from "@/components/tools/VideoModal";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

type Props = {
  video: string;
  author: {
    name: string;
    designation: string;
  };
};

const DesignTestimonialCard = ({ video, author }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse items-start md:items-end">
        <div className="md:ps-10 2xl:ps-[90px]">
          <div className="relative w-full md:w-[330px] xl:w-[420px] aspect-[100/154] overflow-hidden">
            <video muted loop className="w-full h-full object-cover">
              <source src={video} type="video/mp4" />
            </video>
            <div className="pos-center btn-move">
              <Button
                className="btn-item bg-transparent h-[100px] w-[100px] rounded-full lg:h-[160px] lg:w-[160px] text-white inline-flex items-center justify-center border-[1.5px] text-[14px] border-current"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FaPlay />
              </Button>
            </div>
          </div>
        </div>
        <div className="pb-[67px] xl:pb-[227px] pt-[36px] w-full">
          <h3 className="text-[24px] mb-[5px] text-white">{author.name}</h3>
          <p className="text-[14px] leading-[1.42] text-text-fixed-3 relative z-[1]">
            {author.designation}
          </p>
        </div>
      </div>
      <VideoModal link={video} isOpen={isOpen} close={closeDialog} />
    </div>
  );
};

export default DesignTestimonialCard;
