import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserInfo } from "@/typescript/Interface";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";

interface ProfileProps {
  isUserLoggedIn: boolean;
  userInfo: UserInfo;
}

const Profile = ({ isUserLoggedIn, userInfo }: ProfileProps) => {
  const { setTheme } = useTheme();

  console.log(userInfo, isUserLoggedIn);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            src={userInfo?.photo}
            alt="profile"
            height={30}
            width={30}
            className="object-cover border-2 rounded-full border-[#e0e0e0a1] cursor-pointer p-[1px]"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Notifications</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Appearance</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>My Posts</DropdownMenuItem>
        <DropdownMenuItem>Liked Posts</DropdownMenuItem>
        <DropdownMenuItem disabled>Drafts</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Report a Problem</DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut(auth)}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
