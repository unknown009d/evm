// import { Button, Input, Form, GoogleButton } from 'shadcn-ui';
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from 'next/navigation'
import { ChevronRight } from "lucide-react"
// import React from "react"
import { UserAuth } from "@/components/context/AuthContext";
import { useEffect, useState } from "react";

import Image from "next/image";


export default function Home({ auth }) {
  // Firebase
  const { user, googleSignIn, logOut } = UserAuth();
  let [usernam, setUsernam] = useState(null);


  const handleSignIn = async () => {
    try {
      await googleSignIn();
      console.log(user);
      setUsernam(`Welcome, ${user.displayName} (${user.email})`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  // Firebase End

  const router = useRouter()

  const handleGoogleLogin = () => {
    console.log("handle karchuka hun mc")
    // console.log("Hello")
    console.log("Call toh hoche")
  }
  const handleLogin = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/auth')
  }

  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-5">Welcome to Event Management Application</h2>
      <p className="opacity-50">Please enter the credentials to login</p>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-10">
        <label htmlFor="phno" className="text-sm">Enter phone numer</label>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone number"
          id="phno"
          maxLength={10}
          required
        />
        <Button type="submit" variant={"outline"} className="flex flex-row justify-between items-center">
          Continue
          <ChevronRight />
        </Button>
        <div className="text-center flex flex-row justify-stretch items-center">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-[0.5px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-800" />
            <div className="absolute px-4 -translate-x-1/2 bg-background left-1/2">
              or
            </div>
          </div>
        </div>
        {/* <Button type="button" onClick={handleGoogleLogin} className="flex flex-row gap-4">
          <Image src="/Google.webp" width={16} height={16} alt="Google"></Image>
          Login with Google
        </Button>
        <div className="flex items-center justify-center mt-5 space-x-2 text-center">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Keep me logged in
          </label>
        </div>
      </form>
      <article className="font-bold text-lg mt-10">
        <h3>{usernam}</h3>
      </article>
    </div>
  );
}
