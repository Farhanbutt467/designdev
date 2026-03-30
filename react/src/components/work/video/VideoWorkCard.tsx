import ImageComponent from "@/components/tools/ImageComponent";
import VideoModal from "@/components/tools/VideoModal";
import { Button } from "@/components/ui/button";
import { convertWithBr } from "@/lib/helper/converter";
import { FaPlay } from "react-icons/fa6";
import { useState } from "react";

type Props = {
  id: number;
  title: string;
  date: string;
  thumb: string;
  video_src: string;
};

const VideoWorkCard = ({ id, title, date, thumb, video_src }: Props) => {
  const formatSerial = (serial: number) =>
    serial < 10 ? `0${serial}` : serial;

  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="has_fade_anim grid gap-y-5 gap-x-[30px] grid-cols-[auto] md:grid-cols-[auto_55%] group">
      <div className="border-t grid gap-y-4 gap-x-[50px] grid-cols-[auto] md:grid-cols-[50px_auto] xl:grid-cols-[100px_auto] pt-[27px]">
        <span className="text-[18px] font-khand font-semibold">
          {formatSerial(id)}
        </span>
        <div>
          <h2
            className="text-[22px] sm:text-[30px] xl:text-[36px] leading-none uppercase !font-bold"
            dangerouslySetInnerHTML={convertWithBr(title)}
          />
          <span className="text-[16px] uppercase font-semibold font-khand inline-block mt-[11px] text-text-3">
            Date: {date}
          </span>
        </div>
      </div>
      <div className="relative">
        <ImageComponent src={thumb} width={957} height={610} alt="thumb" />
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="wc-btn-circle !w-20 !h-20 xl:!w-[100px] xl:!h-[100px] 2xl:!h-[130px] 2xl:!w-[130px] group/button opacity-0 invisible group-hover:visible group-hover:opacity-100 !bg-text-fixed-2 hover:!bg-background-fixed pos-center transition-all duration-300 mt-[30px] group-hover:mt-0"
        >
          <FaPlay className="text-text-fixed group-hover/button:text-text-fixed-2 transition-all duration-300" />
        </Button>
      </div>
      <VideoModal link={video_src} isOpen={isOpen} close={closeDialog} />
    </div>
  );
};

export default VideoWorkCard;
