"use client";

import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PasswordInput } from "@/components/ui/passwordinput";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useState } from "react";
import { user, auth } from "@/lib/fb.config";
import { signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { redirect } from "next/navigation";
import { FormError } from "./form-error";

interface LoginProps {
    hlabel: string;
    bbtnlabel: string;
    bbtnhref: string;
}

const LoginForm = ({
    hlabel,
    bbtnlabel,
    bbtnhref} : LoginProps) => {

  const [error, setError] = useState<string | undefined>("");


      const onSubmit = (values: z.infer<typeof LoginSchema>) => {
      setError("")
      if(user){
        signOut(auth)
      }
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          redirect("/");
        })
        .catch((e) => {
          if(e.code == "auth/invalid-credential"){
            setError("Invalid Email/Password")
          }
        });
    }


    const form = useForm<z.infer<typeof LoginSchema>>({
          resolver: zodResolver(LoginSchema),
          defaultValues: {
            email: "",
            password: "",
          },
    });

    return(
        <CardWrapper
        headerLabel={hlabel}
      backButtonLabel={bbtnlabel}
      backButtonHref={bbtnhref}
      showSocial
      error={setError}>
            <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={false}
                          placeholder="isaac@gmail.com"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          {...field}
                          disabled={false}
                          placeholder="******"
                        />
                      </FormControl>
                      <Button
                        size="sm"
                        variant="link"
                        asChild
                        className="px-0 font-normal"
                      >
                        <Link href="/reset">
                          Forgot Password?
                        </Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
          </div>
          <FormError message={error} />
          <Button
            disabled={false}
            type="submit"
            className="w-full bg-[#1d58f6]"
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
    )
};

export default LoginForm;