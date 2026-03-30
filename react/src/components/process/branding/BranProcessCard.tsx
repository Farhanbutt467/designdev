import ImageComponent from "@/components/tools/ImageComponent";

type ProcessProps = {
  serial_no: number;
  icon: {
    light: string;
    dark: string;
  };
  title: string;
};

const formatSerialNo = (serial: number) =>
  serial < 10 ? `0${serial}` : serial;

const BranProcessCard = ({ serial_no, icon, title }: ProcessProps) => {
  return (
    <div className="border-l border-[#B7C5C1] dark:border-[#404040]">
      <span className=" text-[16px] text-[#7D8683] dark:text-text-fixed-3 inline-block ml-[30px]">{`Step - ${formatSerialNo(
        serial_no
      )}`}</span>
      <div className="h-[90px] w-[90px] rounded-full bg-background-2 flex justify-center items-center mx-auto transform translate-y-1/2 outline outline-[15px] outline-[#D8E9E4] dark:outline-[#252525] mt-[44px] xl:mt-[144px] 2xl:mt-[244px]">
        <ImageComponent
          src={icon.light}
          darkSrc={icon.dark}
          width={40}
          height={38}
          alt="icon"
        />
      </div>
      <div>
        <h3 className="title text-[20px] xl:text-[24px] leading-[1.33] pt-[75px] px-[30px] pb-[61px] border border-[#B7C5C1] dark:border-[#404040] rounded-full text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default BranProcessCard;
