"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
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
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FormError } from "./form-error";
import Loading from "@/components/ui/Loading";

interface LoginProps {
  hlabel: string;
  bbtnlabel: string;
  bbtnhref: string;
}

const LoginForm = ({ hlabel, bbtnlabel, bbtnhref }: LoginProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const currentUser = auth.currentUser;
  const router = useRouter();
  if (currentUser) {
    router.replace("/");
  }

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setLoading(true);
    if (currentUser) {
      signOut(auth);
    }

    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        router.push("/");
      })
      .catch((e) => {
        if (e.code == "auth/invalid-credential") {
          setError("Invalid Email/Password");
          setLoading(false);
          z;
        }
      });
  };

  const forms = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div>
      {isLoading && <Loading />}
      <CardWrapper
        headerLabel={hlabel}
        backButtonLabel={bbtnlabel}
        backButtonHref={bbtnhref}
        showSocial
        error={setError}
      >
        <Form {...forms}>
          <form onSubmit={forms.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={forms.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="example@mail.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        disabled={isLoading}
                        placeholder="******"
                      />
                    </FormControl>
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal"
                    >
                      <Link href="/reset">Forgot Password?</Link>
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full bg-[#1d58f6]"
            >
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default LoginForm;
