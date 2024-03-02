"use client";
import { auth } from "@/lib/fb.config";
import Link from "next/link";
import Image from "next/image";
import Modal from "./userModal";
import { Button } from "../ui/button";
import { User, sendEmailVerification, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/lib/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Loading from "../ui/Loading";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FcCloseUpMode } from "react-icons/fc";
import { DialogClose } from "@radix-ui/react-dialog";
import { PanelBottomClose } from "lucide-react";

export default function UserProfile() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  function verifyUser() {
    if (user) {
      sendEmailVerification(user)
        .then(() => {
          alert("check your Inbox");
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }
  if (!isLoading) {
    return (
      <div>
        {user ? (
          // If user is logged in, show profile image with tooltip
          <div className="relative cursor-pointer">
            <Drawer>
              <DrawerTrigger>
                <Avatar
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <AvatarImage src={user.photoURL!} />
                  <AvatarFallback className="bg-slate-500/50">
                    {user.displayName?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>{user.displayName}</DrawerTitle>
                  <DrawerDescription>{user.email}</DrawerDescription>
                  <Button variant="destructive" onClick={() => auth.signOut()}>
                    Logout
                  </Button>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">
                      {<PanelBottomClose width={20} height={20} />}
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            {showTooltip && (
              <div className="absolute bg-slate-300/80 bg-opacity-75 shadow-md p-2 rounded-lg top-10 right-0">
                <p className="text-sm text-gray-700">{user.displayName}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            )}
          </div>
        ) : (
          // If user is not logged in, show login or signup buttons
          <>
            <Link
              href="/login"
              className="text-darkBlueGrey hover:text-primary"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="ml-4 px-3 py-2 bg-primary text-neutralWhite rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-accentYellow focus:outline-none focus:bg-accentYellow"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
    );
  }
}
