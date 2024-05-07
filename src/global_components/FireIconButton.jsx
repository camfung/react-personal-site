import { IconButton } from '@mui/material';
import React from 'react';

// Define the FireIconButton component
const FireIconButton = ({ icon, ...props }) => {
    return (
        <IconButton {...props}>
            {icon}
        </IconButton>
    );
};

export default FireIconButton;
