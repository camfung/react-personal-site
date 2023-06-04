import React from 'react';
import NavBar from "../../../global_components/NavBar";
import Footer from '../../../global_components/Footer';
import "../../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import RayCastingMain from './RayCastingMain';


function RayCasting() {

  return (
    <div class="wrapper">
      <NavBar></NavBar>
        <RayCastingMain></RayCastingMain>
      <Footer></Footer>
      
    </div>
  );
}

export default RayCasting;
