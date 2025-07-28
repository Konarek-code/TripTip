import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.utils";

import { setSelectedCountriesFromFirestore } from "../../store/countrieslist/countries.reducer";

import { AppDispatch } from "../../store/store";

export const saveSelectedCountriesToFirestore = async (
  userId: string,
  selectedCountriesByRegion: Record<string, string[]>,
): Promise<void> => {
  try {
    const userDocRef = doc(db, "userCountries", userId);
    await setDoc(userDocRef, { selectedCountriesByRegion }, { merge: true });
  } catch (error) {
    console.error("Error saving selected countries:", error);
  }
};
export const fetchUserSelectedCountriesByRegion = async (
  userId: string,
): Promise<Record<string, string[]>> => {
  if (userId == null || userId === "") return {};

  const userDocRef = doc(db, "userCountries", userId);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    return {};
  }

  return userDocSnap.data().selectedCountriesByRegion ?? {};
};

export const InitCountriesFromFirestore = async (
  userId: string,
  dispatch: AppDispatch,
): Promise<void> => {
  if (userId == null || userId === "") return;

  try {
    const data = await fetchUserSelectedCountriesByRegion(userId);
    dispatch(setSelectedCountriesFromFirestore(data));
  } catch (error) {
    console.error("Error initializing countries from Firestore:", error);
  }
};
