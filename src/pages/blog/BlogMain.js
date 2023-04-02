import React from 'react';
import "../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import Card from './Card.js';
import "./blogMain.css"
import perlin from "./cardImages/perlin.png"

function BlogMain() {

  return (
    <div class="BlogWrapper">
      {/* <Card title="Assignment 3 Procedural Programming"
      text="This is my journey of making the best fastest bst"
      image="https://media.geeksforgeeks.org/wp-content/uploads/BSTSearch.png"
      post="assignment3"></Card> */}

      <Card title="Making a Perlin Noise Generator"
      text="Warning this made me sick while i was working on it."
      image={perlin}
      post="perlin"></Card>

      <Card title="Hosting a static website on Microsoft Azure"
      text="Tutorial on how to host a static website on Microsoft Azure"
      image="https://swimburger.net/media/fbqnp2ie/azure.svg"
      post="staticWebAppTutorial"></Card>

      <Card title="Preparing for my first internship"
      text="This is a compilaiton of the articles that I liked when i was reading about preparing for my first internship"
      image="https://m.economictimes.com/thumb/msid-69278826,width-1200,height-900,resizemode-4,imgsize-82628/internship2-getty.jpg"
      post="internship"></Card>
    </div>
  );
}

export default BlogMain;
