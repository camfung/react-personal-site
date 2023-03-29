import React from 'react';
import "../../global_components/backgroundcolors.css"
import Button from "../../global_components/Button";
import { useNavigate } from "react-router-dom";
import "./Card.css"

function Card() {

  return (
    <div class="card">
      <img src="https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Button text="placeholder"></Button>
      </div>
    </div>
  );
}

export default Card;
