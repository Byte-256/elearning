"use client";
import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";


type AuthContextType = {
  currentUser: User | null;
  isAdmin: boolean;
  loginGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: any }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Triggers when App is started
  useEffect(() => {
    if (!auth) return;

    return auth.onAuthStateChanged(async (user) => {
      // Triggers when user signs out
      if (!user) {
        setCurrentUser(null);
        setIsAdmin(false);
        // removeAuthToken();
        return;
      }

      const token = await user.getIdToken();
      if (user) {
        setCurrentUser(user);
        
        // Check if is admin
        setIsAdmin(user.uid == "iCPxBn1bpqRcoG5L6qzR5KkzZaI3");
      }
    });
  }, []);

  function loginGoogle(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!auth) {
        reject();
        return;
      }
      signInWithPopup(auth, new GoogleAuthProvider())
        .then((user) => {
          console.log("Signed in!");
          resolve();
        })
        .catch(() => {
          console.error("Something went wrong");
          reject();
        });
    });
  }

  function logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!auth) {
        reject();
        return;
      }
      auth
        .signOut()
        .then(() => {
          console.log("Signed out");
          resolve();
        })
        .catch(() => {
          console.error("Something went wrong");
          reject();
        });
    });
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAdmin,
        loginGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
