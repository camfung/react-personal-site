import React, { useEffect, useRef } from "react";
import * as p5 from "p5";
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

const CanvasViewer = ({ canvasId }) => {

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


  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let unsubscribe = null;

    firebase.firestore().collection("canvaii").doc(canvasId).get().then(doc => {
      const canvasData = doc.data();

      // Set up the canvas size
      canvas.width = canvasData.width;
      canvas.height = canvasData.height;

      // Loop through all the pixels and set their colors
      unsubscribe = firebase.firestore().collection(`canvaii/${canvasId}/pixels`).onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          const pixelData = doc.data();
          const { x, y, color } = pixelData;
          context.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
          context.fillRect(x, y, 1, 1);
        });
      });
    });

    return () => {
      unsubscribe && unsubscribe();
    };
  }, [canvasId]);

  return <canvas ref={canvasRef} />;
};

export default CanvasViewer;
