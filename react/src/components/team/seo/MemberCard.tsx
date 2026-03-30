import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import ButtonSwap from "@/components/elements/button/ButtonSwap";
import { TTeamMemberType } from "@/types";

type Props = {
  profileData: TTeamMemberType;
};

const MemberCard = ({ profileData }: Props) => {
  const { avatar, name, post, social, social_link } = profileData.data;

  return (
    <>
      <div className=" rounded-[5px] overflow-hidden ">
        <Link href={`/team/${profileData.slug}`}>
          <Image
            src={avatar}
            alt="team image"
            width={425}
            height={520}
            className="transition-all w-full "
          />
        </Link>
      </div>
      <div className=" mt-[22px]">
        <div className="">
          <h3 className=" text-[22px] xl:text-2xl font-semibold font-spacegrotesk">
            <Link href={`/team/${profileData.slug}`}>{name}</Link>
          </h3>
          <p className=" mb-[23px] xl:mb-7 text-base leading-none mt-[10px]">
            {post}
          </p>
        </div>

        <ButtonSwap
          rootClassName="wc-btn-group-xs"
          arrowWidthHeight="h-[30px] w-[30px] border border-[#C3B4B4] dark:border-[#434343] rounded-full"
          bgColor="bg-background"
          textColor="text-text"
          buttonText={social}
          textClassName="px-[11px] text-[12px] border border-[#C3B4B4] dark:border-[#434343] rounded-full leading-5"
          arrowIcon={<FaLinkedinIn className="text-text text-xs" />}
          link={social_link}
        />
      </div>
    </>
  );
};

export default MemberCard;
