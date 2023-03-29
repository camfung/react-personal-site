import React from 'react';
import NavBar from "../../global_components/NavBar";
import Footer from '../../global_components/Footer';
import "../../global_components/backgroundcolors.css"
import LeaveComment from "./LeaveComment";
import DisplayComments from "./DisplayComments";
import { useNavigate } from "react-router-dom";


function MessageBoard() {

  return (
    <div class="wrapper">
      <NavBar></NavBar>
      <DisplayComments></DisplayComments>
      <LeaveComment></LeaveComment>
      <Footer></Footer>
    </div>
  );
}

export default MessageBoard;
