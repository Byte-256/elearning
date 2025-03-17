import LoginForm from "@/components/auth/login-form";

const Login = () => {
  return (
    <LoginForm
      hlabel="Welcome back"
      bbtnlabel="Don't have an Account?"
      bbtnhref="/register"
    />
  );
};

export default Login;
