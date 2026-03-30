"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import {
  useDirection,
  useLayout,
  useMode,
  useSwitcherDir,
} from "@/context/app.context";

// icons
import { FaGear, FaXmark } from "react-icons/fa6";

// lib
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type SwitcherType = {
  cursor1: RefObject<HTMLDivElement>;
  cursor2: RefObject<HTMLDivElement>;
};

const Switcher = ({ cursor1, cursor2 }: SwitcherType) => {
  const { switcherDir } = useSwitcherDir();
  const { direction, setDirection } = useDirection();
  const { layout, setLayout } = useLayout();
  const { setMode } = useMode();
  const { setTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [selectedCursor, setSelectedCursor] = useState("2");

  const switcherIcon = useRef<HTMLDivElement>(null!);
  const switcherItems = useRef<HTMLDivElement>(null!);
  const switcherOpen = useRef<HTMLButtonElement>(null!);
  const switcherClose = useRef<HTMLButtonElement>(null!);

  const openSwitcher = () => {
    setOpen(true);
    switcherIcon.current.style[switcherDir as any] = "270px";
    switcherItems.current.style[switcherDir as any] = "-10px";
  };
  const closeSwitcher = () => {
    setOpen(false);
    switcherIcon.current.style[switcherDir as any] = "0";
    switcherItems.current.style[switcherDir as any] = "-280px";
  };

  useEffect(() => {
    let cursor_val = selectedCursor;
    if (cursor_val == "1" && cursor1.current && cursor2.current) {
      cursor1.current.style.display = "none";
      cursor2.current.style.display = "none";
    } else if (cursor1.current && cursor2.current) {
      cursor1.current.style.display = "";
      cursor2.current.style.display = "";
    }
  }, [selectedCursor]);

  return (
    <div className="relative hidden md:block">
      <div
        className={cn(
          "fixed w-[50px] h-[50px] bg-white right-0 top-[40%] -translate-y-[50%] z-[1000] transition-all duration-300 mix-blend-exclusion",
          {
            "left-0": switcherDir === "left",
          }
        )}
        ref={switcherIcon}
      >
        {open ? (
          <button
            className="flex justify-center items-center text-[24px] text-text-3 w-full h-full transition-all duration-300 hover:text-text-fixed-3"
            ref={switcherClose}
            onClick={closeSwitcher}
          >
            <FaXmark className="w-[23px] h-[24px]" />
          </button>
        ) : (
          <button
            className="flex justify-center items-center text-[24px] text-text-3 w-full h-full transition-all duration-300 hover:text-text-fixed-3"
            ref={switcherOpen}
            onClick={openSwitcher}
          >
            <FaGear className="w-[23px] h-[24px]" />
          </button>
        )}
      </div>

      <div
        className={cn(
          "w-[280px] py-[50px] px-[30px] bg-text-fixed fixed -right-[280px] top-[40%] z-[99] -translate-y-[50%] font-primary transition-all duration-300",
          {
            "-left-[280px]": switcherDir === "left",
          }
        )}
        style={{ zIndex: "1000" }}
        ref={switcherItems}
        dir="ltr"
      >
        <div className="mb-[30px] relative">
          <h2 className="text-[20px] font-medium leading-normal text-text-fixed-2 capitalize pb-[10px]">
            Cursor
          </h2>

          <Select value={selectedCursor} onValueChange={setSelectedCursor}>
            <SelectTrigger className="border-0 bg-[#2b2b2f] text-text-fixed-2 rounded capitalize outline-0 cursor-pointer">
              <SelectValue placeholder="Select Cursor" />
            </SelectTrigger>
            <SelectContent
              className="text-text-fixed-2 bg-[#2b2b2f] z-[999999] border-0"
              position="popper"
            >
              <SelectItem value="1">Default</SelectItem>
              <SelectItem value="2">Animated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-[30px]">
          <h2 className="text-[20px] font-medium leading-normal text-text-fixed-2 capitalize pb-[10px]">
            Mode
          </h2>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              className={cn(
                "inline-block text-[14px] font-medium leading-normal hover:text-text-fixed-2 bg-[#2b2b2f] rounded capitalize py-[10px] px-[15px] text-text-fixed-2 dark:text-text-fixed-3"
              )}
              onClick={() => {
                setTheme("light");
                setMode("light");
              }}
            >
              Light
            </button>
            <button
              className={cn(
                "inline-block text-[14px] font-medium leading-normal hover:text-text-fixed-2 bg-[#2b2b2f] rounded capitalize py-[10px] px-[15px] text-text-fixed-3 dark:text-text-fixed-2"
              )}
              onClick={() => {
                setTheme("dark");
                setMode("dark");
              }}
            >
              Dark
            </button>
          </div>
        </div>
        <div className="mb-[30px]">
          <h2 className="text-[20px] font-medium leading-normal text-text-fixed-2 capitalize pb-[10px]">
            Direction
          </h2>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              className={cn(
                "inline-block text-[14px] font-medium leading-normal hover:text-text-fixed-2 bg-[#2b2b2f] rounded capitalize py-[10px] px-[15px]",
                direction === "rtl" ? "text-text-fixed-3" : "text-text-fixed-2"
              )}
              onClick={() => setDirection("")}
            >
              LTR
            </button>
            <button
              className={cn(
                "inline-block text-[14px] font-medium leading-normal hover:text-text-fixed-2 bg-[#2b2b2f] rounded capitalize py-[10px] px-[15px]",
                direction === "rtl" ? "text-text-fixed-2" : "text-text-fixed-3"
              )}
              onClick={() => setDirection("rtl")}
            >
              RTL
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-[20px] font-medium leading-normal text-text-fixed-2 capitalize pb-[10px]">
            Layout
          </h2>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              className={cn(
                "inline-block text-[14px] font-medium leading-normal hover:text-text-fixed-2 bg-[#2b2b2f] rounded capitalize py-[10px] px-[15px]",
                layout === "box" ? "text-text-fixed-2" : "text-text-fixed-3"
              )}
              onClick={() => setLayout("box")}
            >
              Box
            </button>
            <button
              className={cn(
                "inline-block text-[14px] font-medium leading-normal hover:text-text-fixed-2 bg-[#2b2b2f] rounded capitalize py-[10px] px-[15px]",
                layout === "box" ? "text-text-fixed-3" : "text-text-fixed-2"
              )}
              onClick={() => setLayout("")}
            >
              Full
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switcher;
