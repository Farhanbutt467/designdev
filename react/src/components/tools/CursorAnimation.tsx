"use client";

import { RefObject, useRef } from "react";

// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  cursor1: RefObject<HTMLDivElement>;
  cursor2: RefObject<HTMLDivElement>;
};

const CursorAnimation = ({ cursor1, cursor2 }: Props) => {
  const mainCursor = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      if (!cursor1.current || !cursor2.current) return;

      function mousemoveHandler(e: MouseEvent) {
        try {
          let tl = gsap.timeline({
            defaults: {
              x: e.clientX,
              y: e.clientY,
            },
          });

          // Main Cursor Moving
          tl.to(cursor1.current, {
            ease: "power2.out",
          }).to(
            cursor2.current,
            {
              ease: "power2.out",
            },
            "-=0.4"
          );
        } catch (error) {
          console.log(error);
        }
      }

      document.addEventListener("mousemove", mousemoveHandler);

      return () => {
        document.removeEventListener("mousemove", mousemoveHandler);
      };
    },
    { scope: mainCursor, dependencies: [cursor1, cursor2] }
  );

  return (
    <div ref={mainCursor} className="hidden xl:block">
      <div
        className="fixed w-[40px] h-[40px] border border-white rounded-full left-0 top-0 pointer-events-none -translate-x-[50%] -translate-y-[50%] duration-150 mix-blend-exclusion z-[9999]"
        ref={cursor1}
      ></div>
      <div
        className="fixed w-[8px] h-[8px] bg-white rounded-full left-0 top-0 pointer-events-none -translate-x-[50%] -translate-y-[50%] duration-200 mix-blend-exclusion z-[99999]"
        ref={cursor2}
      ></div>
    </div>
  );
};

export default CursorAnimation;
