import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();

    const handleButtonClick = (pageName) => {
        navigate(`/${pageName}`);
      };
      
    return (
        <div class="header depth medium-blue ">
            <nav>
                
                <p class="bold big-text home rise" onClick={() => handleButtonClick("")}>Cameron Fung</p>
                <div class="rise bg_slider nav-button"><p class="center">Projects</p></div>
                <div class="rise bg_slider nav-button" ><p class="center">About</p></div>
                <div class="rise bg_slider nav-button" ><p class="center">Contact</p></div>
                <div class="rise bg_slider nav-button" onClick={() => handleButtonClick("blog")}><p class="center">Blog</p></div>
                <div class="rise bg_slider nav-button" onClick={() => handleButtonClick("message")}><p class="center">Message Board</p></div>
            </nav>

            <div id="contact-me" class="rise nav-button mellow-yellow bg_slider-yellow-lightblue depth" onClick={() => handleButtonClick("resume")}><p>Resume</p></div>

        </div>
    )
}

export default NavBar;
