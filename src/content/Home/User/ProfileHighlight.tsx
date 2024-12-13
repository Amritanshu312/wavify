"use client";
import { useUserInfoContext } from "@/context/userInfoContext";
import WhyJoinWavify from "./WhyJoinWavify";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProfileHighlight = () => {
  const { isUserLoggedIn } = useUserInfoContext();

  return isUserLoggedIn ? (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Profile Highlight</CardTitle>
        <CardDescription>Some Highlights of you profile.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold text-muted-foreground">
            Your Total Posts
          </div>
          <small className="text-base font-medium leading-none">30</small>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold text-muted-foreground">
            Total Share
          </div>
          <small className="text-base font-medium leading-none">50</small>
        </div>
      </CardContent>
    </Card>
  ) : (
    <WhyJoinWavify />
  );
};

export default ProfileHighlight;
