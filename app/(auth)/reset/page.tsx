import ResetForm from "@/components/auth/reset-form";

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
