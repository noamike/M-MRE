// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCflRjx8kucKdNqurIn6tQSPX1Tv0dTjOM",
    authDomain: "mmre-a8466.firebaseapp.com",
    databaseURL: "https://mmre-a8466-default-rtdb.firebaseio.com",
    projectId: "mmre-a8466",
    storageBucket: "mmre-a8466.appspot.com",
    messagingSenderId: "1021596921495",
    appId: "1:1021596921495:web:77069ccb981b6d6aee03d2",
    measurementId: "G-1V9E3C7J55"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);