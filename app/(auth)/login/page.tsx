'use client';

import LoginForm from "@/components/login-form";

const Login = () => {

  return(
    <LoginForm 
      hlabel="Welcome back"
      bbtnlabel="Don't have an Account?"
      bbtnhref="/signup"
      />
  );

}

export default Login;   