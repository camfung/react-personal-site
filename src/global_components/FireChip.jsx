import React from 'react';
import Chip from '@mui/material/Chip';

// FireChip component
const FireChip = ({ label, active, onClick }) => {
    return (
        <Chip
            sx={{ backgroundColor: active ? '#ffc300' : '' }}
            label={label}
            clickable
            onClick={onClick}
        />
    );
};

export default FireChip;
