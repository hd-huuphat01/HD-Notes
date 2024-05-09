// import { initializeApp } from "@firebase/app";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   GoogleAuthProvider,
// } from "@firebase/auth";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDfTgewzKJxsgYtyr_gatDYjZ1mWwQoUn4",
//   authDomain: "hd-notes.firebaseapp.com",
//   projectId: "hd-notes",
//   storageBucket: "hd-notes.appspot.com",
//   messagingSenderId: "878409843897",
//   appId: "1:878409843897:web:65df8961a16db2c9fc0768",
//   measurementId: "G-BPH2TGDJ39",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

// export const useLogIn = async (email: string, password: string) => {
//   try {
//     console.log("email", email);
//     console.log("password", password);
//     const user = await signInWithEmailAndPassword(auth, email, password);
//     console.log("User account signed in!");
//     console.log("user", user);
//     return user;
//   } catch (error: any) {
//     // console.log("error", error);

//     if (error.code === "auth/email-already-in-use") {
//       console.log("That email address is already in use!");
//     }
//     if (error.code === "auth/invalid-email") {
//       console.log("That email address is invalid!");
//     }
//     console.error(error);
//   }
// };

// export const useLogInWithGoogle = async (token: string) => {
//   try {
//     const googleCredential = GoogleAuthProvider.credential(token);

//     // return user;
//   } catch (error: any) {
//     // console.log("error", error);

//     if (error.code === "auth/email-already-in-use") {
//       console.log("That email address is already in use!");
//     }
//     if (error.code === "auth/invalid-email") {
//       console.log("That email address is invalid!");
//     }
//     console.error(error);
//   }
// };

// export const useCreateAccount = async (email: string, password: string) => {
//   try {
//     const user = await createUserWithEmailAndPassword(auth, email, password);
//     console.log("User account created & signed in!");
//     console.log("user", user);
//     return user;
//   } catch (error: any) {
//     // console.log("error", error);

//     if (error.code === "auth/email-already-in-use") {
//       console.log("That email address is already in use!");
//     }
//     if (error.code === "auth/invalid-email") {
//       console.log("That email address is invalid!");
//     }
//     console.error(error);
//   }
// };
