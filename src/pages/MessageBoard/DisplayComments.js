import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import Comment from './Comment';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const firestore = firebase.firestore();
    const messagesCollection = firestore.collection('MessageBoard');

    const unsubscribe = messagesCollection.onSnapshot((snapshot) => {
      const messagesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {messages.map((msg) => (
        <Comment
          userName={msg.name}
          message={msg.message}
          // timestamp={msg.timestamp}
        />
      ))}
    </div>
  );
};

export default MessageBoard;
