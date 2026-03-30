import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { TTeamMemberType } from "@/types";
import ButtonSwap from "@/components/elements/button/ButtonSwap";
import Link from "next/link";

const BranProfileCard = ({ data, slug }: TTeamMemberType) => {
  const { name, post, avatar, social, social_link } = data;
  return (
    <div className="team_box grid gap-x-[25px] gap-y-5 xl:gap-x-[35px] grid-cols-[40%,1fr] xl:grid-cols-[36%,1fr] py-[35px] border-b border-[#1C1C1C] dark:border-[#FFFFFF]">
      <div>
        <Link href={`/team/${slug}`}>
          <div className="overflow-hidden">
            <Image
              src={avatar}
              width={190}
              height={230}
              alt={`${name}-id`}
              className="hover:transform hover:scale-[1.1] aspect-[190/230] transition-all duration-300 object-cover"
            />
          </div>
        </Link>
      </div>
      <div className="content flex gap-[30px] flex-col justify-between">
        <div className="top">
          <h3 className="name text-[22px] xl:text-[24px]">
            <Link href={`/team/${slug}`}>{name}</Link>
          </h3>
          <p className="post text-[16px] mt-3 text-[#121212] dark:text-text-fixed-3">
            {post}
          </p>
        </div>
        <div>
          <ButtonSwap
            rootClassName="wc-btn-group-xs"
            arrowWidthHeight="h-[30px] w-[30px] border border-[#C3B4B4] dark:border-[#434343] rounded-full"
            bgColor="bg-[#F4E0E0] dark:bg-[#252525]"
            textColor="text-text"
            buttonText={social}
            link={social_link}
            textClassName="px-[11px] text-[12px] border border-[#C3B4B4] dark:border-[#434343] rounded-full leading-5"
            arrowIcon={<FaLinkedinIn className="text-text text-xs" />}
          />
        </div>
      </div>
    </div>
  );
};

export default BranProfileCard;
