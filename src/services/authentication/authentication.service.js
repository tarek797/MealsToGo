import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, "tarek@gmail.com", "pass123@");
