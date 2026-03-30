import { Star, StarHalf } from "lucide-react";

type Props = {
  number: number;
  starBgColor?: string;
  starColor?: string;
  className?: string;
};

const StarRating = ({
  number,
  starBgColor = "#C8CDD2",
  starColor = "#F55442",
}: Props) => {
  return (
    <div className="relative">
      <div className="flex items-center gap-[6px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>
            <Star size={20} fill={starBgColor} strokeWidth={0} />
          </span>
        ))}
      </div>
      <div className="flex items-center absolute top-0 gap-[6px]">
        {Array.from({ length: Math.ceil(number) }).map((_, index) => (
          <span key={index}>
            {index + 1 <= number ? (
              <Star size={20} fill={starColor} strokeWidth={0} />
            ) : (
              <StarHalf size={20} fill={starColor} strokeWidth={0} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
