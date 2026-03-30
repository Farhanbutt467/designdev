import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

type RatingProps = {
  value: number;
  count?: number;
  fullIcon?: string;
  halfIcon?: string;
  emptyIcon?: string;
  className?: string;
  size?: number;
};

const StarRatingG: React.FC<RatingProps> = ({
  value,
  count = 5,
  fullIcon = "/assets/imgs/icon/star-4.png",
  halfIcon = "/assets/imgs/icon/star-4-half.png",
  emptyIcon = "/assets/imgs/icon/star-4-empty.png",
  className,
  size,
}) => {
  const stars = [];

  for (let i = 1; i <= count; i++) {
    if (value >= i) {
      // Full star
      stars.push(
        <Image
          key={i}
          src={fullIcon}
          alt="Full Star"
          width={size ? size : 15}
          height={size ? size : 14}
          className="h-auto w-auto"
        />
      );
    } else if (value >= i - 0.5) {
      // Half star
      stars.push(
        <Image
          key={i}
          src={halfIcon}
          alt="half Star"
          width={size ? size : 15}
          height={size ? size : 14}
          className="h-auto w-auto"
        />
      );
    } else {
      // Empty star
      stars.push(
        <Image
          key={i}
          src={emptyIcon}
          alt="empty Star"
          width={size ? size : 15}
          height={size ? size : 14}
          className="h-auto w-auto"
        />
      );
    }
  }

  return <div className={cn("flex gap-1", className)}>{stars}</div>;
};

export default StarRatingG;
