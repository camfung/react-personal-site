import React from 'react';
import NavBar from "../../../global_components/NavBar";
import Footer from '../../../global_components/Footer';
import "../../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import Assignment3Main from './Assignment3Main';
import "../blogPosts.css";

function Assignment3() {

  return (
    <div class="wrapper">
      <NavBar></NavBar>
        <Assignment3Main></Assignment3Main>
      <Footer></Footer>
      
    </div>
  );
}

export default Assignment3;
