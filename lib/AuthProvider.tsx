"use client";

import * as React from "react";
import {
  User as FirebaseUser,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { auth } from "./fb.config";
import Loading from "@/components/ui/Loading";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <AuthContext.Provider
        value={{
          user,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
};
