"use client";
import { auth } from "@/lib/fb.config";
import { User, onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react";

import FeaturedCourses from "@/components/home/featured";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import Loading from "@/components/ui/Loading";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setTimeout(() => setLoading(false), 100);
    });
    return unsubscribe;
  }, [user]);

  if (!isLoading) {
    return (
      <div>
        <main className="bg-gray-100 min-h-screen">
          <Navbar user={user} />
          <Hero />
          <FeaturedCourses />
          <Footer />
        </main>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Home;
