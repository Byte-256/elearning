// pages/admin/AddCourse.tsx
"use client";

import Link from "next/link";

import React, { useContext, useState } from "react";
import AddCourseForm from "./addCourseForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { BookPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/AuthProvider";

const AddCourse: React.FC = () => {
  const user = useAuth()?.currentUser;
  const isAdmin: boolean = user?.email == "admin@isaac.in";
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="fixed bottom-0 right-0 m-4">
          <BookPlus className="text-black-500 text-2xl" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Course</DialogTitle>
        </DialogHeader>
        {isAdmin ? <AddCourseForm /> : <h4>You&#39re not a admin</h4>}
      </DialogContent>
    </Dialog>
  );
};

export default AddCourse;
