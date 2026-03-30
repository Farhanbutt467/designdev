"use client";

import Menu from "@/components/menu/Menu";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const AiHeader = () => {
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
          <Menu textColor="text-text-3" />
        </div>
        <div className="flex gap-[20px]">
          <Link
            className={cn(
              buttonVariants({ variant: "Ai" }),
              "hidden md:inline-flex !py-[19px] !px-[28px] bg-theme text-text-fixed-2 hover:text-text-2 hover:bg-text font-primary"
            )}
            href={"/contact"}
          >
            <span data-text="Get in Touch">Get in Touch</span>
          </Link>
          <SideNavModal />
        </div>
      </div>
    </header>
  );
};

export default AiHeader;
