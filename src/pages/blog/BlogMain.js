import React from 'react';
import "../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import Card from './Card.js';
import "./blogMain.css"

function BlogMain() {

  return (
    <div class="BlogWrapper">
      <Card></Card>
    </div>
  );
}

export default BlogMain;
