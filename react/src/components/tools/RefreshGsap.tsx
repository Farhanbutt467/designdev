"use client";

import { useLayout } from "@/context/app.context";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const RefreshGsap = () => {
  const { layout } = useLayout();
  useGSAP(
    () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    },
    { dependencies: [layout] }
  );
  return <></>;
};

export default RefreshGsap;
