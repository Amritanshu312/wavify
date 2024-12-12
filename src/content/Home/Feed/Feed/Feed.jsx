"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdMoreHoriz } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Feed = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex-row items-center justify-between">
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-[15px]">
              God of the world
            </p>

            <p className="text-sm text-muted-foreground">12 Hour Ago</p>
          </div>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"}>
                <MdMoreHoriz />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Post Manuplation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
              <DropdownMenuItem>Visibility</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-[14px]">
          The king, seeing how much happier his subjects were, realized the
          error ofThe king, seeing how much happier his subjects were, realized
          the error ofThe king, seeing how much happier his subjects were,
          realized the error of
        </p>
      </CardContent>

      <CardFooter className="flex gap-4">
        <TooltipButton
          title="Like"
          icon={<AiOutlineLike />}
          tooltip={"Like This Post"}
        />
        <TooltipButton
          title="Comment"
          icon={<BiSolidCommentDetail />}
          tooltip={"Comment In This Post"}
        />
        <TooltipButton
          title="Share"
          icon={<IoIosShareAlt />}
          tooltip={"Share This Post"}
        />
      </CardFooter>
    </Card>
  );
};

export const TooltipButton = ({ title, icon, tooltip }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            {icon} {title}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Feed;
