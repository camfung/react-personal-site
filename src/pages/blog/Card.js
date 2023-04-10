import React from 'react';
import "../../global_components/backgroundcolors.css"
import Button from "../../global_components/Button";
import { useNavigate } from "react-router-dom";
import "./Card.css"

function Card(props) {
  const navigate = useNavigate();

  const handleButtonClick = (pageName) => {
    console.log("this")
      navigate(`/${pageName}`);
      console.log(pageName)
    };
    
  return (
    <div className="card">
      <img src={props.image} class="card-image" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <div class="rise bg_slider nav-button" onClick={() => handleButtonClick(props.post)}><p class="center">See Post</p></div>
      </div>
    </div>
  );
}

export default Card;
