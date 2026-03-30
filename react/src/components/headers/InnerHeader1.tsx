"use client";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import ButtonFlip from "../elements/button/ButtonFlip";
import Menu from "../menu/Menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  onlyLight?: boolean;
};

const InnerHeader1 = ({ onlyLight = false }: Props) => {
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
        <div className="container">
          <div className="flex h-[80px] 2xl:h-[100px] items-center gap-[20px] relative justify-between">
            <div>
              <Logo light={onlyLight ? true : isLight} />
            </div>
            <div className="pos-center hidden xl:block">
              <Menu
                textColor={cn("text-text", onlyLight && "text-text-fixed-2")}
              />
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="hidden md:block">
                <ButtonFlip
                  btnText="Get Started"
                  link="/contact"
                  className={cn(
                    "text-[14px] py-3 px-7 bg-background-2 hover:bg-background-2 text-text-2 hover:text-text-2 [border-radius:0_20px_0_20px] font-medium",
                    onlyLight &&
                      "bg-background-fixed-2 text-text-fixed hover:bg-background-fixed-2 hover:text-text-fixed"
                  )}
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

export default InnerHeader1;
