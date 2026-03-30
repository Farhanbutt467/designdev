import { cn } from "@/lib/utils";
import { TTeamMemberType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  profileData: TTeamMemberType;
  className?: string;
};

const TeamProfileCard = ({ profileData, className }: Props) => {
  const { name, avatar, post } = profileData.data;
  return (
    <div>
      <Link href={`/team/${profileData.slug}`}>
        <div>
          <Image
            src={avatar}
            alt="profile_thumb"
            width={299}
            height={410}
            className="w-full max-w-full"
          />
        </div>
        <div className="mt-[27px] xl:mt-[37px]">
          <h3
            className={cn("text-[20px] leading-none xl:text-[24px]", className)}
          >
            {name}
          </h3>
          <p className="text-[16px] mt-[3px] xl:mt-[7px] font-medium">{post}</p>
        </div>
      </Link>
    </div>
  );
};

export default TeamProfileCard;
