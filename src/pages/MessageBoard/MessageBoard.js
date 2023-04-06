import React from 'react';
import NavBar from "../../global_components/NavBar";
import Footer from '../../global_components/Footer';
import "../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import CommentSection from "../../global_components/commentComponent/CommentSection.js";


function MessageBoard() {

  return (
    <div class="wrapper">
      <NavBar></NavBar>
      <CommentSection page="MessageBoard">  </CommentSection>
      <Footer></Footer>
    </div>
  );
}

export default MessageBoard;
