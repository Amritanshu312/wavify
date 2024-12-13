import { BsPeople } from "react-icons/bs";
import { FaBolt } from "react-icons/fa6";
import { PiGlobeLight } from "react-icons/pi";
import { LuTrendingUp } from "react-icons/lu";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LoginModal } from "@/components/shared/LoginModal";


const DiscoverWavify = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Discover Wavify</CardTitle>
        <CardDescription>Connect, explore with Wavify.</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <BsPeople size={19} />
          <span className="text-sm">Connect with millions of users</span>
        </div>
        <div className="flex gap-2 items-center">
          <FaBolt size={19} />
          <span className="text-sm">Engage with trending content</span>
        </div>
        <div className="flex gap-2 items-center">
          <PiGlobeLight size={19} />
          <span className="text-sm">Explore diverse communities</span>
        </div>
        <div className="flex gap-2 items-center">
          <LuTrendingUp size={19} />
          <span className="text-sm">Stay updated with latest trends</span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <LoginModal title="Log In To Post" varient="outline" />
      </CardFooter>
    </Card>
  )
}

export default DiscoverWavify