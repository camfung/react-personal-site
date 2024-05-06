import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import Comment from './Comment';
import "./displayComments.css"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import CommentCounter from './CommentCounter';

const MessageBoard = (props) => {
  const [messages, setMessages] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const firestore = firebase.firestore();
    const messagesCollection = firestore.collection(props.page);

    const unsubscribe = messagesCollection.onSnapshot((snapshot) => {
      const messagesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesList);
      setCommentCount(messagesList.length);
    });
    
    return () => unsubscribe();
  }, []);

  return (
    <div class="messagesWrapper">
      <CommentCounter count={commentCount} page={props.page}></CommentCounter>
      {messages.map((msg) => (
        <Comment className="comment"
          userName={msg.name}
          message={msg.message}
          // timestamp={msg.timestamp}
        />
      ))}
    </div>
  );
};

export default MessageBoard;
