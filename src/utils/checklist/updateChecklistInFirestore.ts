import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.utils";

export const updateChecklistInFirestore = async (
  checklistId: string,
  updates: Partial<{ title: string; items: string[] }>,
): Promise<void> => {
  const user = auth.currentUser;
  if (user === null || user === undefined) return;

  const checklistRef = doc(db, "users", user.uid, "checklists", checklistId);
  await setDoc(checklistRef, updates, { merge: true });
};
