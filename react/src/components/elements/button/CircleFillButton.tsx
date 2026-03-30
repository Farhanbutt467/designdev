"use client";

import { useEffect } from "react";
import Link from "next/link";
import { convertWithBr } from "@/lib/helper/converter";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  text: string;
  className?: string;
};

export default function CircleFillButton({ href, text, className }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    const buttons = document.querySelectorAll(".btn-hover-bgchange");

    buttons.forEach((btn) => {
      const htmlBtn = btn as HTMLElement;

      const ensureSpan = () => {
        let span = htmlBtn.querySelector("span") as HTMLSpanElement;
        if (!span) {
          span = document.createElement("span");
          span.className = "hover-span";
          htmlBtn.appendChild(span);
        }
        return span;
      };

      const handleHover = (e: MouseEvent) => {
        const span = ensureSpan();
        const rect = htmlBtn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
      };

      htmlBtn.addEventListener("mouseenter", handleHover);
      htmlBtn.addEventListener("mousemove", handleHover);
      htmlBtn.addEventListener("mouseout", handleHover);

      return () => {
        htmlBtn.removeEventListener("mouseenter", handleHover);
        htmlBtn.removeEventListener("mousemove", handleHover);
        htmlBtn.removeEventListener("mouseout", handleHover);
      };
    });
  }, [pathname]);

  return (
    <Link
      href={href}
      dangerouslySetInnerHTML={convertWithBr(text)}
      className={cn(
        "btn-hover-bgchange btn-item relative overflow-hidden text-center w-[170px] h-[170px] inline-flex justify-center items-center bg-transparent border-border border rounded-full text-[18px] font-semibold leading-[24px] text-text",
        className
      )}
    />
  );
}
