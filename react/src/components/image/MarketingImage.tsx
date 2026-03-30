"use client";

import { FaPlay } from "react-icons/fa6";
import { Button } from "../ui/button";
import ImageComponent from "../tools/ImageComponent";
import VideoModal from "../tools/VideoModal";
import { useState } from "react";

type Props = {
  image: string;
  video: string;
};

const MarketingImage = ({ image, video }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative after:content-[''] after:absolute after:w-full after:h-[calc(100%-70px)] after:md:h-[calc(100%-120px)] after:2xl:h-[calc(100%-200px)]  after:top-[70px] after:md:top-[120px] after:2xl:top-[200px] after:start-0 after:bg-theme after:z-[-1]">
      <div className="inner-container">
        <div>
          <div
            className="relative"
            style={{
              marginInlineEnd:
                "calc(((100vw + 24px) - var(--container-max-widths)) / -2)",
            }}
          >
            <div className="absolute top-0 start-0">
              <Button
                onClick={() => setIsOpen(!isOpen)}
                className="w-[70px] h-[70px] text-[14px] md:w-[120px] md:h-[120px] md:text-[20px] 2xl:w-[200px] 2xl:h-[200px] 2xl:text-[30px] bg-background-2 text-text-2 flex justify-center items-center"
              >
                <FaPlay className="md:!h-5 md:!w-5 2xl:!h-[30px] 2xl:!w-[30px]" />
              </Button>
            </div>
            <div>
              <ImageComponent
                src={image}
                width={1605}
                height={800}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <VideoModal link={video} isOpen={isOpen} close={closeDialog} />
    </div>
  );
};

export default MarketingImage;
