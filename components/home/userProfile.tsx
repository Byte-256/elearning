"use client";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
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
import { PanelBottomClose } from "lucide-react";
import { useAuth } from "@/lib/AuthProvider";

export default function UserProfile() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const auth = useAuth();
  const user = auth?.currentUser;
  return (
    <div>
      {user ? (
        // If user is logged in, show profile image with tooltip
        <div className="relative cursor-pointer">
          <Drawer>
            <DrawerTrigger className="flex gap-2">
              {auth.isAdmin && <Link href={"/admin"}>Admin</Link>}
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
                <Button variant="solid" onPress={() => auth.logout()}>
                  Logout
                </Button>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="bordered">
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
          <Link href="/login" className="text-darkBlueGrey hover:text-primary">
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
}
