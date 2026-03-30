"use client";

import { useRef } from "react";
import Switcher from "./Switcher";
import CursorAnimation from "./CursorAnimation";

const ToolsComponent = () => {
  const cursor1 = useRef<HTMLDivElement>(null!);
  const cursor2 = useRef<HTMLDivElement>(null!);

  return (
    <>
      <CursorAnimation cursor1={cursor1} cursor2={cursor2} />
      <Switcher cursor1={cursor1} cursor2={cursor2} />
    </>
  );
};

export default ToolsComponent;
