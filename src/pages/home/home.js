import React from 'react';
import NavBar from "../../global_components/NavBar";
import Hero from './Hero';
import Footer from '../../global_components/Footer';
import "../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";


function Home() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/app");
    };

  return (
    <div class="wrapper">
      <NavBar></NavBar>
      <Hero></Hero>
      <Footer></Footer>
      {/* <button onClick={handleButtonClick}>Go to App Page</button> */}
    </div>
  );
}

export default Home;
