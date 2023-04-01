import React from 'react';
import "../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import Card from './Card.js';
import "./blogMain.css"

function BlogMain() {

  return (
    <div class="BlogWrapper">
      <Card title="Assignment 3 Procedural Programming"
      text="This is my journey of making the best fastest bst"
      image="https://media.geeksforgeeks.org/wp-content/uploads/BSTSearch.png"
      post="assignment3"></Card>
    </div>
  );
}

export default BlogMain;
