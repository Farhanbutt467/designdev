"use client";

import siteConfig from "@/config/siteConfig.json";
import FooterCta from "@/components/footer/FooterCta";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { SocialShare1 } from "../tools/Social";

type Props = {
  footerNav: {
    id: number;
    name: string;
    path: string;
  }[];
};

const Footer4 = ({ footerNav }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { footer_info, social } = siteConfig;

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <footer className="footer-area bg-background-3" ref={containerRef}>
      <FooterCta ctaText={footer_info.ctaText} ctaMail={footer_info.email} />
      <div className="inner-container large text-text-fixed-2 font-teko">
        <div className="flex flex-wrap gap gap-y-[10px] gap-x-[60px] justify-between pb-[28px] 2xl:pb-[38px] flex-col md:flex-row items-center">
          <div>
            <p className="text-text-fixed-2 text-[18px] xl:text-[22px] uppercase leading-none">
              {footer_info.copyright.label}{" "}
              <Link href={footer_info.copyright.link} target="_blank">
                {footer_info.copyright.company}
              </Link>
            </p>
          </div>
          <ul className="flex gap-[30px] xl:gap-[45px] text-[18px] 2xl:text-[22px] uppercase leading-none">
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

export default Footer4;
