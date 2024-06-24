"use client";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Unauthenticated, Authenticated } from "convex/react";
import React from "react";
import Image from "next/image";
import HeaderActions from "./header-actions";

const Header = () => {
  return (
    <nav className="py-4 bg-neutral-700">
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

          <HeaderActions />
        </div>
      </div>
    </nav>
  );
};

export default Header;
