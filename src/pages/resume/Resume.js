import React from "react";
import NavBar from "../../global_components/NavBar";
import Footer from "../../global_components/Footer";
import "../../global_components/backgroundcolors.css";
import { useNavigate } from "react-router-dom";
import "./resume.css";

function Resume() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/app");
  };

  return (
    <div className="">
      <NavBar></NavBar>
      <div className="resumeWrapper">
      {/* <iframe width="760px" height="500px" src="https://sway.office.com/s/9prGfv4GyT8k1ROG/embed" frameborder="0" marginheight="0" marginwidth="0" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" allowfullscreen mozallowfullscreen msallowfullscreen webkitallowfullscreen></iframe> */}
      <h1>Cameron Fung</h1>
      <p>
        Computer Science Student, Burnaby, BC,{" "}
        <a href="mailto:cfung52@mybcit.ca">cfung52@mybcit.ca</a> | 604-818-8168
      </p>
      <p>
        <a href="https://www.linkedin.com/in/cameron-fung/">
          linkedin.com/in/cameron-fung/
        </a>{" "}
        | <a href="https://github.com/camfung/">github.com/camfung/</a> |{" "}
        <a href="https://cameron-fung.web.app/">cameron-fung.web.app/</a>
      </p>

      <h2>TECHNICAL PROJECTS</h2>
      <h3>Personal Project, Rubik’s Cube Solver and Visualization</h3>
      <p>July – August 2022</p>
      <ul>
        <li>
          Implemented an algorithm that given a scrambled Rubik’s Cube will
          return a set of moves to get to the solved state.
        </li>
        <li>Used Object Oriented Methods: Inheritance and Polymorphism.</li>
        <li>Processing Java is used to visualize the Rubik’s Cube.</li>
      </ul>

      <h3>Personal Project, A* Search Algorithm</h3>
      <p>May 2022</p>
      <ul>
        <li>
          Implemented event-driven programming to handle user input and game
          logic.
        </li>
        <li>Python and Pygame were used to create the visualization.</li>
      </ul>

      <h3>Academic Project, Playlist cover Generator</h3>
      <p>September – December 2022</p>
      <ul>
        <li>
          Implemented Agile software development strategy, working in a team of
          3.
        </li>
        <li>
          Created a Node and Express.js web app that integrates the Spotify API
          and the Open AI API
        </li>
        <li>
          Participated in Pair Programming as part of the development process.
        </li>
      </ul>

      <h3>Personal Project, Cactus Club Bartender Cash Out Automation</h3>
      <p>April 2022</p>
      <ul>
        <li>
          Identified a task that was repetitive and could be automated to save
          employee’s time.
        </li>
        <li>
          Learned about the requirements and specifications that the app would
          need in-order to be useful to the user.
        </li>
        <li>
          Implemented using JavaScript, HTML, CSS and GitHub Hosting to put on
          the web for easy access to the user.
        </li>
      </ul>

      <h3>Personal Project, Julia, and Mandelbrot Fractal Generator</h3>
      <p>June 2022</p>
      <ul>
        <li>
          Created a Fractal generator using object-oriented programming
          techniques in C++.
        </li>
        <li>
          Utilized Portable Pixel Maps to represent the fractal images and
          implemented support for imaginary numbers to generate the fractal
          patterns.
        </li>
      </ul>

      <h3>HACKATHON</h3>
      <p>QDS Hacks, Burnaby, B.C. First Place Team</p>
      <p>January 2023</p>
      <ul>
        <li>
          Proposed a solution to increase fuel efficiency for mining transport
          trucks.
        </li>
        <li>
          Resulted in an estimated savings of $6,000,000 by reducing truck idle
          time.
        </li>
        <li>
          Created visually pleasing graphs and UI using chart.js, HTML, CSS and
          Java Script.
        </li>
      </ul>

      <div>
        <h2>TECHNICAL SKILLS</h2>
        <ul>
          <li>Programming Languages: Python, Java, JavaScript, C++, SQL</li>
          <li>
            Tools/Environments: Git, Firebase Cloud Functions, Processing,
            PyGame, Junit, Google Cloud Platform
          </li>
          <li>Web: Node.js, Express.js, Bootstrap, Firebase, React.js</li>
        </ul>
      </div>

      <div>
        <h2>WORK EXPERIENCE</h2>
        <ul>
          <li>
            <p>
              <strong>Tournament Coordinator, Burnaby, B.C.</strong>
            </p>
            <p>Volleyball BC</p>
            <p>January 2021 – Present</p>
          </li>
        </ul>
      </div>

      <li>
        <p>
          <strong>Bar Back, Burnaby, B.C.</strong>
        </p>
        <p>Cactus Club Café</p>
        <p>May 2021 – September 2022</p>
      </li>

      <h2>EDUCATION</h2>
      <p>
        <p>Computer Systems Technology</p>
        <p>Diploma | British Columbia Institute of Technology</p>
        <p>September 2022 – (December 2024)</p>
      </p>
      </div>

      <Footer></Footer>
      {/* <button onClick={handleButtonClick}>Go to App Page</button> */}
    </div>
  );
}

export default Resume;
