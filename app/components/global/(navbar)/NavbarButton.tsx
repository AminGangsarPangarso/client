"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const NavbarButton = (): React.ReactElement => {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return <p>please wait ....</p>;
  return isSignedIn ? (
    <div className=" flex items-center gap-3">
        <Link href="/dashboard"> Create Diary</Link>
        <Link href="/dashboard/my-diary"> My Diary</Link>
        <UserButton afterSignOutUrl="/" />
    </div>
  ) : (
    <Link href="/sign-in"> Sign In</Link>
  );
};

export default NavbarButton;
