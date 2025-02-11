/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
  UserCredential,
  Unsubscribe,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { Book } from "../../components/travel-books/travel-books.component";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "triptip-276ab.firebaseapp.com",
  projectId: "triptip-276ab",
  storageBucket: "triptip-276ab.appspot.com",
  messagingSenderId: "348914137960",
  appId: "1:348914137960:web:9066afdb2123adb3a774dd",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export type AdditionalInformation = {
  displayName?: string;
};

export const db = getFirestore();

export const database = getDatabase(
  firebaseapp,
  "https://triptip-276ab-default-rtdb.europe-west1.firebasedatabase.app",
);

export const auth = getAuth();

export const signInWithGooglePopup = async (): Promise<UserCredential> =>
  signInWithPopup(auth, googleProvider);

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation,
): Promise<QueryDocumentSnapshot<UserData> | void> => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<UserCredential | void> => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<UserCredential | void> => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async (): Promise<void> => await signOut(auth);

export const onAuthStateChangedListener = (
  callback: NextOrObserver<User>,
): Unsubscribe => onAuthStateChanged(auth, callback);

export const getCurrentUser = async (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject,
    );
  });
};

export const fetchBooks = (
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
): Unsubscribe => {
  const booksRef = ref(database, "books");

  const unsubscribe = onValue(
    booksRef,
    (snapshot) => {
      const data: Book[] = snapshot.val() || [];
      setBooks(data);
    },
    (error) => {
      setError(error.message);
    },
  );

  return unsubscribe;
};
