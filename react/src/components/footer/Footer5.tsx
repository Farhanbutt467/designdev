"use client";

import siteConfig from "@/config/siteConfig.json";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import FooterCta2 from "./FooterCta2";
import { SocialShare1 } from "../tools/Social";

type Props = {
  footerNav: {
    id: number;
    name: string;
    path: string;
  }[];
};

const Footer5 = ({ footerNav }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { footer_info, social } = siteConfig;

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <footer ref={containerRef}>
      <FooterCta2 />
      <div className="inner-container font-khand">
        <div className="flex font-semibold flex-wrap gap gap-y-[14px] gap-x-[60px] justify-between py-[28px] 2xl:py-[40px] flex-col md:flex-row items-center border-t border-border-2">
          <div>
            <p className="text-[18px] text-text xl:text-[20px] uppercase leading-none">
              {footer_info.copyright.label}{" "}
              <Link href={footer_info.copyright.link} target="_blank">
                {footer_info.copyright.company}
              </Link>
            </p>
          </div>
          <ul className="flex gap-[30px] xl:gap-[45px] text-[18px] 2xl:text-[20px] uppercase leading-none">
            {footerNav?.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-5 leading-none text-[14px] xl:text-[17px]">
            {social.map((item, i) => (
              <li key={`social_share-${i}`}>{SocialShare1(item)}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
