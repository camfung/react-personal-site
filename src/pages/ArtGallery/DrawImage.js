import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import GalleryCard from "./GalleryCard.js";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import Button from "../../global_components/Button.js"
import "./DrawImage.css"

const DrawImage = (props) => {

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

      const [isSquareOpen, setIsSquareOpen] = useState(false);

      const handleOpenSquare = () => {
        setIsSquareOpen(true);
      };
    
      const handleCloseSquare = () => {
        setIsSquareOpen(false);
      };
    
      const SquareComponent = () => {
        return (
          <>
            {isSquareOpen && (
              <div className="square">
                <ReactSketchCanvas 
                height='100'
                width='100'
                className='canvas'
                ></ReactSketchCanvas>
                <button className="close-button" onClick={handleCloseSquare}>
                  Close
                </button>
              </div>
            )}
          </>
        );
      };
    
      return (
        <div className="imagesWrapper">
          <Button text="Draw Image" onClick={handleOpenSquare} />
          <SquareComponent />
        </div>
      );
    };

export default DrawImage;
