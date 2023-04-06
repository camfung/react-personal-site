import React from 'react';
import NavBar from "../../../global_components/NavBar";
import Footer from '../../../global_components/Footer';
import "../../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import SpotifyAuthMain from './SpotifyAuthMain';


function SpotifyAuth() {

  return (
    <div class="wrapper">
      <NavBar></NavBar>
        <SpotifyAuthMain></SpotifyAuthMain>
      <Footer></Footer>
      
    </div>
  );
}

export default SpotifyAuth;
