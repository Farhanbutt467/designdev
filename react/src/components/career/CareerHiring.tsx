"use client";

import HiringRoleCard from "@/components/career/HiringRoleCard";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { TJobType } from "@/types";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  jobs: TJobType[];
};

const CareerHiring = ({ title, jobs }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-background-3">
      <div className="container2" ref={containerRef}>
        <div className="main-section-spacing">
          <InnerSectionTitle title={title} className="text-text-fixed-2" />
          <div className="mt-[37px] xl:mt-[57px]">
            {jobs.map((item, index) => (
              <HiringRoleCard
                key={index}
                serialNo={index + 1}
                job={item.data}
                path={item.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHiring;
