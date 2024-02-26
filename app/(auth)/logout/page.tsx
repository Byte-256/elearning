'use client';

import { auth } from "@/lib/fb.config";
import { signOut } from "firebase/auth";
import { redirect } from "next/navigation";

interface LogoutProps {}

const Logout = ({}: LogoutProps) => {
    signOut(auth).then((d) => {
        redirect("/")
    })
    return (
        <div>
            <h1>Logout</h1>
        </div>
    );
};

export default Logout;