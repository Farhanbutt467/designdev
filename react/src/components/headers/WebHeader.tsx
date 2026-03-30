"use client";

import Menu from "@/components/menu/Menu";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import GlobalSearch from "../tools/GlobalSearch";

const WebHeader = () => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  return (
    <header className="border-b">
      <div className="inner-container large ">
        <div
          className={
            "flex h-[100px] items-center gap-[20px] relative justify-between"
          }
        >
          <Logo light={isLight} />
          <div className="pos-center hidden xl:block">
            <Menu className="text-[22px] [&_button]:text-[22px] [&_a]:text-[22px] [&_svg]:w-4 [&_svg]:h-4 uppercase font-teko" />
          </div>
          <div className="flex gap-[20px]">
            <div>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setOpen(true)}
              >
                <Search size={20} />
              </Button>
            </div>
            <SideNavModal />
          </div>
        </div>
      </div>
      <GlobalSearch open={open} setOpen={setOpen} />
    </header>
  );
};

export default WebHeader;
