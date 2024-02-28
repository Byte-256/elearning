"use client";
import { auth } from "@/lib/fb.config";
import Link from "next/link";
import Image from "next/image";
import Modal from "./userModal";
import { Button } from "../ui/button";
import { User, sendEmailVerification, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

interface UserProfileProps {
  user: User | null;
}

export default function UserProfile({ user }: UserProfileProps) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
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
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowModal(!showModal)}
          >
            <Image
              className="h-8 w-8 rounded-full"
              src={user.photoURL ? user.photoURL : "/account.png"}
              alt="User profile"
              width={100}
              height={100}
            />
            {showTooltip && (
              <div className="absolute bg-white shadow-md p-2 rounded-lg top-10 right-0">
                <p className="text-sm text-gray-700">{user.displayName}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            )}
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-4">{user.displayName}</h2>
                  <p className="text-sm text-gray-700 mb-2">
                    Email: {user.email}
                  </p>
                  <p>
                    Email Verified :{" "}
                    {user.emailVerified ? (
                      "true"
                    ) : (
                      <Button onClick={(e) => verifyUser()}>verify</Button>
                    )}{" "}
                  </p>
                  <Button
                    className="px-3 py-2 bg-primary text-neutralWhite rounded-lg font-semibold text-sm uppercase tracking-wide "
                    onClick={() => {
                      signOut(auth);
                    }}
                  >
                    Logout
                  </Button>
                </div>
              </Modal>
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
    return null;
  }
}
