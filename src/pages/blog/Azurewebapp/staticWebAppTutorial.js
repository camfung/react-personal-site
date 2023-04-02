import React from 'react';
import NavBar from "../../../global_components/NavBar";
import Footer from '../../../global_components/Footer';
import "../../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import StaticWebAppTutorialMain from './StaticWebAppTutorialMain';


function StaticWebAppTutorial() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/");
    };

  return (
    <div class="wrapper">
      <NavBar></NavBar>
        <StaticWebAppTutorialMain></StaticWebAppTutorialMain>
      <Footer></Footer>
      
    </div>
  );
}

export default StaticWebAppTutorial;
