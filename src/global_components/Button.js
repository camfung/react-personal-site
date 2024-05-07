import React from 'react';
import "./backgroundcolors.css"
import { Button } from '@mui/material';
import "./NavBar.css"
function FireButton(props) {

  return (
    <>
      <div class="wrapper">
        <div onClick={props.onClick}><p class="center">{props.text}</p></div>

      </div>

      <>
        <Button className="rise bg_slider nav-button" {...props}>{props.children}</Button>
      </>
    </>
  );
}

export default FireButton;
