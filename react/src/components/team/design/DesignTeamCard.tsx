import ImageComponent from "@/components/tools/ImageComponent";
import { TTeamMemberType } from "@/types";
import Link from "next/link";

const DesignTeamCard = ({ data, slug }: TTeamMemberType) => {
  const { name, post, avatar } = data;
  return (
    <div
      className="has_fade_anim text-center"
      data-fade-from="bottom"
      data-delay="0.15"
    >
      <Link href={`/team/${slug}`}>
        <div className="rounded-full overflow-hidden">
          <ImageComponent
            src={avatar}
            height={210}
            width={210}
            alt="team avatar"
          />
        </div>
        <div className="mt-[23px]">
          <h3 className="text-[20px] leading-[1.1]">{name}</h3>
          <p className="text-[14px] mt-[8px] leading-none">{post}</p>
        </div>
      </Link>
    </div>
  );
};

export default DesignTeamCard;
