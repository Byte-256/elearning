import React from "react";
import Image from "next/image";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Loading;
