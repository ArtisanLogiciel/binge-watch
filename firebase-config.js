// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// //import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
// };

// console.log(firebaseConfig)

// const app = initializeApp(firebaseConfig);
// //export const analytics = getAnalytics(app);


// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh2rW7AC9mk9WmX0TEmaDNSgFj4l5K_bA",
  authDomain: "my-example-app-42a0f.firebaseapp.com",
  projectId: "my-example-app-42a0f",
  storageBucket: "my-example-app-42a0f.appspot.com",
  messagingSenderId: "471004785448",
  appId: "1:471004785448:web:fefd8b1221bb5e22a27e1d",
  measurementId: "G-4L96H8B9BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);

