"use client";

import Image from "next/image";
import { useMode } from "@/context/app.context";

export default function ImageComponent({
  src = "",
  darkSrc = "",
  width = 0,
  height = 0,
  customHeight = "",
  customWidth = "",
  dataSpeed = 1,
  alt = "Image",
  className = "",
  priority = false,
  dataFadeFrom = "",
  dataFadeOffset = "",
  dataDelay = "",
}) {
  const { mode } = useMode();

  return (
    <Image
      width={width}
      height={height}
      style={{ width: customWidth, height: customHeight }}
      src={mode === "dark" ? (darkSrc ? darkSrc : src) : src}
      className={className}
      alt={alt}
      priority={priority}
      data-speed={dataSpeed}
      data-fade-from={dataFadeFrom}
      data-fade-offset={dataFadeOffset}
      data-delay={dataDelay}
    />
  );
}
