'use client';

import { auth } from "@/lib/fb.config";
import { User, onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";


const Home = () => {
    
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const un = auth.onAuthStateChanged((firebaseUser) => {
        setUser(firebaseUser);
    })
  }, [])
    
    return (
        <div>
            <h1>HomePage!</h1>
            <h3>{user?.uid}</h3>
            <h3>{user?.email}</h3>
            <h3>{user?.displayName}</h3>
            <Link href={"/login"} className=" block bg-sky-500 p-2 "> Login </Link>
        </div>
    );
};

export default Home;