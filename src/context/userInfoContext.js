"use client";
import { createContext, useEffect, useState, useMemo, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase";


export const userContext = createContext();

export const UserInfoState = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user?.uid) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserInfo(docSnap.data());
            setLoading(false)
          } else {
            console.warn("No user document found for UID:", user.uid);
            setUserInfo(null);
            setLoading(false)
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
          setUserInfo(null);
        }
      } else {
        setUserInfo(null);
        setLoading(false)
      }
    });

    return () => unsubscribe();
  }, []);


  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      userInfo,
      loading,
      isUserLoggedIn: Boolean(userInfo),
    }),
    [userInfo, loading]
  );

  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  );
};


export function useUserInfoContext() {
  return useContext(userContext);
}