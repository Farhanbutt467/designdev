import ImageComponent from "@/components/tools/ImageComponent";
import StarRatingG from "@/components/tools/StarRatingG";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { TSeoClientsFeedback } from "@/types";
import { useGSAP } from "@gsap/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  clientsFeedback: TSeoClientsFeedback;
};

const SeoClientsFeedback = ({ clientsFeedback }: Props) => {
  const {
    title,
    subtitle,
    clients_avatar,
    review_title,
    rating,
    description,
    clients,
  } = clientsFeedback;

  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div>
        <div
          className="has_fade_anim flex gap-[15px] items-center"
          data-fade-from="left"
        >
          <ImageComponent
            src={clients_avatar?.light}
            darkSrc={clients_avatar?.dark}
            width={81}
            height={36}
            className="inline-block"
            alt="clients avatar"
          />

          <span className="text-[18px] font-medium text-text font-spacegrotesk">
            {subtitle}
          </span>
        </div>
        <div className="mt-[15px] md:mt-[30px]">
          <h2
            className="seo-section-title has_fade_anim max-w-[390px]"
            data-fade-from="left"
            dangerouslySetInnerHTML={convertWithBrSpan(title)}
          />
        </div>
      </div>
      <div className="mt-[22px] xl:mt-[32px]">
        <p className="has_fade_anim max-w-[357px]" data-fade-from="left">
          {description}
        </p>
      </div>
      <div className="mt-[43px] xl:mt-[63px]">
        <div
          className="has_fade_anim bg-[#E7F5EB] dark:bg-[#252525] rounded-[5px] py-[15px] px-5 inline-flex items-center"
          data-fade-from="left"
        >
          <div className="flex gap-[10px] items-center">
            <Image
              src={"/assets/imgs/icon/star-3.png"}
              alt="icon"
              width={34}
              height={33}
            />
            <h3
              className="text-[16px] font-semibold"
              dangerouslySetInnerHTML={convertWithBrSpan(review_title)}
            />
          </div>
          <div className="ps-5 border-[#CDDBD9] dark:border-[#3B3B3B] border-s ms-5">
            <div className="flex items-center">
              <h3 className="text-[22px] inline-block">{rating}</h3>
              <StarRatingG
                value={4.9}
                count={5}
                size={30}
                fullIcon={
                  isLight
                    ? "/assets/imgs/icon/star-4-light.png"
                    : "/assets/imgs/icon/star-4.png"
                }
                halfIcon={
                  isLight
                    ? "/assets/imgs/icon/star-4-half-light.png"
                    : "/assets/imgs/icon/star-4-half.png"
                }
                className="gap-[2px] ms-2 text-[14px]"
              />
            </div>
            <h3 className="text-[14px] mt-1 text-text">
              {clients}+ client reviews
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoClientsFeedback;
