// pages/admin/index.tsx

import { Metadata } from 'next';
import Sidebar from './_components/Sidebar';
import Navbar from './_components/Navbar';
import AddCourse from './_components/Add_cousre';

export const metadata: Metadata = {
    title: 'My Page Title',
    description: "Admin panel for managing eLearning website",
  }

const AdminPanel: React.FC = () => {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div className="ml-64">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          {/* Your admin panel content goes here */}
          <AddCourse />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
