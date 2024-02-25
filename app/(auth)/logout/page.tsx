'use client';

import { auth } from "@/lib/fb.config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

interface LogoutProps {}

const Logout = ({}: LogoutProps) => {
    const router = useRouter();
    signOut(auth).then((d) => {
        router.push("/")
    })
    return (
        <div>
            <h1>Logout</h1>
        </div>
    );
};

export default Logout;