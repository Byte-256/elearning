"use client"
// components/Navbar.js
import { User, sendEmailVerification, signOut } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './userModal';
import { Button } from '../ui/button';

import { useRouter } from "next/navigation";
import { auth, user } from '@/lib/fb.config';
import { NEXT_URL } from 'next/dist/client/components/app-router-headers';


export default function Navbar() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showUserTooltip, setUserTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const actionCodeSettings = {
    url: `https://${NEXT_URL}/?email=user@example.com`,
    iOS: {
       bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    handleCodeInApp: true
  }; 
  const verify = async () =>{
}

  return (
    <nav className="bg-neutralWhite shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              {/* Your logo here */}
              <Image className="h-8 w-8" src="/logo.svg" alt="Logo" width={100} height={100} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Navigation links */}
                <Link href="/courses" className="text-darkBlueGrey hover:text-primary">
                  Courses
                </Link>
                <Link href="/about" className="text-darkBlueGrey hover:text-primary">
                  About
                </Link>
                <Link href="/contact" className="text-darkBlueGrey hover:text-primary">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6 relative">
            {user ? (
              // If user is logged in, show profile image with tooltip
              <>
                <div 
                  className="relative cursor-pointer"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() => setUserTooltip(!showUserTooltip)}
                >
                  <Image 
                    className="h-8 w-8 rounded-full"
                    src={user.photoURL? user.photoURL : "/account.png"} 
                    alt="User profile" 
                    width={100} height={100}
                  />
                  {showTooltip && (
                    <div className="absolute bg-white shadow-md p-2 rounded-lg top-10 right-0">
                      <p className="text-sm text-gray-700">{user.displayName}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  )}
                  {showUserTooltip && (
                     <Modal onClose={() => setShowModal(false)}>
                     <div className="p-4">
                       <h2 className="text-xl font-bold mb-4">{user.displayName}</h2>
                       <p className="text-sm text-gray-700 mb-2">Email: {user.email}</p>
                       <p>Email Verified : { user.emailVerified ? 'true' : (<Button onClick={(e) => verify() }>verify</Button>)} </p>
                       <Button
                          className="px-3 py-2 bg-primary text-neutralWhite rounded-lg font-semibold text-sm uppercase tracking-wide "
                          onClick={() => { signOut(auth) }} >
                         Logout
                       </Button>
                     </div>
                   </Modal>
                  )
                  }
                </div>
              </>
            ) : (
              // If user is not logged in, show login or signup buttons
              <>
                <Link href="/login" className="text-darkBlueGrey hover:text-primary">
                    Login
                </Link>
                <Link href="/signup" className="ml-4 px-3 py-2 bg-primary text-neutralWhite rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-accentYellow focus:outline-none focus:bg-accentYellow">
                    Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
