"use client";
import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/config/siteConfig.json";
import { cn } from "@/lib/utils";

type SiteInfo = {
  logo: string;
  logo_light?: string;
  logo_width: number;
  logo_height: number;
  logo_text?: string;
  title?: string;
};

type Props = {
  url?: string;
  light?: true | false;
  customWidth?: number;
  customHeight?: number;
  className?: string;
};

const Logo = ({
  url,
  light = false,
  customWidth,
  customHeight,
  className,
}: Props) => {
  const {
    logo,
    logo_light,
    logo_width,
    logo_height,
    logo_text = "Logo",
    title = "Logo",
  } = siteConfig.site_info as SiteInfo;

  const path = url ? url : light ? logo_light || logo : logo;

  return (
    <>
      <Link href={"/"}>
        {path ? (
          <Image
            width={customWidth || logo_width}
            height={customHeight || logo_height}
            src={path}
            alt={title}
            priority
            style={{
              height: customHeight || logo_height + "px",
              width: customWidth || logo_width + "px",
            }}
            className={cn("", className)}
          />
        ) : logo_text ? (
          logo_text
        ) : (
          title
        )}
      </Link>
    </>
  );
};

export default Logo;
