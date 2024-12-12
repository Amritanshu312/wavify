"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MdMoreHoriz } from "react-icons/md";

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
            <DropdownMenuTrigger asChild >
              <Button variant={"ghost"}><MdMoreHoriz /></Button>
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
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the error ofThe king, seeing how much happier his subjects were, realized the error ofThe king, seeing how much happier his subjects were, realized the error of
        </p>
      </CardContent>

      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}

export default Feed