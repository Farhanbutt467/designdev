"use client";

import Menu from "@/components/menu/Menu";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ButtonSwap from "../elements/button/ButtonSwap";

const MarketingHeader = () => {
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
    <header className="container large">
      <div
        className={
          "flex h-[80px] 2xl:h-[100px] border-b items-center gap-5 relative justify-between"
        }
      >
        <Logo light={isLight} />
        <div className="pos-center hidden xl:block">
          <Menu />
        </div>
        <div className="flex gap-[20px] ">
          <div className="hidden md:block">
            <ButtonSwap
              link="/contact"
              bgColor={"bg-theme"} textColor={"text-text-fixed-2 text-sm"}
              arrowWidthHeight="w-[40px] h-[40px]"
              textClassName="px-[22px] font-normal"
              rootClassName="wc-swap-btn-sm"
            />
          </div>
          <SideNavModal />
        </div>
      </div>
    </header>
  );
};

export default MarketingHeader;
