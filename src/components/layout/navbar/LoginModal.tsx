import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LuLogIn } from "react-icons/lu";

export function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <LuLogIn size={16} />
          Sign In
        </Button>
      </DialogTrigger>

      <DialogContent className="mx-auto max-w-sm p-1">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Register or log in using the available providers.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="grid gap-4">
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="grid gap-4">
            <Button variant="outline" className="w-full">
              Login with Facebook
            </Button>
          </div>
          <div className="grid gap-4">
            <Button variant="outline" className="w-full">
              Login with Github
            </Button>
          </div>
        </CardContent>
      </DialogContent>
    </Dialog>
  );
}
