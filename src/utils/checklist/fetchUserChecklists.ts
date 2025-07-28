import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.utils";

export const fetchUserChecklists = async (userId: string): Promise<any[]> => {
  const ref = collection(db, "users", userId, "checklists");
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((doc) => doc.data());
};
