import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByXRc0lC2ouWfAsRMYpkEes9Rjqfu04ec",
  authDomain: "jamesweb-19c5a.firebaseapp.com",
  projectId: "jamesweb-19c5a",
  storageBucket: "jamesweb-19c5a.appspot.com",
  messagingSenderId: "387936654807",
  appId: "1:387936654807:web:fee9e132e6df4b51776792",
  measurementId: "G-M0LG88W8LP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };
