import React, { useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Switch } from "@mui/material";
import forwardImage from './images/forward.png';
import undoImage from './images/undo.png';


const SquareComponent = ({ isSquareOpen, handleCloseSquare }) => {

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

const [name, setNameValue] = useState('');
const [penColor, setColor] = useState('black');
const [width, setWidth] = useState(4);
const [description, setDescription] = useState('');
const handleInputChangeName = (event) => {
    setNameValue(event.target.value);
};
const handleInputChangeDescription = (event) => {
    setDescription(event.target.value);
};
    const canvasRef = useRef(null);
    const clearCanvas = () => {
        canvasRef.current.clearCanvas();
        console.log('Canvas cleared!');        
    };
    const undo = () => {
        canvasRef.current.undo();
      };

      const redo = () => {
        canvasRef.current.redo();
      };
    const handleSizeChange = (event) => {
        const newSize = parseInt(event.target.value);
        setWidth(newSize);
      };
      const [isPenEnabled, setIsPenEnabled] = useState(false);

      const handleToggleEraser = (event) => {
        setIsPenEnabled(!isPenEnabled);
        canvasRef.current.eraseMode(!isPenEnabled);
      };
      const handleColorChange = (event) => {
        const newColor = event.target.value;
        setColor(newColor);
      };

    const handleSave = async (event) => {
        event.preventDefault();
        
        try {
        const data = await canvasRef.current.exportImage('png');
        const boardRef = firebase.firestore().collection('ArtGallery');
        
        await boardRef.add({
            name,
            data,
            description,
        });
        // Clear the canvas
        canvasRef.current.clearCanvas();
        console.log('Data saved successfully!');
        } catch (error) {
        console.log('Error saving data:', error);
        }
    };

    return (
    <>
        {isSquareOpen && (
        <div className="square">
            <button className="close-button" onClick={handleCloseSquare}>
            X
            </button>
            <div className="canvas-wrapper">
                <ReactSketchCanvas
                ref={canvasRef}
                height={"100%"}
                width={"100%"}
                strokeWidth={width}
                eraserWidth={width}
                strokeColor={penColor}
                className="canvas"

                ></ReactSketchCanvas>
                <div className="resize-handle"></div>
            </div>
            <div className="buttons-wrapper">
                <button className="undo-button do-button" onClick={undo}></button>
                <button className="clear-button" onClick={clearCanvas}>Clear</button>
                <button className="redo-button do-button" onClick={redo}></button>
            <div className="erase-toggle">
                <p>Erase</p>
                <Switch
                    onChange={handleToggleEraser}
                    checked={isPenEnabled}
                />
            </div>
            </div>
            <div>
                <input type="color" 
                onChange={handleColorChange}
                className="color-input" />
                <input type="range"
                    min={1}
                    max={100}
                    step={1}
                    onChange={handleSizeChange} 
                    className="size-input" />
            </div>
            <input type="text" className="name-input" 
            placeholder='Name'
            onChange={handleInputChangeName}
            />
            <input type="text" className="description-input" 
            placeholder='Description'
            onChange={handleInputChangeDescription}
            />
            <button className="save-button" onClick={handleSave}>Save</button>
        </div>
        )}
    </>
    );
};

export default SquareComponent;