"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ReactNode } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import { toast } from "react-toastify";
type LoginModalProps = {
  icon: ReactNode | null;
  title: string;
  varient:
    | "link"
    | "default"
    | "ghost"
    | "destructive"
    | "outline"
    | "secondary";
};

export function LoginModal({
  icon,
  title,
  varient = "ghost",
}: LoginModalProps) {
  const Login = async (provider: "google" | "facebook" | "github") => {
    let socialProvider = null;
    if (provider === "google") {
      socialProvider = new GoogleAuthProvider();
    } else if (provider === "facebook") {
      socialProvider = new FacebookAuthProvider();
    } else if (provider === "github") {
      socialProvider = new GithubAuthProvider();
    }
    if (socialProvider) {
      try {
        await signInWithPopup(auth, socialProvider);
      } catch (err) {
        console.error(err);
      }
    } else toast("There was a error In out Application.");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={varient}>
          {icon}
          {title}
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
            <Button
              variant="outline"
              className="w-full"
              onClick={() => Login("google")}
            >
              Login with Google
            </Button>
          </div>
          <div className="grid gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => Login("facebook")}
            >
              Login with Facebook
            </Button>
          </div>
          <div className="grid gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => Login("github")}
            >
              Login with Github
            </Button>
          </div>
        </CardContent>
      </DialogContent>
    </Dialog>
  );
}
