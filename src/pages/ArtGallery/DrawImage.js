import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import GalleryCard from "./GalleryCard.js";
import Draggable from 'react-draggable';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import Button from "../../global_components/Button.js"
import SquareComponent from "./SquareComponent.js"
import "./DrawImage.css"

const DrawImage = (props) => {
      const [isSquareOpen, setIsSquareOpen] = useState(false);
      
      const handleOpenSquare = () => {
        setIsSquareOpen(true);
      };
    
      const handleCloseSquare = () => {
        setIsSquareOpen(false);
      };
          
      return (
        <div className="imagesWrapper">
          <Button text="Draw Image" onClick={handleOpenSquare} />
          <SquareComponent         
            isSquareOpen={isSquareOpen}
            handleCloseSquare={handleCloseSquare}/>
        </div>
      );
    };

export default DrawImage;
