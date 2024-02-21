"use client"
import Image from "next/image";
import Link from "next/link";
import { app, auth, email, name1 } from "@/lib/fb.config"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import "./colors.css"

export default function Home() {
  
  // var nameThis: string | null | undefined = name1; 
  // var emailThis: string | null | undefined = email; 
  console.log(name1);
  console.log(email);
  let router = useRouter();
  
  
  useEffect(() => {
    if (auth.currentUser == null){
      console.log("GEt hell out of my place;come to me with credentials");
    }
  }, []);

  function goto(arg0: string) {
    router.push(arg0);
  }

  return (
    <main className="flex text-2xl flex-col justify-around">
      <label className="m-2 p-2"> Home Page</label>
      <label htmlFor="uname">Hi,{ name1 }</label>
      <label htmlFor="uemail">using: { email }</label>
      <Link href={"/login"} className="flex justify-center border border-red-700 rounded-lg p-2 m-3 w-1/5"> Login </Link>
      <Button 
        onClick={()=> { signOut(auth); goto("login")}}
        className="flex justify-center primary-500 hover:primary-500 text-white border  rounded-lg p-2 m-3 w-1/5" 
      >Logout</Button>
    </main>
  );
}
