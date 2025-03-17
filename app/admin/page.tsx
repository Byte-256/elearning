"use client";

import { useAuth } from "@/lib/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import AddCourse from "./_components/addCourse";
import Navbar from "@/components/home/navbar";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

const AdminPanel: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();

  if (!auth) return <Loading />;

  const { isAdmin, currentUser } = auth;

  if (auth.currentUser) {
    return (
      <>
        {isAdmin ? (
          <>
            <Navbar />
            <div className="max-w-3xl mx-auto py-8">
              <main className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-semibold text-center">
                  {" "}
                  Admin Panel
                </h1>
                <p className="text-center text-gray-700 mt-2">
                  Welcome,{" "}
                  <span className="font-bold">{currentUser?.email}</span>! 👋
                </p>

                <Link href="/admin/courses">
                  <Button
                    variant="bordered"
                    onPress={() => {
                      router.push("/admin/courses");
                    }}
                  >
                    Manage Courses
                  </Button>
                </Link>

                <div className="mt-6">
                  <AddCourse />
                </div>
              </main>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-xl font-semibold">🚫 Access Denied</h1>
            <p className="text-gray-600">
              You are not authorized to access this page.
            </p>
            <Button variant="bordered">
              <Link href="/" className="text-blue-500">
                Go to Home
              </Link>
            </Button>
          </div>
        )}
      </>
    );
  }
  <Loading />;
};

export default AdminPanel;
