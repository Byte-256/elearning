"use client";

import { FcGoogle } from "react-icons/fc";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "@/lib/fb.config";
import { Dispatch, SetStateAction, useState } from "react";

export const Social = ({ errorMsg }: Dispatch<SetStateAction<string | undefined>> | any) => {

  const router = useRouter()
  const [isPending, setPending] = useState<boolean>(false);

  const onClick = () => {
    setPending(true);
    signInWithPopup(auth, new GoogleAuthProvider())
    .then((credential) => {
        setPending(false);
        router.push("/")
    })
    .catch((e) => {
        console.error(e.message);
        errorMsg(e.message)
    });
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
