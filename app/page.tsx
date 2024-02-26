'use client';

import { auth } from "@/lib/fb.config";
import { User, onAuthStateChanged } from "firebase/auth";

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
      <main className="bg-gray-100 min-h-screen">
        <Navbar />
        <Hero />
        <FeaturedCourses />
        <Footer />
      </main>
    </div>
  );

};

export default Home;