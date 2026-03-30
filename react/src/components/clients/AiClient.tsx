"use client";

import { useRef } from "react";
import AiClientCard from "./AiClientCard";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  clients: {
    icon: {
      light: string;
      dark: string;
    };
    name: string;
    description: string;
  }[];
};

const AiClient = ({ title, clients }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="xl:!pt-0 main-section-spacing">
          <div>
            <h2 className="has_text_mov_anim text-[24px] leading-[1.25] mt-[-10px] max-w-[345px]">
              {title}
            </h2>
          </div>
          <div className="mt-[34px] xl:mt-[44px] 2xl:mt-[54px]">
            <div className="grid gap-y-10  gap-x-[60px] justify-between sm:grid-cols-2 lg:grid-cols-[repeat(4,180px)] xl:grid-cols-[repeat(4,230px)]">
              {clients.map((item, index) => (
                <AiClientCard key={`client-${index}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiClient;
