// utils/firebase/checklist.firestore.ts
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.utils";

interface Checklist {
  userId: string;
  id: string;
}

export const saveChecklistToFirestore = async (
  checklist: Checklist,
): Promise<void> => {
  const checklistRef = doc(
    db,
    "users",
    checklist.userId,
    "checklists",
    checklist.id,
  );
  await setDoc(checklistRef, checklist);
};
