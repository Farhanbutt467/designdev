"use client";

import AiSectionTitle from "@/components/sectionTitle/AiSectionTitle";
import ImageComponent from "@/components/tools/ImageComponent";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa6";
import VideoModal from "@/components/tools/VideoModal";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  bg_image: string;
  video: string;
  title: string;
  info_list: string[];
};

const AiVideo = ({ bg_image, video, title, info_list }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null!);
  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <div className="container large" ref={containerRef}>
      <div className="relative z-[1] pt-[110px] xl:pt-[150px] 2xl:pt-[230px]">
        <div className="absolute top-0 start-0 w-full rounded-[20px] overflow-hidden z-[-1] h-[calc(100%-60px)] xl:h-[calc(100%-100px)] 2xl:h-[calc(100%-130px)]">
          <ImageComponent
            src={bg_image}
            width={1820}
            height={700}
            alt="image"
            className="w-full h-full object-cover max-w-full"
          />
        </div>
        <div className="inner-container">
          <div className="bg-background-5 ms-0 lg:ms-auto max-w-[500px] xl:max-w-[560px] 2xl:max-w-[580px] pt-[30px] pb-6 px-[30px] xl:pt-[50px] xl:pb-[44px] xl:px-[50px] 2xl:pt-[60px] 2xl:pb-[54px] 2xl:px-[60px] rounded-[20px] relative z-[1]">
            <div
              className="has_fade_anim"
              data-fade-from="top"
              data-fade-offset="100"
              data-ease="bounce"
            >
              <Button
                onClick={() => setIsOpen(!isOpen)}
                className="w-[60px] h-[60px] xl:w-[85px] xl:h-[85px] bg-theme text-text-fixed-2 rounded-full"
              >
                <FaPlay />
              </Button>
            </div>
            <div className="mt-10 xl:mt-[60px] 2xl:mt-[160px]">
              <div
                className="has_fade_anim"
                data-fade-from="bottom"
                data-fade-offset="70"
              >
                <AiSectionTitle title={title} />
              </div>
            </div>
            <ul className="has_fade_anim mt-[31px]" data-fade-from="bottom">
              {info_list.map((item, index) => (
                <li
                  key={`info_item-${index}`}
                  className="text-[20px] leading-[1.3] text-text-3"
                >
                  + {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <VideoModal link={video} isOpen={isOpen} close={closeDialog} />
    </div>
  );
};

export default AiVideo;
