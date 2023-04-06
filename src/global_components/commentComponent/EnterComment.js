import React from 'react';
import { useState } from 'react';
import "../backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

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

function Entermessage(props) {

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
  
    
  const [name, setName] = useState("");
  const [message, setmessage] = useState("");


    // Create a reference to the "board" collection
    const boardRef = firebase.firestore().collection(props.page);

    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      boardRef.add({
        name,
        message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setName("");
      setmessage("");
    };

  return (
    <div class="wrapper">
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
        onChange={(event) => setmessage(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Entermessage;
