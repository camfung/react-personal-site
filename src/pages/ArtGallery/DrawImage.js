import React, { useState, useEffect, useRef } from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Button from "../../global_components/Button.jsx"
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
        handleCloseSquare={handleCloseSquare} />
    </div>
  );
};

export default DrawImage;
