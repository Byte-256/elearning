"use client";

import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

export const Social = () => {

  const onClick = () => {
    alert("Google's Freaking SSO");
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
