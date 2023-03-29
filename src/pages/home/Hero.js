import React from 'react'
import "./Hero.css"
import "../../global_components/backgroundcolors.css"
export default function Hero() {
    return (
      <div class="hero-wrapper">

        <div class="hero-side hero-right">
            <div class="line"></div>
            
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="space rise feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="space rise feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="space rise feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>



        </div>

        <main class="hero-main">

            <div>   
    
                <p class="white-text">Hi, my name is</p>
                <h1 class="extremely-large-text white-text"> <span class="mellow-yellow-text"> Cameron Fung. </span></h1>
                <h1 class="extremely-large-text white-text"> I like to build cool things on the web </h1>
                <p class="white-text">I'm a Software Engineering student and love to learn and create well designed software.</p>
                <p class="white-text">I currently study at British Columbia Institute of Technology</p>

                <div id="" class="rise nav-button mellow-yellow bg_slider-yellow-lightblue depth"><p>Resume</p></div>

            </div>

            {/* <img src={fractal}/> */}
        </main>

        <div class="hero-side hero-right" >
            <p class="rise hero-email-right">CameronFuung@gmail.com</p>
            <div class="line"></div>
        </div>

      </div>
    )
}
