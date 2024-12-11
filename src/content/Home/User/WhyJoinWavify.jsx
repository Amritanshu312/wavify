import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const WhyJoinWavify = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Why Join Wavify</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col">
        <ul className="list-disc pl-3 flex flex-col gap-2 text-[15px]">
          <li>Personalized content feed</li>
          <li>Connect with unlike-minded individuals</li>
          <li>Share your thoughts and experiences</li>
          <li>Discover new ideas and perspectives</li>
          <li>Engage in meaningful conversations</li>
          <li>Explore trending topics and discussions</li>
          <li>Find inspiration and creative ideas</li>
          <li>Experience a user-friendly interface</li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default WhyJoinWavify