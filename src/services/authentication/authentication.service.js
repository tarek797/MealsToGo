import { getApps, initializeApp } from "firebase/app";
import {
  initializeAuth,
  signInWithEmailAndPassword,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_AUTH } from "../../../FireBaseConfig";

// Initialize Firebase Authentication only if it hasn't been initialized yet

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
