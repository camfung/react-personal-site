import React from 'react';
import { useState } from 'react';
import "../backgroundcolors.css"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function Entermessage(props) {
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
