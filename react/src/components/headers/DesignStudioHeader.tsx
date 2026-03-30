"use client";

import Menu from "@/components/menu/Menu";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DesignStudioHeader = () => {
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
            className={cn(
              "wc-btn-underline text-[14px] font-medium tracking-normal pb-1 inline-flex gap-[10px]"
            )}
            href={"/contact"}
          >
            <span>Get Started</span>
            <FaArrowRightLong />
          </Link>
          <SideNavModal />
        </div>
      </div>
    </header>
  );
};

export default DesignStudioHeader;
