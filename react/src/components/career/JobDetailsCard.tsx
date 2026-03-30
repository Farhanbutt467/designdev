"use client";

import ButtonFlip from "@/components/elements/button/ButtonFlip";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  vacancy: number;
  experience: string;
  working_days: string;
  working_hours: string;
  salary: string;
  deadline: string;
};

const JobDetailsCard = ({
  experience,
  working_hours,
  working_days,
  salary,
  vacancy,
  deadline,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="w-full sm:w-[410px] bg-background ms-auto has_fade_anim">
        <div className="px-[25px] py-[34px] xl:px-[45px] xl:py-[54px]">
          <ul className="flex flex-col gap-[23px]">
            <li>
              <span className="text-[16px] leading-none block text-text-3">
                Experience
              </span>
              <span className="text-[18px] font-medium leading-[1.33] mt-[9px] block">
                {experience}
              </span>
            </li>
            <li>
              <span className="text-[16px] leading-none block text-text-3">
                Working Hours
              </span>
              <span className="text-[18px] font-medium leading-[1.33] mt-[9px] block">
                {working_hours}
              </span>
            </li>
            <li>
              <span className="text-[16px] leading-none block text-text-3">
                Working Days
              </span>
              <span className="text-[18px] font-medium leading-[1.33] mt-[9px] block">
                {working_days}
              </span>
            </li>
            <li>
              <span className="text-[16px] leading-none block text-text-3">
                Salary
              </span>
              <span className="text-[18px] font-medium leading-[1.33] mt-[9px] block">
                {salary}
              </span>
            </li>
            <li>
              <span className="text-[16px] leading-none block text-text-3">
                Vacancy
              </span>
              <span className="text-[18px] font-medium leading-[1.33] mt-[9px] block">
                No of Vacancies: {vacancy}
              </span>
            </li>
            <li>
              <span className="text-[16px] leading-none block text-text-3">
                Deadline
              </span>
              <span className="text-[18px] font-medium leading-[1.33] mt-[9px] block">
                {deadline}
              </span>
            </li>
          </ul>
        </div>
        <ButtonFlip
          btnText="Apply For the Job"
          className="bg-background-2 text-text-2 text-[18px] !rounded-none w-full  h-[60px] xl:h-[100px] px-[35px] xl:px-[45px] flex justify-center items-center"
        />
      </div>
    </div>
  );
};

export default JobDetailsCard;
