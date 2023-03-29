import React from 'react';
import NavBar from "../../global_components/NavBar";
import Footer from '../../global_components/Footer';
import "../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import BlogMain from './BlogMain';


function Blog() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/");
    };

  return (
    <div class="wrapper">
      <NavBar></NavBar>
        <BlogMain></BlogMain>
      <Footer></Footer>
      
    </div>
  );
}

export default Blog;
