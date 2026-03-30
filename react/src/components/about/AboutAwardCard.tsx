import hasCountAnim from "@/lib/animation/hasCountAnim";
import { useGSAP } from "@gsap/react";
import ImageComponent from "../tools/ImageComponent";
import { useRef } from "react";

type Props = {
  cardData: {
    icon: {
      dark: string;
      light: string;
    };
    count: number;
    description: string;
  };
};

const AboutAwardCard = ({ cardData }: Props) => {
  const { icon, count, description } = cardData;
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasCountAnim();
    },
    { scope: containerRef }
  );

  return (
    <div
      className="ps-10 border-s first:ps-0 first:border-0"
      ref={containerRef}
    >
      <div className="meta grid gap-[18px] grid-cols-[30px_auto]">
        <div className="icon">
          <ImageComponent
            src={icon.dark}
            darkSrc={icon.light}
            width={32}
            height={28}
            className="inline-block h-auto w-auto"
            alt="icon_1"
          />
        </div>
        <div className="content">
          <h3 className="number text-[36px] leading-[.85]">
            <span data-count={count} className="has_count_anim">
              {count}
            </span>
            +
          </h3>
          <p className="text mt-[11px] max-w-[630px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutAwardCard;
