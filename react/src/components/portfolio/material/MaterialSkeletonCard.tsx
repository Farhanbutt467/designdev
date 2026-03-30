import { Skeleton } from "@/components/ui/skeleton";

const MaterialSkeletonCard = () => {
  return (
    <div className="flex  gap-x-3 items-center h-full w-full">
      <Skeleton className="h-full w-full  lg:w-[45%]" />
      <Skeleton className="h-full w-1/4 hidden lg:block" />
      <Skeleton className="h-full w-1/5 hidden lg:block" />
    </div>
  );
};

export default MaterialSkeletonCard;
