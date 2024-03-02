// components/Navbar.tsx

import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="sm:hidden flex bg-gray-200 p-4">
      {/* Navbar content */}
      <div className="container flex justify-between items-center">
        <h1 className="text-xl font-semibold">Welcome, Admin!</h1>
        <Button className="bg-primary">Logout</Button>
      </div>
    </nav>
  );
};

export default Navbar;
