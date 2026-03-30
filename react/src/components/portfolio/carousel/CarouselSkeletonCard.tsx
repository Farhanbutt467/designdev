import { Skeleton } from "@/components/ui/skeleton";

export function CarouselSkeletonCard() {
  return (
    <div className="flex  space-y-3 items-center">
      <Skeleton className="h-[200px] sm:h-[250px]  xl:h-[300px] 2xl:h-[400px] w-[100px] xl:w-[150px]  2xl:w-[200px] rounded-none" />
      <Skeleton className="h-[310px] sm:h-[360px] w-[500px] xl:h-[450px] xl:w-[700px] 2xl:h-[550px] 2xl:w-[800px] !max-w-[calc(100%-48px)]" />
      <Skeleton className="h-[200px] sm:h-[250px]  xl:h-[300px] 2xl:h-[400px] w-[100px] xl:w-[150px]  2xl:w-[200px] rounded-none" />
    </div>
  );
}
