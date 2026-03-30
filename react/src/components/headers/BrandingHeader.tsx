"use client";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import ButtonSwap from "../elements/button/ButtonSwap";
import Menu from "../menu/Menu";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  maxWidth?: string;
  onlyDark?: boolean;
};

const BrandingHeader = ({ maxWidth, onlyDark = false }: Props) => {
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
    <>
      <header className="absolute top-0 inset-x-0 z-50">
        <div className={cn("container", maxWidth)}>
          <div className="flex h-[80px] 2xl:h-[100px] items-center gap-[20px] relative justify-between">
            <div>
              <Logo light={!onlyDark && isLight} />
            </div>
            <div className="pos-center hidden xl:block">
              <Menu
                textColor={cn("text-text", onlyDark && "text-text-fixed")}
              />
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="hidden md:block">
                <ButtonSwap
                  link="/contact"
                  bgColor={cn(
                    "bg-background-2",
                    onlyDark && "bg-background-fixed"
                  )}
                  textColor={cn("text-text-2", onlyDark && "text-text-fixed-2")}
                  arrowWidthHeight="w-[40px] h-[40px]"
                  textClassName="px-[22px]"
                  rootClassName="wc-swap-btn-sm"
                />
              </div>
              <SideNavModal />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default BrandingHeader;
