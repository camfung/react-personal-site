import React from 'react';
import NavBar from "../../global_components/NavBar";
import Footer from '../../global_components/Footer';
import "../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import GalleryCard from "./GalleryCard.js";
import ShowImages from './ShowImages';
import DrawImage from './DrawImage';
function MessageBoard() {

  return (
    <div class="wrapper">
      <NavBar></NavBar>
      <DrawImage> </DrawImage>
      <ShowImages></ShowImages>
      <Footer></Footer>
    </div>
  );
}

export default MessageBoard;
