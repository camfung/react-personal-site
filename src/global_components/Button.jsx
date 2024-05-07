import React from 'react';
import "./backgroundcolors.css"
import { Button } from '@mui/material';
import "./NavBar.css"
function FireButton(props) {

    return (
        <>
            <>
                <Button sx={{ padding: "5px", color: "white", transition: "background-position .6s ease-in-out, color .2s linear", transitionDelay: "0.0s, 0.15s" }} className="bg_slider nav-button" {...props}> {props.text || props.children}</Button>
            </>
        </>
    );
}

export default FireButton;
