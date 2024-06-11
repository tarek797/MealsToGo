import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJMYplvc8lGotrFVJFxiwANU05W8XIHJc",
  authDomain: "mealstogo-c694f.firebaseapp.com",
  projectId: "mealstogo-c694f",
  storageBucket: "mealstogo-c694f.appspot.com",
  messagingSenderId: "530908130153",
  appId: "1:530908130153:web:f2e1818b231cd8c1226bf8",
};

// Initialize Firebase app only if it hasn't been initialized yet
export let FIREBASE_APP;
if (!getApps().length) {
  FIREBASE_APP = initializeApp(firebaseConfig);
} else {
  FIREBASE_APP = getApps()[0];
}

// Initialize Firebase Authentication only if it hasn't been initialized yet
export let FIREBASE_AUTH;
try {
  FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} catch (e) {
  if (e.code === "auth/already-initialized") {
    FIREBASE_AUTH = getAuth();
  } else {
    throw e;
  }
}
