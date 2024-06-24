"use client";
import React from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Unauthenticated, Authenticated, AuthLoading } from "convex/react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const HeaderActions = () => {
  return (
    <div className="flex gap-4 items-center">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
      <AuthLoading> Loading... </AuthLoading>
    </div>
  );
};

export default HeaderActions;
