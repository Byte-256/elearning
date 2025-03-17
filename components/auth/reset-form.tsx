"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ResetSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import {  sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

interface ResetProps {
  hlabel: string;
  bbtnlabel: string;
  bbtnhref: string;
}

const ResetForm = ({ hlabel, bbtnlabel, bbtnhref }: ResetProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, setPending] = useState<boolean>(false);
  const [Message, setMessage] = useState<string>("");

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setPending(true);
    await sendPasswordResetEmail(auth, values.email)
      .then(() => {
        setMessage("Check your inbox");
        setPending(false);
        setTimeout(() => router.replace("/login"), 5000);
      })
      .catch((e) => {
        setError(e);
        setPending(false);
      });
  };

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <CardWrapper
      headerLabel={hlabel}
      backButtonLabel={bbtnlabel}
      backButtonHref={bbtnhref}
      showSocial={false}
      error={setError}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      disabled={isPending}
                      placeholder="example@mail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={Message} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full bg-[#1d58f6]"
          >
            Reset
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ResetForm;
