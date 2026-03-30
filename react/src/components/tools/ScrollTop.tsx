"use client";

import { useEffect, useRef } from "react";
import { useStopScrollTop } from "@/context/app.context";

import { FaArrowUp } from "react-icons/fa6";

const ScrollTop = () => {
  const { stopScrollTop } = useStopScrollTop();

  const topScroll = useRef<HTMLButtonElement>(null!);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let scroll_top = topScroll.current;
      if (scroll_top) {
        window.onscroll = function () {
          if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
          ) {
            scroll_top.style.display = "block";
          } else {
            scroll_top.style.display = "none";
          }
        };
      }
    }
  }, []);

  if (stopScrollTop) return;

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <button
      ref={topScroll}
      style={{ display: "none" }}
      className="fixed w-[50px] h-[50px] right-[5px] md:right-[10px] lg:right-[20px] bottom-[55px] md:bottom-[60px] lg:bottom-[80px] xl:bottom-[20px] z-[9991] rounded-full bg-white hidden transition-all duration-300 mix-blend-exclusion"
      onClick={goToTop}
    >
      <FaArrowUp className="w-[14px] h-[16px] text-text-fixed m-auto" />
    </button>
  );
};

export default ScrollTop;
