"use client";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>, // Optional: Show loading state
});

export const Preview = ({ value }: { value: string }) => {
  if (typeof window === "undefined") return <p>Loading...</p>;

  return (
    <div className="bg-white dark:bg-slate-700">
      <ReactQuill theme="bubble" value={value} readOnly />
    </div>
  );
};
