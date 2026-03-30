import Image from "next/image";
import TeamStatCard from "@/components/team/TeamStatCard";

type Props = {
  thumb1: string;
  thumb2: string;
  thumb3: string;
  client_count: number;
  client_title: string;
  funding_count: number;
  funding_title: string;
  bg_1: string;
  bg_2: string;
};

const TeamCounterArea = ({
  thumb1,
  thumb2,
  thumb3,
  client_count,
  client_title,
  funding_count,
  funding_title,
  bg_1,
  bg_2,
}: Props) => {
  return (
    <div className="counter_area">
      <div className="counter_area_inner grid gap-[10px] xl:grid-cols-[1fr_670px] 2xl:grid-cols-[1fr_870px]">
        <div className="thumb">
          <Image
            src={thumb1}
            alt="thumb_1"
            width={1040}
            height={870}
            className="h-full w-full max-w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="counter_wrapper_box">
          <div className="counter_wrapper grid gap-[10px] sm:grid-cols-[1fr_1fr]">
            <div className="thumb overflow-hidden">
              <Image
                data-speed="0.9"
                src={thumb2}
                alt="thumb_2"
                width={430}
                height={430}
                className="w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <TeamStatCard
              data={{
                title: client_title,
                count: client_count,
                bg_image: bg_1,
              }}
            />
            <TeamStatCard
              data={{
                title: funding_title,
                count: funding_count,
                bg_image: bg_2,
                suffix: "M",
              }}
              className="bg-[#121212] text-text-fixed-2"
              textColor="text-text-fixed-2"
            />
            <div className="thumb">
              <Image
                src={thumb3}
                alt="thumb_3"
                width={430}
                height={430}
                className="w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCounterArea;
