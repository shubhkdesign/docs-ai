"use client";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Unauthenticated, Authenticated } from "convex/react";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-slate-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={"/logo-white.png"}
            alt="logo img"
            width={100}
            height={10}
          />
        </div>
        <div className="flex gap-4">
          <ModeToggle />
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
          <Authenticated>
            <UserButton />
          </Authenticated>
        </div>
      </div>
    </nav>
  );
};

export default Header;
