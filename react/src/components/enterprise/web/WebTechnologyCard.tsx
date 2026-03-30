import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  title: string;
  icon: {
    light: string;
    dark: string;
  };
};

const WebTechnologyCard = ({ title, icon }: Props) => {
  return (
    <div
      className="expertise-box has_fade_anim w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px] border border-border rounded-full flex justify-center items-center flex-col first:ms-0 md:ms-[-100px]"
      data-fade-from="right"
    >
      <div className="icon ">
        <ImageComponent
          src={icon.light}
          darkSrc={icon.dark}
          width={100}
          height={100}
          alt="technology-icon"
          className="max-h-[50px] lg:max-h-[70px] xl:max-h-[100px] w-auto"
        />
      </div>
      <p className="name text-[20px] lg:text-[24px] xl:text-[32px] leading-none mt-[17px] xl:mt-[32px]">
        {title}
      </p>
    </div>
  );
};

export default WebTechnologyCard;
