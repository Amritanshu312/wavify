"use client";
import { createContext, useEffect, useState, useMemo, useContext } from "react";
// import { doc, getDoc } from "firebase/firestore";
import { auth } from "@/config/firebase";


export const userContext = createContext();

export const UserInfoState = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user && user.uid) {
        setUserInfo(user);
      } else {
        setUserInfo(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({
    userInfo,
    loading: userInfo === null,
    isUserLoggedIn: Boolean(userInfo),
  }), [userInfo]);

  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  );
};


export function useUserInfoContext() {
  return useContext(userContext);
}