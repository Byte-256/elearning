// pages/admin/index.tsx
"use client";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import AddCourse from "./_components/Add_course";
import { useAuth } from "@/lib/AuthProvider";
import Link from "next/link";
import CourseCard from "@/components/home/coursecard";
import CoursePage from "../courses/_components/coursePage";

const AdminPanel: React.FC = () => {
  const auth = useAuth();
  const user = auth?.currentUser;

  if (user?.email === "admin@isaac.in") {
    return (
      <div>
        {/* Sidebar */}
        <Sidebar />
        {/* Page Content */}

        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="container mx-auto px-4 py-6 sm:ml-64">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          {/* Your admin panel content goes here */}
          <CoursePage />
          <AddCourse />
        </main>
      </div>
    );
  } else {
    <Link href="/">Click here</Link>;
  }
};

export default AdminPanel;
