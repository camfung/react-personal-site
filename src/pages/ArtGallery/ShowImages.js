import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import GalleryCard from "./GalleryCard.js";
import "./ShowImages.css"

const ShowImages = (props) => {

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

  const [images, setimages] = useState([]);
  const getImage = (data) => {
    var image = new Image();
    image.src = data
    return image;
}
  useEffect(() => {
    const firestore = firebase.firestore();
    const imagesCollection = firestore.collection("ArtGallery");

    const unsubscribe = imagesCollection.onSnapshot((snapshot) => {
      const imagesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setimages(imagesList);
    });
    
    return () => unsubscribe();
  }, []);

  return (
    <div class="imagesWrapper">
      {images.map((msg) => (
        <GalleryCard className="comment"
        artistName={msg.name}
        imageSrc={msg.data}
        description={msg.description}
          // timestamp={msg.timestamp}
        />
      ))}
    </div>
  );
};

export default ShowImages;
