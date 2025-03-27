"use client";

import { addToast } from "@heroui/react";

import { UploadDropzone } from "@/utils/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";

interface FileUploadProps {
  onChange: (url?: string, originalFilename?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        console.log("onClientUploadComplete res:", res);
        onChange(res?.[0].ufsUrl, res?.[0].name);
      }}
      onUploadError={(error: Error) => {
        addToast({
          title: "Error",
          description: error.message,
          color: "warning",
        });
      }}
    />
  );
};
