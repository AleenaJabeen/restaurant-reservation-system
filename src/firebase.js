import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCNw5f8-0Gw6eVwtYvuF5eEZfxZv4MXEUM",
    authDomain: "reservation-system-e520f.firebaseapp.com",
    projectId: "reservation-system-e520f",
    storageBucket: "reservation-system-e520f.appspot.com",
    messagingSenderId: "779116049708",
    appId: "1:779116049708:web:5013fb9056b46e91a46889",
    measurementId: "G-XYK6NTEN89",
    databaseUrl:"https://reservation-system-e520f-default-rtdb.firebaseio.com/"
  };

  export const app=initializeApp(firebaseConfig);