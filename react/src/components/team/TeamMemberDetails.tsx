"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBr } from "@/lib/helper/converter";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";
import ImageComponent from "../tools/ImageComponent";
import Link from "next/link";
import { SocialShare1 } from "../tools/Social";

type Props = {
  name: string;
  post: string;
  image: string;
  description: string;
  portfolios?: {
    title: string;
    link: string;
  }[];
  socials?: {
    name: string;
    link: string;
  }[];
};

const TeamMemberDetails = ({
  name,
  post,
  image,
  description,
  portfolios,
  socials,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="container2" ref={containerRef}>
      <div className="pt-[127px] xl:pt-[147px] 2xl:pt-[217px] section-spacing-bottom">
        <div className="grid gap-x-[60px] gap-y-10 lg:grid-cols-[500px,1fr] xl:grid-cols-[auto_1fr]">
          <div
            className="has_fade_anim inline-block relative sm:pt-[60px] sm:ps-[130px] md:ps-[150px] z-10 max-w-[605px]"
            data-fade-from="left"
          >
            <div className="hidden start-0 sm:block absolute top-0 w-[62%] -z-[1]">
              <ImageComponent
                className="h-full w-full"
                src="/assets/imgs/shape/img-s-86.png"
                darkSrc="/assets/imgs/shape/img-s-86-dark.png"
                width={377}
                height={755}
                alt="light shape"
              />
            </div>
            <Image src={image} width={456} height={695} alt="thumb-img" />
          </div>
          <div className="md:pt-[60px]">
            <div>
              <div>
                <h1 className="has_fade_anim name text-[36px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] leading-[1.08]">
                  {name.split(" ").map((word, index) => (
                    <span key={`team-name-word-${index}`}>
                      {word}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="mt-[26px]">
                <span className="has_fade_anim text-[24px] inline-block text-text-3">
                  {post}
                </span>
              </div>
              <div className="has_fade_anim mt-[36px] mb-2 text-text-3">
                <p dangerouslySetInnerHTML={convertWithBr(description)} />
              </div>
              <div className="mt-10 has_fade_anim">
                <span className="text-[18px] mb-[22px] inline-block">
                  Portfolio :
                </span>
                <div className="flex gap-[10px]">
                  {portfolios?.map((item, index) => (
                    <Link
                      key={`team-profile-${index}`}
                      href={item.link}
                      target="_blank"
                      className="text-[14px] py-[7px] px-[14px] border rounded-[30px] inline-block text-text-3 hover:text-inherit"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-[40px] has_fade_anim">
                <span className="text-[18px] mb-[22px] inline-block">
                  Follow :
                </span>
                <div>
                  <ul className="flex gap-5">
                    {socials?.map((social, index) => (
                      <React.Fragment key={`team-social-${index}`}>
                        {SocialShare1(social)}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetails;
