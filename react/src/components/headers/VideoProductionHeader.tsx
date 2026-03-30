"use client";

import Menu from "@/components/menu/Menu";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";

const VideoProductionHeader = () => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  return (
    <header className="inner-container large2">
      <div
        className={
          "flex h-[100px] items-center gap-[20px] relative justify-between"
        }
      >
        <Logo light={isLight} />
        <div className="pos-center hidden xl:block">
          <Menu />
        </div>
        <div className="flex gap-5">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "Video" }),
              "hidden md:inline-flex font-medium py-[11px] px-[22px] text-[16px]"
            )}
          >
            <span data-text="Get Started">Get Started</span>
            <FaPlay className="!h-[13px] !w-[13px]" />
          </Link>
          <SideNavModal />
        </div>
      </div>
    </header>
  );
};

export default VideoProductionHeader;
