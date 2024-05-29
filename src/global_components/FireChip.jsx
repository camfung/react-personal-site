import React from 'react';
import Chip from '@mui/material/Chip';

// FireChip component
const FireChip = ({ label, active, onClick }) => {
    return (
        <Chip
            label={label}
            clickable
            onClick={onClick}
            color="primary"
            variant={active ? "filled" : "outlined"}
        />
    );
};

export default FireChip;
