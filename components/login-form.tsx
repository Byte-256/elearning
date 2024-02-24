'use client';
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
import { BaseSyntheticEvent } from "react";
import { user, auth } from "@/lib/fb.config";
import { User, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";

interface LoginProps {
    hlabel: string; 
    bbtnlabel: string;
    bbtnhref: string;
}

const LoginForm = ({
    hlabel, 
    bbtnlabel, 
    bbtnhref} : LoginProps) => {

      const router = useRouter();

      const onSubmit = (values: z.infer<typeof LoginSchema>) => {
      if(user){
        signOut(auth)
      }
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          router.push("/");
        })
        .catch((e: FirebaseError) => {
          throw new Error(`code : ${e.code}\nmessage : ${e.message}\ncause: ${e.cause}`);
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
      showSocial>
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
                        <Link href="/auth/reset">
                          Forgot Password?
                        </Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
          </div>
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