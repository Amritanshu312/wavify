"use client";
import { createContext, useEffect, useState, useMemo, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import CryptoJS from "crypto-js";

export const userContext = createContext();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY

console.log(ENCRYPTION_KEY);

const encryptData = (data) => {
  try {
    return CryptoJS.AES.encrypt(data, ENCRYPTION_KEY).toString();
  } catch (error) {
    console.error("Error encrypting data:", error);
    return null;
  }
};

const decryptData = (encryptedData) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Error decrypting data:", error);
    return null;
  }
};

export const UserInfoState = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)


  const fetchUserData = async (uid) => {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserInfo(userData);

        const encryptedData = encryptData(JSON.stringify(userData));
        localStorage.setItem("userInfo", encryptedData);
      } else {
        console.warn("No user document found for UID:", uid);
        setUserInfo(null);
        localStorage.removeItem("userInfo");
      }
    } catch (error) {
      console.error("Error fetching user document:", error);
      setUserInfo(null);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const encryptedData = localStorage.getItem("userInfo");
    if (encryptedData) {
      const decryptedData = decryptData(encryptedData);
      if (decryptedData) {
        setUserInfo(JSON.parse(decryptedData));
        setIsUserLoggedIn(true)
        setLoading(false);
      }
    }

    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user?.uid) {
        setIsUserLoggedIn(true)
        await fetchUserData(user.uid);
      } else {
        setUserInfo(null);
        setLoading(false);
        setIsUserLoggedIn(false)
        localStorage.removeItem("userInfo");
      }
    });

    return () => unsubscribe();
  }, []);

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      userInfo,
      loading,
      isUserLoggedIn
    }),
    [userInfo, loading, isUserLoggedIn]
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
