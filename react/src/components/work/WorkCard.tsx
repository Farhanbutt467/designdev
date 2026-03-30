import { TWorkType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: TWorkType;
};

const WorkCard = ({ project }: Props) => {
  const { title, image, tags } = project.data;

  return (
    <div className="has_fade_anim">
      <Link href={`/work/${project?.slug}`}>
        <div className="group">
          <div className="thumb overflow-hidden">
            <Image
              src={image}
              alt="project_thumb"
              width={880}
              height={560}
              className="group-hover:scale-[1.1] transition-all duration-500"
            />
          </div>
          <div className="mt-[29px]">
            <h3 className="text-[20px]">{title}</h3>
            <div className="mt-1">
              <span className=" text-[14px] inline-block text-text-3">
                {tags[0]}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkCard;
