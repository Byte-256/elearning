"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/passwordinput";
import Link from "next/link";
import { useState } from "react";
import { auth } from "@/lib/fb.config";
import '../../colors.css';
import { useRouter } from "next/navigation";
import { UserCredential, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

export default function Login() {

  const [usrnm, setUsrnm] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  function userLogin(data: FormData) {
    
    signInWithEmailAndPassword(auth, usrnm, pass)
    .then((userCredential: UserCredential) => {
      console.log(userCredential.user);
      console.log(userCredential.user.uid);
      console.log(userCredential.user.email);
      router.push("/") 
    })
    .catch((e: FirebaseError) => {
      console.log("There is something going unexpectedly so don't use it");
      console.log(e.message);
      console.error(e.code);                 
    });
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden loginbody">
      <div className="w-full p-6 primary-50 rounded-3xl shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">Login</h1>
        {/* Login Form */}
        
        <form className="mt-6" action={userLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800" >
              Email
            </label>

            <Input
              type="email"
              value={usrnm}
              name="usr"
              onChange={(e) => setUsrnm(e.target.value)}
              // className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />

          </div>
          {/* Password Input */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <PasswordInput 
              name= "passwd"
              id="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)} 
              autoComplete="new-password" 
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {/* Forgot Password Block */}
          <Link
            href="/forget"
            className="text-xs text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
          {/* Sigin in Button */}
          <div className="mt-2">
            <Button 
              onClick={ (e)=> console.log("Form btn clicked...")}
              className="primary-500 hover:primary-500 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md" type="submit">
              Sign In
            </Button>
          </div>
        </form>

        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 primary-50">Or</div>
        </div>
        {/* SSO Button */}
        <div className="flex mt-4 gap-x-2">
          <Button
            type="button"
            className="primary-500 hover:primary-500 flex items-center justify-center w-full p-2 border rounded-md focus:ring-2 focus:ring-offset-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </Button>
          
        </div>

        <p className="mt-4 text-sm text-center text-gray-700">
          Already have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
