import React from "react";
const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center top-0 left-0 h-screen w-screen absolute bg-slate-200/20">
      <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Loading;
