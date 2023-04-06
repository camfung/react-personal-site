import React from 'react';
import NavBar from "../../../global_components/NavBar";
import Footer from '../../../global_components/Footer';
import "../../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import ComunityCanvasMain from './ComunityCanvasMain';


function ComunityCanvas() {

  return (
    <div class="wrapper">
      <NavBar></NavBar>
        <ComunityCanvasMain></ComunityCanvasMain>
      <Footer></Footer>
      
    </div>
  );
}

export default ComunityCanvas;
