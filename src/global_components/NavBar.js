import React, { useState, useCallback } from 'react';
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import useScreenSize from '../hooks/useScreenSize';
import { ScreenSize } from '../enums/screenSizes';
import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
function NavBar() {
    const [open, setOpen] = useState(false)

    const navigate = useNavigate();

    const handleButtonClick = (pageName) => {
        navigate(`/${pageName}`);
    };
    const toggleDrawer = useCallback(() => {
        setOpen(!open)
    }, [setOpen, open]);

    const navItems = [
        { pageName: "blog", label: "Blog" },
        { pageName: "message", label: "Message Board" },
        { pageName: "draw", label: "Art Gallery" },
        { pageName: "streaming", label: "Streaming" }
    ]


    const screenSize = useScreenSize()
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => { toggleDrawer() }}>
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => { handleButtonClick(item.pageName) }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div class="header depth medium-blue">
            <nav>
                <p class="bold big-text home rise" onClick={() => handleButtonClick("")}>Cameron Fung</p>
                {screenSize == ScreenSize.LARGE && (
                    <>
                        {navItems.map((item, key) => (
                            <div key={key} class="rise bg_slider nav-button" onClick={() => handleButtonClick(item.pageName)}><p class="center">{item.label}</p></div>
                        ))}
                    </>
                )}
            </nav>

            <Drawer anchor="right" open={open} onClose={() => { toggleDrawer() }}>
                {DrawerList}
            </Drawer>

            {screenSize == ScreenSize.MEDIUM || screenSize == ScreenSize.SMALL && (
                <>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, }}
                        onClick={() => { toggleDrawer() }}
                    >
                        <Menu />
                    </IconButton>
                </>
            )}
            {screenSize == ScreenSize.LARGE && (
                <>
                    <div id="contact-me" class="rise nav-button mellow-yellow bg_slider-yellow-lightblue depth" onClick={() => handleButtonClick("resume")}><p>Resume</p></div>
                </>
            )}

        </div>
    )
}

export default NavBar;
