import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer"; 
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";


function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleButtonClick = (pageName) => {
    navigate(`/${pageName}`);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    // Initial check for mobile view
    setIsMobile(window.innerWidth <= 768);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const [state, setState] = React.useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
    ) {
        return;
    }

    setState({ ...state, ["right"]: open });
};
const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Data Structures", "Algorithms", "Web Development"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  

  return (
    <div className="header depth medium-blue">
        {isMobile && (
        <div
            className="rise bg_slider nav-button"
            onClick={toggleDrawer("right", true)}>
                hamburger
        </div>
        )}
            {isMobile && (
        <SwipeableDrawer
            transitionDuration={1000}
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
            {...list("right")}
        >
        </SwipeableDrawer>
        )}

          {!isMobile && (
      
      <div className="nav-container">
        <label htmlFor="menu-toggle" className="menu-btn">
          <span className="hamburger"></span>
        </label>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <p
            className="bold big-text home rise"
            onClick={() => handleButtonClick("")}
          >
            Cameron Fung
          </p>
          <div
            className="rise bg_slider nav-button"
            onClick={() => handleButtonClick("projects")}
          >
            <p className="center">Projects</p>
          </div>
          <div
            className="rise bg_slider nav-button"
            onClick={() => handleButtonClick("about")}
          >
            <p className="center">About</p>
          </div>
          <div
            className="rise bg_slider nav-button"
            onClick={() => handleButtonClick("contact")}
          >
            <p className="center">Contact</p>
          </div>
          <div
            className="rise bg_slider nav-button"
            onClick={() => handleButtonClick("blog")}
          >
            <p className="center">Blog</p>
          </div>
          <div
            className="rise bg_slider nav-button"
            onClick={() => handleButtonClick("message")}
          >
            <p className="center">Message Board</p>
          </div>
            <div
              className="rise bg_slider nav-button"
              onClick={() => handleButtonClick("draw")}
            >
              <p className="center">Art Gallery</p>
            </div>
        </nav>
      </div>
          )}    
      <div
        id="contact-me"
        className="rise nav-button mellow-yellow bg_slider-yellow-lightblue depth"
        onClick={() => handleButtonClick("resume")}
      >
        <p>Resume</p>
      </div>
    </div>
  );
}

export default NavBar;
