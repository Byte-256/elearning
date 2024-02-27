import { auth } from '@/lib/fb.config';
import { User } from '@firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'

export type CustomizationProps = {
  user: User | null | undefined;
};

type ConfigProviderProps = {
  children: React.ReactNode;
};
const initialState: CustomizationProps = {
  user: null,
};

const AuthContext = createContext(initialState);

export function AuthProvider({ children }: ConfigProviderProps) {
  const [user, setUser] = useState<User | null>()


  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => { setUser(userCredential) });
  }, [user]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )


}