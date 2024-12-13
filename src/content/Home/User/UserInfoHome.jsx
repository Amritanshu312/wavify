"use client";
import { MdMarkEmailRead, MdOutlineDone } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DiscoverWavify from "./DiscoverWavify";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaArtstation } from "react-icons/fa6";
import { LuCalendarCheck2 } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import { useUserInfoContext } from "@/context/userInfoContext";

const UserInfoHome = () => {
  const { isUserLoggedIn, userInfo } = useUserInfoContext();

  return isUserLoggedIn ? (
    <Card className="max-w-[350px]">
      <CardHeader className="relative p-1">
        <Image
          src="https://plus.unsplash.com/premium_photo-1701590725747-ac131d4dcffd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile cover"
          className="w-full h-24 object-cover rounded-lg"
          width={1000}
          height={300}
        />
        <Avatar className="absolute bottom-4 left-8 transform translate-y-1/2 w-16 h-16 border-[4px] border-zinc-800">
          <AvatarImage
            src="https://plus.unsplash.com/premium_photo-1701590725747-ac131d4dcffd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="John Doe"
          />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="mt-6">
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {userInfo?.name}
          </h3>

          <p className="text-sm text-muted-foreground">@godoftheworld</p>
        </div>

        <div className="mt-4">
          <p className="text-sm leading-4">
            {userInfo?.description}
          </p>

          <div className="mt-4 flex flex-col gap-2">
            <div className="flex gap-2 items-center text-muted-foreground text-[15px]">
              <FaArtstation size={17} />
              <Badge variant="secondary" className="w-max">
                {userInfo?.shortTitle}
              </Badge>
            </div>

            <div className="flex gap-2 items-center text-muted-foreground text-[15px]">
              <MdMarkEmailRead size={18} />
              <span>{userInfo?.email}</span>

              {userInfo?.emailVerified &&
                <Badge variant="secondary">
                  <MdOutlineDone />
                </Badge>}
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-[15px]">
              <LuCalendarCheck2 size={18} /> <span>{formatJoinDate(userInfo?.createdAt)}</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between pr-8">
            <div className="text-[15px] text-muted-foreground font-medium">
              <span className="text-foreground">{userInfo?.followers}</span> Followers
            </div>

            <div className="text-[15px] text-muted-foreground">
              <span className="text-foreground">{userInfo?.following}</span> Following
            </div>
          </div>

          <Button variant={"outline"} className="w-full text-center mt-4">
            Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  ) : (
    <DiscoverWavify />
  );
};

const formatJoinDate = (timestamp) => {
  try {
    if (!timestamp || typeof timestamp.seconds !== "number" || typeof timestamp.nanoseconds !== "number") {
      throw new Error("Invalid timestamp object");
    }

    const milliseconds = timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6;
    const date = new Date(milliseconds);
    const options = { year: "numeric", month: "long" };
    return `Joined ${date.toLocaleDateString("en-US", options)}`;
  } catch (error) {
    console.error("Invalid timestamp format:", error);
    return "Invalid date";
  }
};



export default UserInfoHome;
