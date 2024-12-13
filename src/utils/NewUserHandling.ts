import { db } from "@/config/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

interface UserDetail {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  emailVerified?: boolean;
}

export const createNewUserProfile = async (userdetails: UserDetail) => {
  const { displayName, email, photoURL, emailVerified, uid } = userdetails;

  if (!uid || !userdetails) {
    throw new Error("Method requires uid and userdetails.");
  }

  try {
    await setDoc(doc(db, "users", uid), {
      uid: uid,
      name: displayName,
      email: email,
      photo: photoURL,
      emailVerified: emailVerified,
      description: "",
      banner: "",
      shortTitle: "",
      posts: 0,
      shares: 0,
      followers: 0,
      following: 0,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error setting user document: ", error);
    throw new Error("Failed to add user. Please try again later.");
  }
};
