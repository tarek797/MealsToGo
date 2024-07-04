import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../../../FireBaseConfig";

// Initialize Firebase Authentication only if it hasn't been initialized yet

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(FIREBASE_AUTH, email, password);

export const regeiterRequest = (email, password, repeatedPassword) =>
  createUserWithEmailAndPassword(
    FIREBASE_AUTH,
    email,
    password,
    repeatedPassword
  );
