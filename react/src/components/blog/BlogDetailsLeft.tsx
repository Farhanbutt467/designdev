"use client";

import { FaChartSimple } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  InstapaperShareButton,
} from "react-share";
import { useEffect, useState } from "react";

type Props = {
  views: string;
  shares: string;
  title: string;
  description: string;
};

const BlogDetailsLeft = ({ views, shares, title, description }: Props) => {
  const [mainUrl, setMainUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      setMainUrl(url);
    }
  }, []);

  return (
    <div>
      <ul className="border-b lg:border-b-0 inline-flex flex-row max-w-full gap-5 lg:flex lg:flex-col lg:max-w-20 lg:border-e">
        <li className="flex flex-col text-center items-center justify-center leading-[1.1] relative mb-[10px] border-e lg:border-0 pe-5 lg:pe-0 lg:mb-[30px]">
          <div className="hidden lg:block absolute bottom-[-25px] w-20 h-[1px] bg-border"></div>
          <FaChartSimple className="mb-[3px]" />
          <span className="font-normal text-[12px] leading-[1.5]">
            {views}
            <br className="hidden lg:block" /> Views
          </span>
        </li>
        <li className="flex flex-col items-center leading-[1.1] relative">
          <FaShareNodes className="mb-[3px]" />
          <span className="text-center font-normal text-[12px] leading-[1.5]">
            {shares}
            <br className="hidden lg:inline-block" /> Shares
          </span>
        </li>

        <li className="flex flex-col items-center leading-[1.1] relative">
          <FacebookShareButton url={mainUrl} hashtag={"#blog..."}>
            <FaFacebookF />
          </FacebookShareButton>
        </li>
        <li className="flex flex-col items-center leading-[1.1] relative">
          <TwitterShareButton
            url={mainUrl}
            title={title}
            hashtags={["#blog..."]}
          >
            <FaTwitter />
          </TwitterShareButton>
        </li>
        <li className="flex flex-col items-center leading-[1.1] relative">
          <InstapaperShareButton
            url={mainUrl}
            title={title}
            description={description}
          >
            <FaInstagram />
          </InstapaperShareButton>
        </li>
        <li className="flex flex-col items-center leading-[1.1] relative">
          <LinkedinShareButton url={mainUrl} title={title}>
            <FaLinkedin />
          </LinkedinShareButton>
        </li>
      </ul>
    </div>
  );
};

export default BlogDetailsLeft;
