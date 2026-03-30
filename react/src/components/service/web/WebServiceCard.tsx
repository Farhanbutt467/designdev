import { TServiceType } from "@/types";
import { convertWithBr } from "@/lib/helper/converter";
import ImageComponent from "@/components/tools/ImageComponent";
import Link from "next/link";

const WebServiceCard = ({ data, slug }: TServiceType) => {
  const { title, description, features, icon, id } = data;

  function formatSerialNumber(number: number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  return (
    <div className="has_fade_anim first:border-t">
      <Link href={`/service/web/${slug}`}>
        <div className="border-b border-border py-[24px] xl:py-[44px] grid gap-y-5 gap-x-[60px] grid-cols-[auto] sm:grid-cols-[100px,1fr,100px] xl:grid-cols-[160px,1fr,100px] ">
          <span className="text-[22px] xl:text-[30px] font-semibold font-teko">
            {formatSerialNumber(id)}.
          </span>
          <div className="grid gap-y-5 gap-x-[60px] grid-cols-[auto] lg:grid-cols-[210px,1fr] xl:grid-cols-[300px,1fr] 2xl:grid-cols-[360px,1fr]">
            <h3
              className="text-[26px] xl:text-[36px] leading-[.88] uppercase"
              dangerouslySetInnerHTML={convertWithBr(title)}
            />
            <div>
              <p className="max-w-[340px]">{description}</p>
              <div className="mt-[18px]">
                <ul>
                  {features.slice(0, 3).map((feature, i) => (
                    <li className="text-[18px] leading-[1.41]" key={i}>
                      + {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[88px] h-[115px] border border-border rounded-[44px] inline-flex justify-center items-center">
            <ImageComponent
              src={typeof icon === "object" ? icon?.light : icon}
              darkSrc={typeof icon === "object" ? icon?.dark : icon}
              width={45}
              height={45}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WebServiceCard;
