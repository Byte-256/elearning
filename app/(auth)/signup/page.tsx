'use client';

import { RegisterForm } from "@/components/auth/register-form";


const Page = () => {
return(
    <RegisterForm 
    hlabel="Welcome"
    bbtnlabel="Already have an Account?"
    bbtnhref="/login"
    />
)  
};

export default Page;
