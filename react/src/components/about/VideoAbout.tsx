"use client";

import { useState, useRef } from "react";
import { ActionBtnType } from "@/types";
import ImageComponent from "../tools/ImageComponent";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import VideoSectionTitle from "../sectionTitle/VideoSectionTitle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import VideoModal from "@/components/tools/VideoModal";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title_img: {
    light: string;
    dark: string;
  };
  title: string;
  description: string;
  shape: {
    light: string;
    dark: string;
  };
  action_btn: ActionBtnType;
  video_src: string;
};

const VideoAbout = ({
  title_img,
  title,
  description,
  shape,
  action_btn,
  video_src,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="section-spacing-top overflow-hidden">
          <div
            className="has_fade_anim flex justify-center"
            data-fade-from="bottom"
            data-fade-offset="50"
          >
            <ImageComponent
              src={title_img.light}
              darkSrc={title_img.dark}
              width={1144}
              height={430}
              alt="shape title"
            />
          </div>
          <div className="mt-[50px] md:mt-[70px] xl:mt-[100px] 2xl:mt-[130px] grid gap-y-10 gap-x-20 grid-cols-[auto] lg:grid-cols-[auto_460px] xl:grid-cols-[auto_600px] 2xl:grid-cols-[auto_660px]">
            <div>
              <div
                className="has_fade_anim relative inline-block "
                data-fade-from="top"
                data-ease="bounce"
              >
                <ImageComponent
                  src={shape.light}
                  darkSrc={shape.dark}
                  width={493}
                  height={611}
                  alt="shape"
                  className="max-w-full"
                />
                <Button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex gap-[10px] text-center rounded-full items-center justify-center absolute top-0 end-[11%] w-[37%] aspect-[100/100] h-auto bg-transparent !border-[0px]"
                >
                  <FaPlay className="text-white  !h-[20px] sm:!h-[25px] 2xl:!h-[30px] !w-auto" />
                </Button>
              </div>
            </div>
            <div>
              <VideoSectionTitle title={title} className="max-w-[512px]" />
              <div className="mt-[26px] lg:mt-[46px]">
                <p
                  className="has_fade_anim max-w-[470px] lg:ms-auto"
                  data-fade-from="left"
                >
                  {description}
                </p>
              </div>
              <div
                className="has_fade_anim mt-[33px] lg:mt-[53px] max-w-[470px] lg:ms-auto"
                data-fade-from="left"
              >
                <Link
                  href={action_btn.link}
                  className={cn(
                    buttonVariants({ variant: "Video" }),
                    "text-[16px]"
                  )}
                >
                  <span data-text={action_btn.label}>{action_btn.label}</span>
                  <FaPlay className="!h-[13px] !w-[13px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal link={video_src} isOpen={isOpen} close={closeDialog} />
    </section>
  );
};

export default VideoAbout;
