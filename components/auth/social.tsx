"use client";

import { FcGoogle } from "react-icons/fc";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "@/lib/fb.config";

export const Social = () => {

  const router = useRouter()

  const onClick = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
    .then((credential) => {
        router.push("/")
    })
  }

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {onClick()}}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
    </div>
  );
};
