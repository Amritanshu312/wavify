"use client";
import { Card, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useUserInfoContext } from "@/context/userInfoContext";

const Post = () => {
  const { toast } = useToast();
  const [userValue, setUserValue] = useState("");

  const { userInfo, isUserLoggedIn } = useUserInfoContext();

  const applyFixes = (value) => {
    try {
      return value
        .replace(/\n+/g, "\n")
        .trim()
        .replace(/\s+/g, " ")
        .replace(/[^a-zA-Z0-9 .,!?\n]/g, "")
        .slice(0, 250);
    } catch (error) {
      console.error(error);
      toast({
        title: "An error occurred while processing your input.",
        description:
          "There seem to be an error processing your input. Please try again later.",
      });
      return "";
    }
  };

  const handleChange = (e) => {
    const rawValue = e.target.value;
    if (rawValue.length > 250) {
      toast({
        title: "Character limit exceeded!",
        description:
          "Character limit exceeded! Only the first 250 characters are allowed.",
      });
    }
    setUserValue(applyFixes(rawValue));
  };

  return (
    isUserLoggedIn && (
      <Card className="px-8 py-4">
        <div className="flex gap-6 items-center">
          <Avatar>
            <AvatarImage src={userInfo?.photo ?? ""} />
            <AvatarFallback>{userInfo?.name?.slice(0, 1)}</AvatarFallback>
          </Avatar>

          <Textarea
            placeholder="What's on your mind ? Amritnashu"
            rows={4}
            className="resize-none"
            onChange={handleChange}
          />
        </div>

        <Tabs defaultValue="text" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-3 bg-transparent">
            <TabsTrigger value="text" className="data-[state=active]:bg-muted">
              Text
            </TabsTrigger>
            <TabsTrigger value="image" className="data-[state=active]:bg-muted">
              Image
            </TabsTrigger>
            <TabsTrigger value="video" className="data-[state=active]:bg-muted">
              Video
            </TabsTrigger>
          </TabsList>
          <TabsContent value="text"></TabsContent>

          <TabsContent value="image">
            <ImageUpload />
          </TabsContent>

          <TabsContent value="video">
            <VideoUpload />
          </TabsContent>
        </Tabs>

        <CardFooter className="pb-0 pr-0 w-full flex justify-end gap-2 mt-6">
          <Select defaultValue="public">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="friends">Friends</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button variant={"default"}>Post</Button>
        </CardFooter>
      </Card>
    )
  );
};

export default Post;
