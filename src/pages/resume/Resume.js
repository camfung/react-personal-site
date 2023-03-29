import React from 'react';
import NavBar from "../../global_components/NavBar";
import Footer from '../../global_components/Footer';
import "../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import "./resume.css"

function Resume() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/app");
    };


    return (
        <div class="wrapper">
            <NavBar></NavBar>
            <iframe width="760px" height="500px" src="https://sway.office.com/s/9prGfv4GyT8k1ROG/embed" frameborder="0" marginheight="0" marginwidth="0" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" allowfullscreen mozallowfullscreen msallowfullscreen webkitallowfullscreen></iframe>
            <Footer></Footer>
            {/* <button onClick={handleButtonClick}>Go to App Page</button> */}
        </div>
        );


}

export default Resume;


