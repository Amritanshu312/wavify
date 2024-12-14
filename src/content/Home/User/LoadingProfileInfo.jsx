import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";


const LoadingProfileInfo = () => {
  return (
    <Card className="max-w-[350px] flex flex-col p-4 space-y-3 relative">
      <div className="relative">
        <Skeleton className="h-[100px] w-full rounded-xl" />
      </div>
      <div className="space-y-3 !mt-8">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[210px]" />
        <Skeleton className="h-4 w-[160px]" />
        <Skeleton className="h-4 w-[290px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>

      <div className="flex gap-4 items-center">
        <Skeleton className="w-[210px] h-8 !mt-10" />
        <Skeleton className="w-full h-8" />
      </div>

    </Card>
  )
}

export default LoadingProfileInfo