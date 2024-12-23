"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import MaxWidthWrapper from "../../shared/max-width-wrapper";

import { LoginModal } from "../../shared/LoginModal";
import { LuLogIn } from "react-icons/lu";
import { useUserInfoContext } from "@/context/userInfoContext";
import Profile from "./profile";

export function Navbar() {
  const { userInfo, isUserLoggedIn } = useUserInfoContext();

  return (
    <header className="w-full flex justify-center h-14 py-4">
      <MaxWidthWrapper>
        <NavigationMenu className="flex justify-between max-w-full w-full">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>

              <Link href="/explore" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Explore
                </NavigationMenuLink>
              </Link>

              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Me
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/messages" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Messages
                </NavigationMenuLink>
              </Link>

              <Link href="/settings" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Settings
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          {!isUserLoggedIn ? (
            <LoginModal
              icon={<LuLogIn size={16} />}
              title="Sign In"
              varient="ghost"
            />
          ) : (
            userInfo && (
              <Profile isUserLoggedIn={isUserLoggedIn} userInfo={userInfo} />
            )
          )}
          
        </NavigationMenu>
      </MaxWidthWrapper>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
