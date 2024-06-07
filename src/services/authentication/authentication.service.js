import { getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  signInWithEmailAndPassword,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";



// Initialize Firebase Authentication only if it hasn't been initialized yet
let auth = getAuth();

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
