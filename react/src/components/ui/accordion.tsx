"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"
type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  customIcon?: boolean; // Add customIcon prop
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps
>(({ className, children, customIcon, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between text-lg transition-all text-left [&[data-state=open]>svg]:rotate-180 group",
        className
      )}
      {...props}
    >
      {children}
      {
        customIcon ? (
          <>
            <div className=" inline-block text-[25px] w-auto h-auto shrink-0 transition-transform duration-200 group-data-[state=open]:hidden">+</div>
            <div className=" inline-block text-[25px] w-auto h-auto shrink-0 transition-transform duration-200 group-data-[state=closed]:hidden">-</div>
          </>

        ) : (
          <ChevronDown className="h-[calc(.8em)] w-[calc(.8em)] shrink-0 text-inherit transition-transform duration-200" />
        )
      }


    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header >
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="leading-[0.9] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down  !bg-inherit overflow-hidden transition-all"
    {...props}
  >
    <div className={cn(" pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
