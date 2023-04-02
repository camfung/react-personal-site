import React from 'react';
import NavBar from "../../../global_components/NavBar";
import Footer from '../../../global_components/Footer';
import "../../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import InternshipMain from './InternshipMain';


function Internship() {

  return (
    <div class="wrapper">
      <NavBar></NavBar>
        <InternshipMain></InternshipMain>
      <Footer></Footer>
      
    </div>
  );
}

export default Internship;
