import React, { useState } from 'react';
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import useScreenSize from '../hooks/useScreenSize';
import { ScreenSize } from '../enums/screenSizes';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();

    const handleButtonClick = (pageName) => {
        navigate(`/${pageName}`);
    };

    const screenSize = useScreenSize()

    return (
        <div class="header depth medium-blue">
            <nav>
                <p class="bold big-text home rise" onClick={() => handleButtonClick("")}>Cameron Fung</p>
                {screenSize == ScreenSize.LARGE && (
                    <>
                        <div class="rise bg_slider nav-button"><p class="center">Projects</p></div>
                        <div class="rise bg_slider nav-button" ><p class="center">About</p></div>
                        <div class="rise bg_slider nav-button" ><p class="center">Contact</p></div>
                        <div class="rise bg_slider nav-button" onClick={() => handleButtonClick("blog")}><p class="center">Blog</p></div>
                        <div class="rise bg_slider nav-button" onClick={() => handleButtonClick("message")}><p class="center">Message Board</p></div>
                        <div class="rise bg_slider nav-button" onClick={() => handleButtonClick("draw")}><p class="center">Art Gallery</p></div>
                        <div class="rise bg_slider nav-button" onClick={() => handleButtonClick("streaming")}><p class="center">Streaming</p></div>
                    </>
                )}
            </nav>

            <div id="contact-me" class="rise nav-button mellow-yellow bg_slider-yellow-lightblue depth" onClick={() => handleButtonClick("resume")}><p>Resume</p></div>

        </div>
    )
}

export default NavBar;
