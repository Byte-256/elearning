// pages/admin/index.tsx
"use client";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import AddCourse from "./_components/Add_course";
import { useContext } from "react";
import { AuthContext } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";

const AdminPanel: React.FC = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  if (user?.email == "admin@isaac.in") {
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
          <AddCourse />
        </main>
      </div>
    );
  } else {
    router.push("/");
  }
};

export default AdminPanel;
