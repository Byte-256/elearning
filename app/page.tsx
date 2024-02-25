'use client';

import { auth } from "@/lib/fb.config";
import { User, onAuthStateChanged } from "firebase/auth";

import Head from 'next/head';
import { useEffect, useState } from "react";

import FeaturedCourses from "@/components/home/featured";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";


const Home = () => {
    
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
   onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
    })
  }, [])
  const picuri: string = user?.photoURL ? user.photoURL : "/account.png";
  return(
<div>
      <Head>
        <title>E-Learning Home Page</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 min-h-screen">
        <Navbar user={user} profileImg={picuri}/>
        <Hero />
        <FeaturedCourses />
        <Footer />
      </main>
    </div>
  );

};

export default Home;