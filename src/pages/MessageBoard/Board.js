// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { useState } from "react";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj6DrQ2PBUxaLlfpx_ITozHLu0k8rZRgA",
  authDomain: "react-personal-site-c208a.firebaseapp.com",
  projectId: "react-personal-site-c208a",
  storageBucket: "react-personal-site-c208a.appspot.com",
  messagingSenderId: "194279827415",
  appId: "1:194279827415:web:f68b30229f1e62081b0d92",
  measurementId: "G-KRV7NT3MC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const Board = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCj6DrQ2PBUxaLlfpx_ITozHLu0k8rZRgA",
        authDomain: "react-personal-site-c208a.firebaseapp.com",
        projectId: "react-personal-site-c208a",
        storageBucket: "react-personal-site-c208a.appspot.com",
        messagingSenderId: "194279827415",
        appId: "1:194279827415:web:f68b30229f1e62081b0d92",
        measurementId: "G-KRV7NT3MC6"
    });
  }

  // Create a reference to the "board" collection
  const boardRef = firebase.firestore().collection("MessageBoard");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    boardRef.add({
      name,
      message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Board;
