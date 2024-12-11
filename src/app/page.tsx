import UserInfoHome from "@/content/Home/User/UserInfoHome";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import ProfileHighlight from "@/content/Home/User/ProfileHighlight";
import Post from "@/content/Home/Feed/AddPost/Post";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-full flex justify-center my-4">
      <MaxWidthWrapper large className="flex gap-3">
        <div className="flex flex-col gap-6 w-max">
          <UserInfoHome />
          <ProfileHighlight />
        </div>

        <Separator orientation="vertical" />

        <div className="w-full max-w-[52rem]">
          <Post />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
