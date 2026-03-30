import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[30px] whitespace-nowrap leading-none  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        CornerCutButton:
          "text-[14px] px-[28px] py-3 rounded-tr-[20px]  rounded-bl-[20px] bg-black text-text-fixed-2 uppercase",
        Seo: "btn-text-flip text-base !leading-none bg-background-2 text-text-2 capitalize py-[21px] px-10 rounded-[5px] transition-all duration-300",
        Video:
          "btn-text-flip uppercase font-khand bg-background-2 text-text-2 transition-all duration-300 font-semibold gap-[50px] py-[21px] px-[35px]",
        circle:
          "w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] text-base border rounded-full border-[#FFFFFF33] transition-all duration-500 text-text-fixed-2 bg-transparent lg:text-xl",
        Ai: "btn-text-flip text-[14px] font-medium py-[27px] px-10 uppercase rounded-[70px] leading-none transition-all duration-300 whitespace-nowrap inline-flex gap-[30px] items-center justify-center overflow-hidden",
      },
      size: {
        default: "",
        md: "h-8 rounded-md  text-xs",
        xl: " rounded-md ",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
