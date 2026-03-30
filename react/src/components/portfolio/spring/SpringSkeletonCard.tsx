import { Skeleton } from "@/components/ui/skeleton";

export const SpringSkeletonCard = () => {
  return (
    <div className="items-center justify-center flex gap-x-10">
      <Skeleton className="w-full h-full min-h-[330px]" />
      <Skeleton className="w-full h-full min-h-[330px] hidden sm:block" />
      <Skeleton className="w-full h-full min-h-[330px] hidden lg:block" />
      <Skeleton className="w-full h-full min-h-[330px] hidden xl:block" />
      <Skeleton className="w-[15%] lg:w-[25%] h-full min-h-[330px] hidden md:block rounded-r-none" />
    </div>
  );
};
