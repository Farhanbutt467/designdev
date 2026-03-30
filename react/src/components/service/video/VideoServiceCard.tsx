import VideoSectionTitle from "@/components/sectionTitle/VideoSectionTitle";
import { TServiceType } from "@/types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const VideoServiceCard = ({ data, slug }: TServiceType) => {
  const { id, title, description } = data;
  const formatSerialNo = (serial: number) =>
    serial < 10 ? `0${serial}` : serial;

  return (
    <Link href={`/service/video/${slug}`}>
      <div className="grid gap-y-5 gap-x-[50px] grid-cols-[auto] lg:grid-cols-[30px_auto] pt-6 pb-[31px] xl:pt-11 xl:pb-[61px] group">
        <span className="text-[22px] md:text-[30px] font-medium font-khand leading-none inline-block">
          {formatSerialNo(id)}
        </span>
        <div className="grid gap-y-[30px] gap-x-[50px] grid-cols-[auto] lg:grid-cols-[auto_auto]">
          <div className="content">
            <VideoSectionTitle title={title} />
            <p className="mt-[26px] max-w-[340px]">{description}</p>
          </div>
          <div>
            <span>
              <FaArrowRightLong className="h-[20px] w-[20px] -rotate-45 transition-all duration-300 group-hover:rotate-0 rtl:group-hover:-rotate-180 rtl:-rotate-[135deg]" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoServiceCard;
