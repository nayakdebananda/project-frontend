
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRqIeYGCB9-QiOvQZrkU6HrlrRQGAMUAE",
  authDomain: "mock-api-1634d.firebaseapp.com",
  projectId: "mock-api-1634d",
  storageBucket: "mock-api-1634d.appspot.com",
  messagingSenderId: "763789399851",
  appId: "1:763789399851:web:b648fd99affde8c9a4976e"
};

initializeApp(firebaseConfig);



export const auth = getAuth()



