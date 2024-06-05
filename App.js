import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDJMYplvc8lGotrFVJFxiwANU05W8XIHJc",
  authDomain: "mealstogo-c694f.firebaseapp.com",
  projectId: "mealstogo-c694f",
  storageBucket: "mealstogo-c694f.appspot.com",
  messagingSenderId: "530908130153",
  appId: "1:530908130153:web:f2e1818b231cd8c1226bf8",
};

// Initialize Firebase app only if it hasn't been initialized yet
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase Authentication only if it hasn't been initialized yet
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} catch (e) {
  if (e.code === "auth/already-initialized") {
    auth = getAuth();
  } else {
    throw e;
  }
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    signInWithEmailAndPassword(auth, "tarek@gmail.com", "pass123@")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;
  if (!isAuthenticated) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
