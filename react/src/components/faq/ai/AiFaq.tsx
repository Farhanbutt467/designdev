"use client";

import { useRef, useState } from "react";
import { ActionBtnType } from "@/types";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import AiSectionTitle from "@/components/sectionTitle/AiSectionTitle";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaPlay } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import gsap from "gsap";
import { ScrollSmoother } from "@/lib/plugins";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

type Props = {
  title: string;
  description: string;
  action_btn: ActionBtnType;
  faqs: {
    question: string;
    answer: string;
  }[];
};

const AiFaq = ({ title, description, action_btn, faqs }: Props) => {
  const [openItem, setOpenItem] = useState<string>("item-1");
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );
  return (
    <div className="container large" ref={containerRef}>
      <section className="bg-background-3 rounded-[20px] px-[15px] lg:px-[45px]">
        <div className="inner-container">
          <div className="main-section-spacing 2xl:!py-[130px]">
            <div className="grid grid-cols-1 xl:grid-cols-[560px] 2xl:grid-cols-[660px] justify-end">
              <AiSectionTitle
                title={title}
                className="text-text-fixed-2 max-w-[540px]"
              />
            </div>
            <div className="mt-[33px] xl:mt-[43px] 2xl:mt-[63px] grid gap-y-10 gap-x-[60px] grid-cols-[auto] lg:grid-cols-[auto_480px] xl:grid-cols-[auto_560px] 2xl:grid-cols-[auto_660px] justify-between">
              <div>
                <p
                  className="has_fade_anim max-w-[410px] text-text-fixed-3"
                  data-fade-from="bottom"
                >
                  {description}
                </p>

                <div
                  className="has_fade_anim mt-[33px] xl:mt-[43px]"
                  data-fade-from="bottom"
                  data-fade-offset="50"
                >
                  <Link
                    href={action_btn.link}
                    className={cn(
                      buttonVariants({ variant: "Ai" }),
                      "bg-background-2 text-text-2 hover:bg-theme hover:text-text-fixed-2 hover:border-theme border  border-text-fixed-3"
                    )}
                  >
                    <span data-text={action_btn.label}>{action_btn.label}</span>
                    <FaPlay />
                  </Link>
                </div>
              </div>
              <div className="has_fade_anim" data-fade-from="bottom">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue={openItem}
                  onValueChange={(value) => {
                    setOpenItem(value || "");
                    const smoother = ScrollSmoother.get();
                    if (smoother) {
                      smoother.refresh();
                    } else {
                      ScrollTrigger.refresh();
                    }
                  }}
                >
                  {faqs?.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger
                        className=" leading-[1] text-[18px] py-[18px] px-0 font-beatricetrial text-start font-medium text-text-fixed-2"
                        customIcon={true}
                      >
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[18px] leading-[1.44] px-0 pb-[23px] lg:pb-[24px] text-text-fixed-3">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiFaq;
