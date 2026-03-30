import { Skeleton } from "@/components/ui/skeleton";

const SlicerSkeletonCard = () => {
  return (
    <div className="flex  gap-x-3 items-center h-full w-full">
      <Skeleton className="h-full w-full container !max-w-[1850px]" />
    </div>
  );
};

export default SlicerSkeletonCard;
