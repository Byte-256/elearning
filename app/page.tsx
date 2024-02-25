'use client';

import { Button } from "@/components/ui/button";
import { auth } from "@/lib/fb.config";
import { User, onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const Home = () => {
    
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const un = auth.onAuthStateChanged((firebaseUser) => {
        setUser(firebaseUser);
    })
  }, [])

  const picuri: string = user?.photoURL ? user.photoURL: "";
    
    return (
        <div>
            <h1>HomePage!</h1>
            <Image
              className=" rounded-3xl ml-3"
              src='https://lh3.googleusercontent.com/a/ACg8ocISyBHG-scj0cA1mQ2Ht7MciBk7ELXCcMo15KanPVk2=s96-c'
              alt="profile_ico"
              width={50}
              height={50}
              />
            <h3>{user?.uid}</h3>
            <h3>{user?.email}</h3>
            <h3>{user?.displayName}</h3>
            <Button>
              <Link href={"/logout"}>
               Logout
              </Link>
            </Button>
            <Link href={"/login"} className=" block bg-sky-500 p-2 "> Login </Link>
        </div>
    );
};

export default Home;