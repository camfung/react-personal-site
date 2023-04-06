import React from 'react';
import NavBar from "../../../global_components/NavBar";
import Footer from '../../../global_components/Footer';
import "../../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import StaticWebAppTutorialMain from './StaticWebAppTutorialMain';
import CommentSection from '../../../global_components/commentComponent/CommentSection';


function StaticWebAppTutorial() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/");
    };

  return (
    <div class="wrapper">
      <NavBar></NavBar>
        <StaticWebAppTutorialMain></StaticWebAppTutorialMain>
        <CommentSection page="azureStaticWebApp"></CommentSection>
      <Footer></Footer>
      
    </div>
  );
}

export default StaticWebAppTutorial;
