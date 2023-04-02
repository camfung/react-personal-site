import React from "react";
import { useState } from "react";
import "../../../global_components/backgroundcolors.css";
import { useNavigate } from "react-router-dom";
import "./internship.css";
import Button from "../../../global_components/Button";
import TableOfContents from "./TableOfContents";
import image from '../blogImages/caleb.png';

function InternshipMain() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="Internship-wrapper">
      <h1>Intership prep resources</h1>
      <p> Hey, first off thanks for visiting it means a lot that you clicked on a ranodm link lol.</p>
      <p>I am just gonna be adding things to this list as i find them</p>

      <TableOfContents></TableOfContents>

      <h2> Caleb Shoeppe</h2> 
      <a href="https://calebschoepp.com/blog/2022/6-tips-for-starting-a-software-engineering-internship/"></a>
      <p> Caleb is a software engineer at Microsoft and he has a youtube channel where he talks about his journey to becoming a software engineer and he also has a blog where he talks about his journey and he also has a podcast where he talks about his journey. </p>
      <p> He has a page on his website that goes over 6 tips but this one is my favorite</p>
      <img src={image} alt="Image Name" className="internshipImage" />


    </div>
  );
}

export default InternshipMain;
