"use client";

import Menu from "@/components/menu/Menu";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SeoHeader = () => {
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
    <header className="inner-container large">
      <div
        className={
          "flex h-[80px] items-center gap-[20px] relative justify-between"
        }
      >
        <Logo light={isLight} />
        <div className="pos-center hidden xl:block">
          <Menu />
        </div>
        <div className="flex items-center gap-[20px]">
          <Link
            className={cn(
              buttonVariants({ variant: "Seo" }),
              "hidden md:inline-flex !py-[13px] !px-5 bg-primary text-text-fixed-2"
            )}
            href={"/contact"}
          >
            <span data-text="Get Started">Get Started</span>
          </Link>
          <SideNavModal />
        </div>
      </div>
    </header>
  );
};

export default SeoHeader;
