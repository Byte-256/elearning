// components/Sidebar.tsx
"use client";

const Sidebar: React.FC = () => {
    return (
      <div className="bg-gray-800 text-white h-screen w-64 fixed top-0 left-0">
        {/* Sidebar content */}
        <h1 className="text-2xl font-semibold py-4 px-6">Admin Panel</h1>
        <ul>
          <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">Courses</li>
          <li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">Users</li>
          {/* Add more sidebar items */}
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  