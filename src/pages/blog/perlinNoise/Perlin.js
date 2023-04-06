import React from 'react';
import NavBar from "../../../global_components/NavBar";
import Footer from '../../../global_components/Footer';
import "../../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import PerlinMain from './PerlinMain';
import CommentSection from '../../../global_components/commentComponent/CommentSection';


function Perlin() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/");
    };

  return (
    <div class="wrapper">
      <NavBar></NavBar>
        <PerlinMain></PerlinMain>
        <CommentSection page="Perlin"></CommentSection>
      <Footer></Footer>
      
    </div>
  );
}

export default Perlin;
