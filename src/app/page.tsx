import UserInfoHome from "@/content/Home/User/UserInfoHome";
import WhyJoinWavify from "@/content/Home/User/WhyJoinWavify";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function Home() {
  return (
    <div className="w-full flex justify-center my-4">
      <MaxWidthWrapper large>
        <div className="flex flex-col gap-6">
          <UserInfoHome />
          <WhyJoinWavify />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
