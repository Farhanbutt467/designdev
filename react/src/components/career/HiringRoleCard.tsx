import Image from "next/image";
import Link from "next/link";
type Props = {
  job: {
    title: string;
    vacancy: number;
  };
  serialNo: number;
  path: string;
};

const HiringRoleCard = ({ job, serialNo, path }: Props) => {
  const { title, vacancy } = job;
  const formattedNumber = (number: number) =>
    number < 10 ? `0${number}` : `${number}`;
  return (
    <div className="has_fade_anim">
      <Link href={`/career/${path}`}>
        <div className="grid gap-y-5 gap-x-10 border-b border-[#2C2C2C] items-center py-[25px] xl:py-[35px] grid-cols-[30px_1fr] sm:grid-cols-[30px_1fr_1fr] md:grid-cols-[30px_1fr_1fr_auto] xl:grid-cols-[60px_1fr_1fr_auto] group first:border-t">
          <span className="text-[18px] xl:text-[24px] text-text-fixed-3">
            {formattedNumber(serialNo)}
          </span>
          <h3 className="text-[24px] xl:text-[30px] 2xl:text-[36px] text-text-fixed-2">
            {title}
          </h3>
          <p className="text-[18px] xl:text-[24px] text-text-fixed-3 col-start-2 sm:col-start-3">
            ({formattedNumber(vacancy)} Open Roles)
          </p>
          <span className="opacity-40 transition-all duration-500 group-hover:opacity-100 hidden md:block">
            <Image
              src="/assets/imgs/icon/plus-2-light.png"
              alt="icon"
              width={25}
              height={25}
            />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default HiringRoleCard;
