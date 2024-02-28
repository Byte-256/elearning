"use client";

import ResetForm from "@/components/auth/reset-form";
import LoginForm from "@/components/login-form";

interface ResetPasswordProps {}

const ResetPassword = ({}: ResetPasswordProps) => {
  return (
    <ResetForm
      hlabel="Reset Form"
      bbtnlabel="Remember Password? login"
      bbtnhref="/login"
    />
  );
};

export default ResetPassword;
