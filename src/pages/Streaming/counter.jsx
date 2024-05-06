import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// todo change the count to be passed in so that it can be updated by the parent componet
function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count <= 0) return;
        setCount(count - 1);
    };

    return (
        <Box display="flex">
            <Button variant="contained" color="primary" onClick={handleDecrement}>
                -
            </Button>
            <Typography variant="h4" mx={2}>
                {count}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleIncrement}>
                +
            </Button>
        </Box>
    );
}

export default Counter;
