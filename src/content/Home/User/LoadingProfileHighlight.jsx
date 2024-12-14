import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";


const LoadingProfileHighlight = () => {
  return (
    <Card className="max-w-[350px] flex flex-col p-4 space-y-3 relative">
      <Skeleton className="h-4 w-[220px]" />
      <Skeleton className="h-4 w-[280px]" />

      <div className="space-y-3 !mt-8">
        <Skeleton className="h-4 w-[195px]" />
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[210px]" />
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[170px]" />
        <Skeleton className="h-4 w-[50px]" />
      </div>
    </Card>
  )
}

export default LoadingProfileHighlight