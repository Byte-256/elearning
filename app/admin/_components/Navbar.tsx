// components/Navbar.tsx
"use client";

const Navbar: React.FC = () => {
    return (
      <nav className="bg-gray-200 p-4">
        {/* Navbar content */}
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome, Admin!</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Logout</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  