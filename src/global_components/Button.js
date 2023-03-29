import React from 'react';
import "./backgroundcolors.css"
import "./NavBar.css"
function Button(props) {

  return (
    <div class="wrapper">
        <div class="rise bg_slider nav-button"><p class="center">{props.text}</p></div>
    </div>
  );
}

export default Button;
