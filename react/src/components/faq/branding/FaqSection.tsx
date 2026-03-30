"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollSmoother } from "@/lib/plugins";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

type Props = {
  faqs: {
    question: string;
    answer: string;
  }[];
  className?: string;
};

const FaqSection = ({ faqs, className }: Props) => {
  const [openItem, setOpenItem] = useState<string>("item-1");

  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full has_fade_anim"
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
        data-delay=".45"
      >
        {faqs?.map((item, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="first:border-t"
          >
            <AccordionTrigger
              className={cn(
                " leading-[1.08] text-[20px] xl:text-[24px] pt-6 pb-[18px] px-0 font-beatricetrial text-start font-normal",
                className
              )}
              customIcon={true}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[18px] leading-[1.44] px-0 pb-[23px] lg:pb-[24px] text-text-3">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
