import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  name: string;
  post: string;
  avatar: string;
};

const VideoTestimonialAvatarCard = ({ name, avatar, post }: Props) => {
  return (
    <div className="flex items-center gap-[10px] pb-[15px] md:pb-[30px] justify-center sm:justify-start">
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
        <ImageComponent
          width={50}
          height={50}
          src={avatar}
          alt="author avatar"
        />
      </div>
      <div>
        <h3 className="text-[20px] font-semibold leading-none cursor-default">
          {name}
        </h3>
        <span className="text-[16px] font-medium font-khand uppercase leading-none inline-block mt-[5px] text-text-3 cursor-default">
          {post}
        </span>
      </div>
    </div>
  );
};

export default VideoTestimonialAvatarCard;
