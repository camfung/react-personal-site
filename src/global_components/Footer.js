import React from 'react'
import "./Footer.css"


export default function Footer()  {
    return (
        <div class="footer medium-blue top-depth">
            <div class="item">
                <p class="">Cameron Fung</p>
            </div>
            <div class="footer-center-content">
                <div class="item">
                    <p>About</p>
                    <a class="list-item">Education</a>
                    <a class="list-item">Interests</a>
                    <a class="list-item">Technologies</a>
                </div>
                <div class="item ">
                    <p>Projects</p>
                    <a href="https://github.com/camfung/Fractal-generator" target="_blank" class="list-item">Fractal Generator</a>
                    <a href="https://github.com/camfung/1800_202210_BBY009" class="list-item" target="_blank">Playlist Cover Generator</a>
                    <a href="https://github.com/camfung/rubiks_cube" class="list-item" target="_blank">Rubiks Cube Solver</a>
                </div>   
                <div class="item" id="socials">
                    <p>Socials</p>
                    <a target="_blank" href="https://www.linkedin.com/in/cameron-fung-b1b886257/" class="list-item">LinkedIn</a>
                    <a target="_blank" href="https://github.com/camfung/" class="list-item">GitHub</a>
                    <a target="_blank" href="https://www.instagram.com/cam_fung/" class="list-item">Instagram</a>
                </div>
            </div>
            <div id="contact" class="item">
                <p id="contact-p">Contact Me</p>
                <form>
                    <input type="text" placeholder='First Name' class=""/>
                    <input type="text" placeholder='Last Name' class=""/>
                    <input type="email" placeholder='Email'/> 
                    <textarea placeholder='Message'></textarea>
                    <input type="submit" class="rise nav-button mellow-yellow bg_slider-yellow-lightblue depth"/>
                </form>
            </div>
        </div>
    )
} 
